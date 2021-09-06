import * as Yup from "yup";

export interface SignUpForm {
    name: string;
    email: string;
    password: string;
}

const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Invalid e-mail").required("E-mail is required!"),
    password: Yup.string().min(6).required("Password is required!"),
});

export default SignUpSchema;
