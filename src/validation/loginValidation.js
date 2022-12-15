import * as yup from 'yup';

export const loginValidation = (form) =>{
    const loginSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().email(),
    })
    let isValid = loginSchema.isValid(form)
    return isValid
}