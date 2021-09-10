import React, { useEffect } from "react";
import api from "../../services/api";

// import { Container } from './styles';

const Dashboard: React.FC = () => {
    useEffect(() => {
        async function loadTasks() {
            const tasks = await api.get("/tasks/1");
            console.log(tasks);
        }

        loadTasks();
    }, []);

    return <h1>Dashboard</h1>;
};

export default Dashboard;
