import {useState} from "react";
import classes from "./AddTask.module.css";

// eslint-disable-next-line react/prop-types
export default function AddTask({onAddTask, valueInputTask, onChangeInput}) {
    const [error, setError] = useState(false);

    function validation() {
        // eslint-disable-next-line react/prop-types
        if (valueInputTask.length > 2) {
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
            <span><button className={classes.button} onClick={() => !validation() && onAddTask()}>Add</button></span>
        </div>
    );
}