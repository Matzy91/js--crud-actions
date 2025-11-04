    const BASE_URL = "http://localhost:3000";

    
// Create 
async function createUser(username, email, password) {

    return fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify({username, email, password})
    }).then((res) => res.json())
}

//hämtar formuläret
const userForm = document.getElementById("user-form");
//Lägg till lyssnare för när formuläret skickas in
userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = userForm.querySelector('input[type="text"]').value;
    const email = userForm.querySelector('input[type="email"]').value;
    const password = userForm.querySelector('input[type="password"]').value;

    createUser(username, email, password)
        .catch((err) => console.error("Fel vid skapande: ", err));
});



//createUser("shialabeouf", "shia@mybutt.ass", "iluvmeganfox").then((data) =>   console.log(data))

// Read
async function fetchUsers() {
    return fetch(`${BASE_URL}/users`).then((res) => res.json());
    }
const data = await fetchUsers();
// console.log(data);




// Update
async function updateUser({ id, username, email, password }){
    return fetch(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ username, email, password })
    }).then((res) => res.json());
    }
document.querySelector("#update-form").addEventListener("submit", async(e) => {
        e.preventDefault(); 
        const id = document.querySelector("#update-id").value;
        const username = document.querySelector("#update-username").value;
        const email = document.querySelector("#update-email").value;
        const password = document.querySelector("#update-password").value;

        const updatedUser = await updateUser({ id, username, email, password });
        console.log("Updated user:", updatedUser);
    });
    

//updateUser({id: "9d1e", password: "poop234"}).then((data) => console.log(data));


// Delete
async function deleteUser(id) {
    return fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
    }).then((res) => res.json());
}
//deleteUser"
//deleteUser("3a8e").then((data) => console.log(data));
// deleteUser("7ad5e6fc3149742f1292").then((data) => console.log(data));

const userlist = document.getElementById('user-list')

function displayData (users) {
    users.forEach(user => {

        const listitem = document.createElement('li')
       Object.entries(user).forEach(([key, value]) => {
        const p = document.createElement('p')
        p.textContent = `${key}: ${value}`
        listitem.append(p)
       })

       const deleteBtn = document.createElement('button')
       deleteBtn.textContent = 'Delete'

       deleteBtn.addEventListener('click', () => {
        deleteUser(user.id)
        displayData(users)
       })

       listitem.append(deleteBtn)

       userlist.append(listitem)

    
        
    });
}

displayData(data)