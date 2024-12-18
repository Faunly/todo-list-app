import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function InputTask({onAddTask, valueInputTask, onChangeInput}) {
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
        <>
            <label htmlFor="input-task"></label>
            <input type="text"
                   id="input-task"
                   placeholder={!error ? "Task To Be Done..." : "Error"}
                   value={valueInputTask}
                   onChange={(event) => onChangeInput(event.target.value)}
                   minLength="2"
                   maxLength="64"
                   required
            />
            <span><button onClick={() => !validation() && onAddTask()}>Add</button></span>
        </>
    );
}