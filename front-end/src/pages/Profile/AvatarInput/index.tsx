import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import avatar from "../../../assets/avatar-default.jpg";

import { AvatarProps } from "./types";

import { Container } from "./styles";
import api from "../../../services/api";

const AvatarInput: React.FC<AvatarProps> = ({
    name,
    register,
    initialValue,
}) => {
    const [preview, setPreview] = useState(initialValue && initialValue.url);
    const [file, setFile] = useState(initialValue && initialValue.id);

    async function handleChange(e) {
        const data = new FormData();

        data.append("file", e.target.files[0]);

        // const response = await api.post("files", data);

        // const { id, url } = response.data;

        setFile(1);
        setPreview(
            "http://localhost:3333/files/256e1643ee8f055cf9fe0a22e4deadd9.jpg"
        );
    }

    return (
        <Container>
            <label htmlFor="avatar">
                <img src={preview || avatar} alt="" />

                <input
                    {...register(name)}
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                />
            </label>
        </Container>
    );
};

export default AvatarInput;
