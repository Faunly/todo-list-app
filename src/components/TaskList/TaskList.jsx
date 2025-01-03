import TaskItem from "../TasksList/TaskItem.jsx";
import {deleteTask} from "../../http.js";

export default function TaskList({ setIsFetching, setError, fetchTasksByCategories, filter, isFetching, tasks, handleChangeDataTask }) {

    async function handleDeleteTask(id) {
        setIsFetching(true);
        try {
            await deleteTask(id);
        } catch (error) {
            setError(error);
        } finally {
            setIsFetching(false);
        }
        await fetchTasksByCategories(filter);
    }

    return (
        !isFetching && tasks.map(task => <TaskItem
            key={task.id}
            id={task.id}
            titleTask={task.title}
            isDone={task.isDone}
            onChangeData={handleChangeDataTask}
            onDelete={handleDeleteTask}
        />)
    );
}