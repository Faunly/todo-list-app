import {useState, useEffect} from "react";
import TasksList from "./components/TasksList/TasksList.jsx";
import CategoriesList from "./components/CategoriesList/CategoriesList.jsx";

import classes from "./App.module.css"
// import InputTask from "./components/InputTask/InputTask.jsx";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState();
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchTasks() {
            setIsFetching(true);
            try {
                const response = await fetch("https://easydev.club/api/v1/todos?filter=completed");
                const resData = await response.json();
                setTasks(resData.data);
                setCategories(resData.info);

                if (!response.ok) {
                    throw new Error("Error an occurred!");
                }
            } catch (error) {
                setError(error);
            }
            setIsFetching(false);
        }

        fetchTasks();
    }, []);

    if (error) {
        console.log("Error fetch!!!")
    }

    return (
        <>
            <h2>Todolist</h2>
            {isFetching && <h3>Fetching tasks...</h3>}
            <ul className={classes.categoriesList}>
                {Object.entries(categories).map(
                    (info, id) => <CategoriesList
                        key={id}
                        title={info[0]}
                        amount={info[1]}
                    />
                )}
            </ul>
            {tasks.map(task => <TasksList
                key={task.id}
                titleTask={task.title}
                isDone={task.isDone}/>
            )}
        </>
    );
}