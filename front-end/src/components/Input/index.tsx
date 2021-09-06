import React from "react";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ name, register, ...rest }) => {
    return (
        <>
            <input {...register(name)} {...rest} />
            <span> {rest.error?.message} </span>
        </>
    );
};

export default Input;
