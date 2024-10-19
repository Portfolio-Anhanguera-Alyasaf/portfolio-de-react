import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './FormularioEmail.css';

const FormularioEmail = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Endereço de e-mail inválido!').required('Obrigatório'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <form
                className='form-container'
                onSubmit={formik.handleSubmit}>
                <label htmlFor='email' className='form-label'>E-mail</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    className={`form-input ${formik.touched.email && formik.errors.email ? 'input-error' : ''}`}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <p className='error-message'>{formik.errors.email}</p>
                ) : null}
                <button type='submit' className='submit-button'>Enviar</button>
            </form>
        </>
    )
}

export default FormularioEmail;
