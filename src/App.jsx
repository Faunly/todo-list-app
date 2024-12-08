import {useEffect, useState} from "react";

import {addTask, fetchTasksByCategory} from "./http.js";
import TasksList from "./components/TasksList/TasksList.jsx";
import CategoriesList from "./components/CategoriesList/CategoriesList.jsx";

import classes from "./App.module.css"
import InputTask from "./components/InputTask/InputTask.jsx";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState();
    const [isFetching, setIsFetching] = useState(false);
    const [valueInput, setValueInput] = useState("");

    useEffect(() => {
        fetchTasksByCategories("all");
    }, []);

    async function fetchTasksByCategories(title) {
        setIsFetching(true);
        try {
            const todos = await fetchTasksByCategory(title);

            setTasks(todos.data);
            setCategories(todos.info);
            setIsFetching(false);
        } catch (error) {
            setError(error);
            setIsFetching(false);
        }
    }

    if (error) {
        console.log("Error fetch!!!")
    }

    async function handleAddTask() {
        setIsFetching(true);
        try {
            await addTask(valueInput);
            setIsFetching(false);
        } catch(error) {
            setError(error);
            setIsFetching(false);
        }
        console.log("run handleAddTask", valueInput);
        setValueInput("");
        await fetchTasksByCategories("all");
    }

    function handleChange(newValue) {
        console.log(valueInput);
        setValueInput(newValue);
    }

    return (
        <>
            <h2>Todolist</h2>
            {isFetching && <h3>Fetching tasks...</h3>}
            <InputTask onAddTask={handleAddTask} valueInputTask={valueInput} onChange={handleChange}/>
            <ul className={classes.categoriesList}>
                {Object.entries(categories).map(
                    (info, id) => <CategoriesList
                        key={id}
                        title={info[0]}
                        amount={info[1]}
                        onChangeFilter={fetchTasksByCategories}
                    />
                )}
            </ul>
            {tasks.map(task => <TasksList
                    key={task.id}
                    titleTask={task.title}
                    isDone={task.isDone}
            />)}
        </>
    );
}