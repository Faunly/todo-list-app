import classes from "./tasksList.module.css"

export default function TasksList({ titleTask, isDone }) {
    return(
        <div className={classes.task}>
            <div>
                <input type="checkbox" />
                <h3>{titleTask}</h3>
            </div>
            <div>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
}