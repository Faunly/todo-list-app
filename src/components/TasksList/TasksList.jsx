import {useState} from "react";

import classes from "./tasksList.module.css"

// eslint-disable-next-line react/prop-types
export default function TasksList({id, titleTask, isDone, onChangeData, onDelete}) {
    const [isEdited, setIsEdited] = useState(false);
    const [curTitleTask, setCurTitleTask] = useState(titleTask);

    function handleEdited() {
        setIsEdited(prevState => !prevState);
    }

    function handleChange(newValue) {
        setCurTitleTask(newValue);
    }

    return (
        <div className={classes.task}>
            <div>
                <input type="checkbox" checked={isDone} onChange={() => onChangeData(id, titleTask, isDone, "check")}/>
                {!isEdited ? <h3>{curTitleTask}</h3> :
                    <input type="text"
                           placeholder={curTitleTask}
                           value={curTitleTask}
                           onChange={(event) => handleChange(event.target.value)}
                    />
                }
                <p>{id}</p>
            </div>
            <div>
                {!isEdited ?
                    <button onClick={handleEdited}>Edit</button>
                    :
                    <button onClick={() => {
                        onChangeData(id, curTitleTask, isDone);
                        handleEdited();
                    }}
                    >Save</button>
                }
                <button onClick={() => onDelete(id)}>delete</button>
            </div>
        </div>
    );
}