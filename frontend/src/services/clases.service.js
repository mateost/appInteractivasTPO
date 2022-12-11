export async function find() {
    return fetch("http://localhost:2032/api/clases/tipo", {
        headers: {
            "auth-token": localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((list) => {
            return list;
        });
}

export async function create(email, password, nombre, tipo) {
    return fetch("http://localhost:2032/api/clases/crear", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, nombre, tipo }),
    }).then((response) => {
        const respuesta = response.json();
        if (response.ok) {
            return respuesta;
        }
        throw new Error(response.status);
    });
}
