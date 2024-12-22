import {useState} from "react";
import imageEdit from "/src/assets/pencil.svg"
import imageRemove from "/src/assets/trash.svg"

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
                <div className={classes.round}>
                    <input type="checkbox" id="checkbox" checked={isDone}
                           />
                    <label htmlFor="checkbox" onClick={() => onChangeData(id, titleTask, isDone, "check")}></label>
                </div>

                {!isEdited ? <h3 className={isDone && `${classes.checked}`}>{curTitleTask}</h3> :
                    <input type="text"
                           className={classes.inputEdit}
                           placeholder={curTitleTask}
                           value={curTitleTask}
                           onChange={(event) => handleChange(event.target.value)}
                    />
                }
                {/*<p>{`, id=${id}`}</p>*/}
            </div>
            <div className={classes.rightContainer}>
                {!isEdited ?
                    <button className={`${classes.button} ${classes.edit}`} onClick={handleEdited}><img src={imageEdit} width="20px" height="20px" alt="pencil"/></button>
                    :
                    <button className={`${classes.button} ${classes.save}`} onClick={() => {
                        onChangeData(id, curTitleTask, isDone);
                        handleEdited();
                    }}
                    ><img src={imageEdit} width="20px" height="20px" alt="pencil"/></button>
                }
                <button className={`${classes.button} ${classes.remove}`} onClick={() => onDelete(id)}><img src={imageRemove} width="20px" height="20px" alt="pencil"/>
                </button>
            </div>
        </div>
    );
}