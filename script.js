    const BASE_URL = "http://localhost:3000";

    
// Create 
async function createUser(username, email, password) {
    
    return fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify({username, email, password})
    }).then((res) => res.json())
}

//createUser("shialabeouf", "shia@mybutt.ass", "iluvmeganfox").then((data) =>   console.log(data))

// Read
async function fetchUsers() {
    return fetch(`${BASE_URL}/users`).then((res) => res.json());
    }
const data = await fetchUsers();
console.log(data);


// Update
async function updateUser({ id, username, email, password }){
    return fetch(`${BASE_URL}/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ username, email, password })
    }).then((res) => res.json());
}


updateUser({id: "9d1e", password: "poop234"}).then((data) => console.log(data));


// Delete
async function deleteUser(id) {
    return fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
    }).then((res) => res.json());
}
deleteUser("3a8e").then((data) => console.log(data));
// deleteUser("7ad5e6fc3149742f1292").then((data) => console.log(data));