import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";
import path from "path";


const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bogoduchiv1996",
    database: "services",
});

app.use(express.json());
app.use(cors());
//if trouble with auth use this in MySQL Workbench
//ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'Bogoduchiv1996';

app.get("/", (req,res) => {
    res.json("hello db")
})

app.get("/services", (req, res) => {
    const q = `
        SELECT
            id,
            title,
            descr,
            path,
            icon,
            passing,
            prices,
            warnings
        FROM
            service;
    `;

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        else res.json(data)
    })
})

// Додати цей маршрут перед рештою маршрутів
app.get("/services/:id", (req, res) => {
    const serviceId = req.params.id;
    const q = `
        SELECT
            id,
            title,
            descr,
            path,
            icon,
            passing,
            prices,
            warnings
        FROM
            service
        WHERE
            id = ?;
    `;

    db.query(q, [serviceId], (err, data) => {
        if (err) return res.json(err);
        
        if (data.length === 0) {
            return res.status(404).json({ error: "Service not found" });
        }

        res.json(data[0]); 
    });
});


app.post("/services", (req, res) => {
    const q = 
    "INSERT INTO service (`title`, `descr`, `passing`, `prices`, `warnings`, `path`, `icon`) VALUE (?)";

    const values = [
        req.body.title,
        req.body.descr,
        JSON.stringify(req.body.passing),
        JSON.stringify(req.body.prices),
        JSON.stringify(req.body.warnings),
        req.body.path,
        req.body.icon,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Service has been created");
    });
});

app.delete("/services/:id", (req, res) => {
    const serviceId = req.params.id;
    const q = ("DELETE FROM service WHERE id=?");

    db.query(q, [serviceId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Service has been deleted Successfully");
    });
})

app.put("/services/:id", (req, res) => {
    const serviceId = req.params.id;
    const q = "UPDATE service SET `title`=?, `descr`=?, `path`=?, `icon`=?, `passing`=?, `prices`=?, `warnings`=? WHERE id=?";

    const values = [
        req.body.title,
        req.body.descr,
        req.body.path,
        req.body.icon,
        JSON.stringify(req.body.passing),
        JSON.stringify(req.body.prices),
        JSON.stringify(req.body.warnings),
        serviceId,
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json("Service has been updated Successfully");
    });
});

db.query(`
    CREATE TABLE IF NOT EXISTS certificates (
        id INT AUTO_INCREMENT,
        img_path VARCHAR(255),
        school VARCHAR(255),
        title VARCHAR(255),
        PRIMARY KEY(id)
    )
`, (err, result) => {
    if (err) throw err;
    console.log("Certificates table created");
});

const certificateStorage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const certificateUpload = multer({
    storage: certificateStorage,
    limits:{fileSize: 2000000},
}).single('certificateImage');

app.post('/uploadCertificate', (req, res) => {
    certificateUpload(req, res, (err) => {
        if (err) {
            res.json({ msg: err });
        } else {
            if (req.file == undefined) {
                res.json({ msg: 'Error: No File Selected!' });
            } else {
                const imgPath = `uploads/${req.file.filename}`;
                res.json({
                    msg: 'File Uploaded!',
                    file: imgPath
                });

                const insertQuery = "INSERT INTO certificates (`img_path`, `school`, `title`) VALUES (?, ?, ?)";
                const certificateValues = [imgPath, req.body.school, req.body.title];

                db.query(insertQuery, certificateValues, (insertErr, insertData) => {
                    if (insertErr) {
                        console.error("Error inserting certificate into database: ", insertErr);
                    } else {
                        console.log("Certificate data inserted into the database");
                    }
                });
            }
        }
    });
});

app.get("/certificates", (req, res) => {
    const selectQuery = "SELECT * FROM certificates";
    db.query(selectQuery, (err, data) => {
        if (err) return res.json(err);
        else res.json(data);
    });
});

app.post("/certificates", (req, res) => {
    const insertQuery = "INSERT INTO certificates (`img_path`, `school`, `title`) VALUES (?, ?, ?)";
    const certificateValues = [req.body.img_path, req.body.school, req.body.title];

    db.query(insertQuery, certificateValues, (err, data) => {
        if (err) return res.json(err);
        return res.json("Certificate has been created");
    });
});

app.delete("/certificates/:id", (req, res) => {
    const certificateId = req.params.id;
    const deleteQuery = "DELETE FROM certificates WHERE id=?";

    db.query(deleteQuery, [certificateId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Certificate has been deleted successfully");
    });
});

app.put("/certificates/:id", (req, res) => {
    const certificateId = req.params.id;
    const updateQuery = "UPDATE certificates SET `img_path`=?, `school`=?, `title`=? WHERE id=?";
    const certificateValues = [req.body.img_path, req.body.school, req.body.title, certificateId];

    db.query(updateQuery, certificateValues, (err, data) => {
        if (err) return res.json(err);
        return res.json("Certificate has been updated successfully");
    });
});



app.listen(8800, () => {
    console.log("Connected to backend!")
})


