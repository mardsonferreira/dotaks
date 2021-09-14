import React, { useEffect, useState } from "react";

import avatar from "../../../assets/avatar-default.jpg";

import { AvatarProps } from "./types";

import api from "../../../services/api";

import { Container } from "./styles";

const AvatarInput: React.FC<AvatarProps> = ({
    name,
    register,
    setValue,
    initialValue,
}) => {
    const [preview, setPreview] = useState(initialValue && initialValue.url);
    const [file, setFile] = useState(initialValue && initialValue.id);

    useEffect(() => {
        register("avatarId");
        setValue("avatarId", file);
    }, [file]);

    async function handleChange(e) {
        const data = new FormData();

        data.append("file", e.target.files[0]);

        const response = await api.post("files", data);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="avatar">
                <img src={preview || avatar} alt="" />

                <input
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
