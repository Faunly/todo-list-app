import { useState, useEffect } from "react";
// import TasksList from "./components/TasksList/TasksList.jsx";

// import InputTask from "./components/inputTask/InputTask.jsx";

export default function App() {
    // const [tasks, setTasks] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchTest() {
            try {
                const response = await fetch("https://easydev.club/api/v1/todos");
                const resData = await response.json();
                for (let i = 0; i < resData.data.length; i++) {
                    console.log(resData.data[i].title);
                }
                console.log(resData.data.length);
                // setTasks(resData);

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
            <h2>Todo-list</h2>
            {/*<TasksList />*/}
            {/* todo: dynamically output list tasks}*/}
        </>
    );
}