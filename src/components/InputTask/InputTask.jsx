export default function InputTask({onAddTask, valueInputTask, onChange}) {

    return (
        <>
            <label htmlFor="input-task"></label>
            <input type="text" id="input-task" placeholder="Task To Be Done..." value={valueInputTask}
                   onChange={(event) => onChange(event.target.value)}/>
            <span><button onClick={onAddTask}>Add</button></span>
        </>
    );
}