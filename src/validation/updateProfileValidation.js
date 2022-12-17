import * as yup from 'yup';

export const updateProfileValidation = (form) =>{
    const loginSchema = yup.object().shape({
        email: yup.string().required().email(),
        old_password: yup.string().required(),
        new_password:  yup.string().required(),
        confirm_password: yup.string().required(),
    })
    let isValid = loginSchema.isValid(form)
    return isValid
}