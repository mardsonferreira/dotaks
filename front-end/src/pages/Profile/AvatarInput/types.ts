import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Avatar } from "../../../store/modules/user/types";

export interface AvatarProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register: UseFormRegister<FieldValues>;
    initialValue: Avatar | null | undefined;
}
