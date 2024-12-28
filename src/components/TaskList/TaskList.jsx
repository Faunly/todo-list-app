import TaskItem from "../TasksList/TaskItem.jsx";

export default function TaskList({ isFetching, tasks, handleChangeDataTask, handleDeleteTask }) {
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