import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bogoduchiv1996",
    database: "services",
});

//if trouble with auth use thi im MySQL Workbench
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

app.listen(8800, () => {
    console.log("Connected to backend!")
})


