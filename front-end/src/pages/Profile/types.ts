import * as Yup from "yup";

export interface ProfileForm {
    name: string;
    email: string;
    oldPassword: string;
    password: string;
    confirmPassword: string;
}

const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Invalid e-mail").required("E-mail is required!"),
    oldPassword: Yup.string(),
});

export default ProfileSchema;
