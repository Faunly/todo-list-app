export async function fetchTasksByCategory(title) {
    const response = await fetch(`https://easydev.club/api/v1/todos?filter=${title}`);
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Error an occurred!");
    }

    return resData;
}

export async function addTask(title) {
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
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Error an occurred!");
    }

    return resData.message;
}