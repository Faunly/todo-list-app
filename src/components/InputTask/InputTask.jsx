export default function InputTask({onAddTask, valueInputTask, onChangeInput}) {

    return (
        <>
            <label htmlFor="input-task"></label>
            <input type="text" id="input-task" placeholder="Task To Be Done..." value={valueInputTask}
                   onChange={(event) => onChangeInput(event.target.value)}/>
            <span><button onClick={onAddTask}>Add</button></span>
        </>
    );
}