export async function fetchTasksByCategory(title) {
    try {
        const response = await fetch(`https://easydev.club/api/v1/todos?filter=${title}`);
        return await response.json();
    } catch {
        throw new Error();
    }
}

export async function addTask(title) {
    try {
        const response = await fetch("https://easydev.club/api/v1/todos", {
            method: "POST",
            body: JSON.stringify({
                "isDone": false,
                "title": `${title}`
            }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch {
        throw new Error();
    }
}

export async function changeDataTask(id, title, isDone) {
    try {
        const response = await fetch(`https://easydev.club/api/v1/todos/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                "isDone": isDone,
                "title": `${title}`
            }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch {
        throw new Error();
    }
}

export async function deleteTask(id) {
    try {
        await fetch(`https://easydev.club/api/v1/todos/${id}`, {
            method: "DELETE",
            headers: {
                'accept': 'application/json',
            }
        });
    } catch {
        throw new Error();
    }
}