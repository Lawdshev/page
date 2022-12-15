import * as yup from 'yup';

export const privateSecValidation = (form) =>{
    const privSecSchema = yup.object().shape({
        email: yup.string().required().email(),
        dob: yup.string().required(),
        gender:yup.string().required(),
        dependents: yup.number().required(),
        education: yup.string().required(),
        tenure: yup.number().required(),
        income:yup.string().required(),
        employername:yup.string().required()
    })
    let isValid = privSecSchema.isValid(form)
    return isValid
}
