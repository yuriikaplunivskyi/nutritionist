import { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const schema = yup.object({
    name: yup
        .string()
        .required("Ім'я є обов'язковим полем")
        .min(2, 'Мінімум 2 символів')
        .max(140, 'Максимум 140 символів')
        .matches(/^[A-Za-zА-Яа-яҐґЄєІіЇї]+$/, "Ім'я повинно містити літери"),
    email: yup
        .string()
        .required('Електронна пошта є обов\'язковим полем')
        .email('Некоректний формат @email'),
    message: yup
        .string()
        .required("Повідомлення є обов'язковим полем")
        .min(10, 'Мінімум 10 символів')
        .max(240, 'Максимум 240 символів')
        .matches(/^[A-Za-z0-9А-Яа-яҐґЄєІіЇї]+$/, 'Допустимі латинські та кириличні літери, та цифри'),
    });

const useContactForm = () => {
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = (data) => {
        emailjs
        .sendForm(
        'service_jg9jdpa',
        'template_fm6flo8',
        formRef.current,
        '-6q0vNkbrH6QslrGg'
        )
        .then(
            (result) => {
            setSuccess(true);
            formRef.current.reset({ name: '', email: '', message: '' });
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
            },
            (error) => {
            setError(true);
            }
        );
    };

    return {
        formRef,
        error,
        success,
        sendEmail,
        handleSubmit: (data) => sendEmail(data),
        validationSchema: yupResolver(schema),
    };
};

export default useContactForm;
