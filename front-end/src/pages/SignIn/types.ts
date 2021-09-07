import * as Yup from "yup";

export interface SignInForm {
    email: string;
    password: string;
}

const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid e-mail").required("E-mail is required!"),
    password: Yup.string().min(6).required("Password is required!"),
});

export default SignInSchema;
