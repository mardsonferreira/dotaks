import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: rgba(0, 0, 0, 0.9);
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(0, 0, 0, 0.7);
            }
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #ffda44;
            font-weight: bold;
            color: #2d2c2b;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, "#ffda44")};
            }
        }

        a {
            color: #000;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 16px;

    strong {
        font-size: 28px;
        color: #000;

        margin-top: 8px;
    }

    img {
        width: 64px;
        height: 64px;
    }
`;
