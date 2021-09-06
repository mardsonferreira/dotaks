import * as Yup from "yup";

export interface SignInForm {
    email: string;
    password: string;
}

const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid e-mail").required("Required field"),
    password: Yup.string().min(6).required("Required field"),
});

export default SignInSchema;
