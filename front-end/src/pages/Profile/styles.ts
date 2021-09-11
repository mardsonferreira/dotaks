import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

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

        hr {
            border: 0;
            height: 1px;
            background: #b6b3b3;
            margin: 10px 0 20px;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #ffda44;
            font-weight: bold;
            color: #000;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, "#ffda44")};
            }
        }
    }

    > button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #d10839;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.08, "#d10839")};
        }
    }
`;
