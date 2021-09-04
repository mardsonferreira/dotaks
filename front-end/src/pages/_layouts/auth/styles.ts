import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
    height: 100%;
    background: #303654;
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
            background: rgba(250, 250, 250, 0.8);
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
            background: #5ccb9a;
            font-weight: bold;
            color: #040404;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, "#5ccb9a")};
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
`;
