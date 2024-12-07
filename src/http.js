export async function fetchTodos() {
    const response = await fetch("https://easydev.club/api/v1/todos");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error();
    }

    return resData;
}

export async function fetchTodosByCategory(title) {
    const response = await fetch(`https://easydev.club/api/v1/todos?filter=${title}`);
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Error an occurred!");
    }

    return resData;
}