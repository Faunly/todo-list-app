import { useState, useEffect } from "react";
import TasksList from "./components/TasksList/TasksList.jsx";


// import InputTask from "./components/inputTask/InputTask.jsx";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchTest() {
            try {
                const response = await fetch("https://easydev.club/api/v1/todos?filter=inWork");
                const resData = await response.json();
                setTasks(resData.data);

                if (!response.ok) {
                    throw new Error("Error an occurred!");
                }

            } catch(error) {
                setError(error);
            }
        }
        fetchTest();
    }, []);

    if (error) {
        console.log("Error fetch!!!")
    }

    return(
        <>
            <h2>Todolist</h2>
            {tasks.map(item => <TasksList titleTask={item.title}/>)}

        </>
    );
}