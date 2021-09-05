import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { InputProps } from "./types";

export default function Input({ name, label, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: (ref) => {
                return ref.current.value;
            },
            setValue: (ref, value) => {
                ref.current.value = value;
            },
            clearValue: (ref) => {
                ref.current.value = "";
            },
        });
    }, [fieldName, registerField]);

    return (
        <>
            {label && <label htmlFor={fieldName}>{label}</label>}
            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                className={error ? "has-error" : ""}
                {...rest}
            />
            {error && <span>{error}</span>}
        </>
    );
}
