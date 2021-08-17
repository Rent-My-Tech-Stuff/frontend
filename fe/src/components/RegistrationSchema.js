import * as yup from 'yup'

export default yup.object().shape({
    username: yup
    .string()
    .required("a valid username is required"),
    password: yup
    .string()
    .required("a valid password is required"),
    email: yup
    .string()
    .email("must be a valid email address")
    .required("a valid email is required"),
    firstname: yup
    .string()
    .required("first name is required"),
    lastname: yup
    .string()
    .required("last name is required"),
    streetAddress: yup
    .string()
    .required("address is required"),
    city: yup
    .string()
    .required("city is required"),
    state: yup
    .string()
    .required("state is required"),
    zipcode: yup
    .string()
    .required("zipcode is required"),
    role: yup
    .string()
    .oneOf(["renter", "owner"], "account type is required")
    

})