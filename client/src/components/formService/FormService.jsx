import './formService.scss';
import { motion} from "framer-motion";
import useContactForm from '../../hooks/useContactForm';
import { useForm } from 'react-hook-form';

const variants = {
    initial: {
        x: 500,
        y: 50,
        opacity: 0,
        
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const FormService = () => {
    const { formRef, error, success, handleSubmit, validationSchema } = useContactForm();
    const { register, handleSubmit: hookFormHandleSubmit, formState: { errors } } = useForm({
        resolver: validationSchema,
    });

    return (
        <div className='form-container'>
            <h5 className='form-title'>Важлива частина, це звязатися зі мною. </h5>
            <motion.form 
                    onSubmit={hookFormHandleSubmit((data) => handleSubmit(data))} 
                    ref={formRef}
                    action=""
                    className="form" 
                    variants={variants} 
                    initial="initial" 
                    whileInView="animate"
                >
                    <div className="input-wrapper">
                        <input 
                            type="text" 
                            required 
                            placeholder="Ім&apos;я" 
                            name="name"
                            id="name"
                            className={`input ${errors && errors.name ? 'error' : ''}`}
                            {...register('name')}
                            />
                        {errors && errors.name && <p className="error-message">{errors.name.message}</p>}
                    </div>
                    <div className="input-wrapper">
                        <input 
                            type="email" 
                            required 
                            placeholder="Елетронная пошта" 
                            name="email"
                            id="email"
                            className={`input ${errors && errors.email ? 'error' : ''}`}
                            {...register('email')}
                        />
                        {errors && errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    
                    <div className="input-wrapper">
                        <textarea 
                            name="message" 
                            id="message" 
                            rows={8} 
                            placeholder="Повідомлення(Додаткова інформація, контакти: telegram, viber ...)"
                            className={`input ${errors && errors.message ? 'error' : ''}`}
                            {...register('message')}
                            
                        />
                        {errors && errors.message && <p className="error-message">{errors.message.message}</p>}
                    </div>
                    
                    
                    <button type="submit" disabled={success || error}>
                        {success ? 'Успішно відправлено' : error ? 'Помилка при відправці' : 'Відправити'}
                    </button>
        </motion.form>
        </div>
    )
}

export default FormService