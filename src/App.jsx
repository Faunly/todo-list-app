import {useEffect, useState} from "react";

import {addTask, changeDataTask, deleteTask, fetchTasksByCategory} from "./http.js";
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
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        fetchTasksByCategories("all");
    }, []);

    async function fetchTasksByCategories(filter) {
        setIsFetching(true);
        try {
            const todos = await fetchTasksByCategory(filter);
            setTasks(todos.data);
            setCategories(todos.info);
            setFilter(filter);
        } catch (error) {
            setError(error);
        } finally {
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
        } catch(error) {
            setError(error);
        } finally {
            setIsFetching(false);
        }
        setValueInput("");
        await fetchTasksByCategories(filter);
    }

    async function handleChangeDataTask(id, titleTask, isDone) {
        setIsFetching(true);
        try {
            await changeDataTask(id, titleTask, !isDone);
        } catch(error) {
            setError(error);
        } finally {
            setIsFetching(false);
        }
        await fetchTasksByCategories(filter);
    }

    async function handleDeleteTask(id) {
        setIsFetching(true);
        try {
            await deleteTask(id);
        } catch(error) {
            setError(error);
        } finally {
            setIsFetching(false);
        }
        await fetchTasksByCategories(filter);
    }

    function handleChangeInput(newValue) {
        setValueInput(newValue);
    }

    return (
        <div className={classes.container}>
            <InputTask
                onAddTask={handleAddTask}
                valueInputTask={valueInput}
                onChangeInput={handleChangeInput}
            />
            <ul className={classes.categoriesList}>
                {Object.entries(categories).map(
                    (info, id) => <CategoriesList
                        key={id}
                        curFilter={filter}
                        title={info[0]}
                        amount={info[1]}
                        onChangeFilter={fetchTasksByCategories}
                    />
                )}
            </ul>
            {!isFetching && tasks.map(task => <TasksList
                    key={task.id}
                    id={task.id}
                    titleTask={task.title}
                    isDone={task.isDone}
                    onChangeData={handleChangeDataTask}
                    onDelete={handleDeleteTask}
            />)}
            {isFetching && <h3>Fetching tasks...</h3>}
        </div>
    );
}
