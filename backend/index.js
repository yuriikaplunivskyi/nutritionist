import express from "express";
import mysql from "mysql";
import cors from "cors";

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
    const q = "UPDATE service SET `title`=?, `descr`=?, `path`=?, `icon`=?, `passing`=?, `prices`=?, `warnings`=? WHERE id = ?";

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


app.listen(8800, () => {
    console.log("Connected to backend!")
})


