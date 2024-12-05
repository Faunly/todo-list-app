export default function InputTask({ onAddTask }) {
    return(
        <>
            <label htmlFor="input-task"></label>
            <input type="text" id="input-task" placeholder="Task To Be Done..."/>
            <span><button onClick={onAddTask}>Add</button></span>
        </>
    );
}