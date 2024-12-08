import {useEffect, useState} from "react";

import {addTask, changeStatusTask, fetchTasksByCategory} from "./http.js";
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
        setValueInput("");
        await fetchTasksByCategories("all");
    }

    async function handleChangeStatusTask(id, titleTask, isDone) {
        setIsFetching(true);
        const curStatusTask = handleChangeChecked(isDone)
        try {
            await changeStatusTask(id, titleTask, curStatusTask);
            setIsFetching(false);
// todo: change loading fetching text to optimistic update
        } catch(error) {
            setError(error);
            setIsFetching(false);
        }
        await fetchTasksByCategories("all");
    }

    function handleChangeInput(newValue) {
        setValueInput(newValue);
    }

    function handleChangeChecked(isDone) {
        return !isDone
    }

    return (
        <>
            <h2>Todolist</h2>
            {isFetching && <h3>Fetching tasks...</h3>}
            <InputTask
                onAddTask={handleAddTask}
                valueInputTask={valueInput}
                onChangeInput={handleChangeInput}
            />
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
                    id={task.id}
                    titleTask={task.title}
                    isDone={task.isDone}
                    onChangeStatus={handleChangeStatusTask}
            />)}
        </>
    );
}