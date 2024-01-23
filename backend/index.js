import fs from 'fs';
import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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

app.use("/public/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    next();
});



const certificateStorage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const originalname = path.parse(file.originalname).name;
        const filename = `${originalname}-${uniqueSuffix}${path.extname(file.originalname)}`;
        cb(null, filename);
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

app.get("/certificates/:id", (req, res) => {
    const certificateId = req.params.id;
    const selectQuery = "SELECT * FROM certificates WHERE id=?";
    
    db.query(selectQuery, [certificateId], (err, data) => {
        if (err) return res.json(err);
        
        if (data.length === 0) {
            return res.status(404).json({ error: "Certificate not found" });
        }

        res.json(data[0]);
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


app.put("/certificates/:id", certificateUpload, (req, res) => {
    const certificateId = req.params.id;
    const selectQuery = "SELECT * FROM certificates WHERE id=?";

    db.query(selectQuery, [certificateId], (selectErr, selectData) => {
        if (selectErr) return res.json(selectErr);

        if (selectData.length === 0) {
            return res.status(404).json({ error: "Certificate not found" });
        }

        const oldImagePath = path.join(__dirname, 'public', selectData[0].img_path);
        if (fs.existsSync(oldImagePath)) {
            try {
                fs.unlinkSync(oldImagePath);
            } catch (err) {
                console.error(`Error deleting file ${oldImagePath}:`, err);
            }
        }

        let updateQuery;
        let certificateValues;

        if (req.file) {
            const imgPath = `uploads/${req.file.filename}`;
            updateQuery = "UPDATE certificates SET `img_path`=?, `school`=?, `title`=? WHERE id=?";
            certificateValues = [imgPath, req.body.school, req.body.title, certificateId];
        } else {
            updateQuery = "UPDATE certificates SET `school`=?, `title`=? WHERE id=?";
            certificateValues = [req.body.school, req.body.title, certificateId];
        }

        db.query(updateQuery, certificateValues, (updateErr, updateData) => {
            if (updateErr) return res.json(updateErr);
            return res.json("Certificate has been updated successfully");
        });
    });
});




app.listen(8800, () => {
    console.log("Connected to backend!")
})


