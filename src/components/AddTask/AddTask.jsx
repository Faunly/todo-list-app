import {useState} from "react";
import classes from "./AddTask.module.css";
import {addTask} from "../../http.js";

// eslint-disable-next-line react/prop-types
export default function AddTask({ setIsFetching, setValueInput, fetchTasksByCategories, filter, valueInputTask, onChangeInput }) {
    const [error, setError] = useState(false);


    async function handleAddTask() {
        setIsFetching(true);
        try {
            await addTask(valueInputTask);
        } catch (error) {
            setError(error);
        } finally {
            setIsFetching(false);
        }
        setValueInput("");
        await fetchTasksByCategories(filter);
    }

    function validation() {
        // eslint-disable-next-line react/prop-types
        if (valueInputTask.length >= 2) {
            setError(false);
            return false;
        } else {
            setError(true);
            return true;
        }
    }

    return (
        <div className={classes.container}>
            <label htmlFor="input-task"></label>
            <input type="text"
                   id="input-task"
                   placeholder="Task To Be Done..."
                   value={valueInputTask}
                   onChange={(event) => {onChangeInput(event.target.value)
                   setError(false)} }
                   maxLength="64"
                   required
                   className={`${classes.input} ${error && classes.error}`}
            />
            <span><button className={classes.button} onClick={() => !validation() && handleAddTask()}>Add</button></span>
        </div>
    );
}