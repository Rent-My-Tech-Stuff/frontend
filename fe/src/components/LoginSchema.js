import * as yup from "yup"

export default yup.object().shape({
    username: yup
    .string()
    .required("a valid username is required"),
    password: yup
    .string()
    .required("password is required ")
})