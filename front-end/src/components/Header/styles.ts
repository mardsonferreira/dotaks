import styled from "styled-components";

export const Container = styled.div`
    padding: 0 30px;
    border-bottom: 1px solid #b6b3b3;
`;

export const Content = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }

        a {
            font-weight: bold;
            color: #000;

            margin-left: 8px;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;

    a {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: #999;
    }

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`;
