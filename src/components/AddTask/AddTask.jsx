import {useState} from "react";
import classes from "./AddTask.module.css";
import {addTask} from "../../http.js";

// eslint-disable-next-line react/prop-types
export default function AddTask({ isFetching, setIsFetching, setValueInput, fetchTasksByCategories, filter, valueInputTask, onChangeInput }) {
    const [error, setError] = useState();


    async function handleAddTask() {
        setIsFetching(true);
        try {
            await addTask(valueInputTask);
        } catch {
            setError("Ошибка создания задачи!");
        } finally {
            setIsFetching(false);
        }
        setValueInput("");
        await fetchTasksByCategories(filter);
    }

    function validation() {
        // eslint-disable-next-line react/prop-types
        if (valueInputTask.length < 2) {
            setError("Ошибка валидации! Нельзя создать задачу с количеством символов меньше 2-х.");
            return true;
        } else {
            return false;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        !validation() && handleAddTask();
    }

    if (error) {
        alert(error);
        setError("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.container}>
                <label htmlFor="input-task"></label>
                <input type="text"
                       id="input-task"
                       placeholder="Task To Be Done..."
                       value={valueInputTask}
                       onChange={(event) => {
                           onChangeInput(event.target.value)
                       }}
                       maxLength="64"
                       required
                       className={`${classes.input} ${error && classes.error}`}

                />
                <button className={classes.button}
                        disabled={isFetching}>Add</button>
            </div>
        </form>
    );
}