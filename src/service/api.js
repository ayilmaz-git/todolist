const url = "https://631d3cff789612cd07a7e70a.mockapi.io/";

export const Get = (todoOperation) => {
         fetch(url + "/todos")
        .then((response) => response.json())
        .then((data) => todoOperation("get", data));
};

export const Post = (todoOperation, todos) => {
        fetch(url + "/todos", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(todos),
    })
        .then((response) => response.json())
        .then((data) => todoOperation("create", data));
};

export const Delete = (todoOperation, id) => {
        fetch(url + "/todos/" + id, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    })
        .then((response) => response.json())
        .then((data) => todoOperation("delete", id));
};

export const Put = (todoOperation, id, todo) => {
        fetch(url + "/todos/" + id, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(todo),
    })
        .then((response) => response.json())
        .then((data) => todoOperation("update", todo));
};
export const Edit = (todoOperation, id, todo) => {
        fetch(url + "/todos/" + id, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(todo),
    })
        .then((response) => response.json())
        .then((data) => todoOperation("edit", todo));
};


