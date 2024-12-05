import classes from "./tasksList.module.css"

export default function TasksList({ titleTask }) {
    return(
        <div className={classes.task}>
            <h3>{titleTask}</h3>
        </div>
    );
}