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
    ] 
        /* [
    `Супровід з тренувань`,
    `Супровід з тренувань  у режимі онлайн - це індивідуальна програма тренувань спрямована на досягнення ваших цілей. Я як фітнес-тренерка надаю вам персональні рекомендації  та розробляю для вас програму тренувань та підтримую вас, допомагаючи вам крок за кроком досягти бажаного результату. Важливою частиною цього супроводу є постійна підтримка та зворотній зв'язок для досягнення успіху у вашій меті.`,
    JSON.stringify([
        {"id": 1, "stage": "Я надсилаю анкету з питаннями про Вас(стан здоров'я, спосіб життя, мета та обладнання залу)"},
        {"id": 2, "stage": "На основі даних з анкети я розробляю персональну програму тренувань"},
        {"id": 3, "stage": "Програма тренувань нова на кожен тиждень, з урахуванням вашого самопочуття"},
        {"id": 4, "stage": "Далі впродовж 4 тижнів ми спілкуємося через Telegram, ви надсилаєте мені відео з технікою і я даю зворотній зв'язок"},
    ]), 

    JSON.stringify([{"price": "3000 грн/ 4 тижні","id": "1"}]), 

    JSON.stringify([
        {"id": 1, "title": "Не маєте фіксованого часу", "content": "Ви не маєте фіксованого часу для занять з тренером, онлайн-супровід дає гнучкість у виборі часу для фізичної активності, що особливо корисно для тих, хто має зайнятий графік"},
        {"id": 2, "title": "Індивідуальний підхід", "content": "Ви шукаєте індивідуальний підхід, на супроводі створюється індивідуальна програма, яка повністю враховує ваші цілі та потреби і змінюється щотижнево, що в результаті швидше приведе вас до бажаного результату"},
        {"id": 3, "title": "Шукаєте альтернативу фітнес-залу", "content": "Ви шукаєте альтернативу фітнес-залу, онлайн-супровід дає можливість виконувати вправи у комфортному середовищі свого дому або в іншому місці, що підходить саме вам."}
    ]),
    `service_training_support`,
    `./img/services/training.svg`]; */

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Service has been created");
    });
});

app.listen(8800, () => {
    console.log("Connected to backend!")
})


