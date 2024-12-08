import classes from "./tasksList.module.css"

export default function TasksList({ id, titleTask, isDone, onChangeStatus }) {
    return(
        <div className={classes.task}>
            <div>
                <input type="checkbox" checked={isDone} onChange={() => onChangeStatus(id, titleTask, isDone)}/>
                <h3>{titleTask}</h3>
                <p>{id}</p>
            </div>
            <div>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
}