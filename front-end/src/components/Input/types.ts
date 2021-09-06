import React, { InputHTMLAttributes } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register: UseFormRegister<FieldValues>;
    error: FieldError | undefined;
}
