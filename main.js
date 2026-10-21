import { save, edit, removeData, searchAll } from "./firebase/crud.js";

const form = document.getElementById("form");
const divData = document.getElementById("registrations");

let editingID = null;

updateList();

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const petName = document.getElementById("petName").value;
    const petType = document.getElementById("petType").value;

    console.log(name);
    console.log(age);
    console.log(petName);
    console.log(petType);

    if (editingID === null) {
        await save(name, age, petName, petType);
    } else {
        await edit(editingID, name, age, petName, petType);
    }

    editingID = null;

    form.reset();

    await updateList();
})

async function updateList() {

    const data = await searchAll();

    const list = Object.entries(data).map(([id, item]) => {

        return {

            id: id,
            name: item.name,
            age: item.age,
            petName: item.petName,
            petType: item.petType
        }
    })

    divData.innerHTML = "";

    list.forEach((item) => {

        const li = document.createElement("li");

        const name = document.createElement("span");
        name.classList.add("username");
        name.textContent = item.name;

        const age = document.createElement("span");
        age.classList.add("age");
        age.textContent = item.age;

        const petName = document.createElement("span");
        petName.classList.add("petName");
        petName.textContent = item.petName;

        const petType = document.createElement("span");
        petType.classList.add("PetType");
        petType.textContent = item.petType;

        const btnEdit = document.createElement("button")
        btnEdit.classList.add("edit");
        btnEdit.textContent = "edit";

        btnEdit.addEventListener("click", async (event) => {
            
            editData(item);
        })

        const btnRemove = document.createElement("button")
        btnRemove.classList.add("remove");
        btnRemove.textContent = "remove";

        btnRemove.addEventListener("click", async (event) => {
            
            removeRegister(item.id);
        })

        li.appendChild(name);
        li.appendChild(age);
        li.appendChild(petName);
        li.appendChild(petType);
        li.appendChild(btnEdit);
        li.appendChild(btnRemove);

        divData.appendChild(li);
    })
}

async function editData(item) {
    
    editingID = item.id;

    document.getElementById("name").value = item.name;
    document.getElementById("age").value = item.age;
    document.getElementById("petName").value = item.petName;
    document.getElementById("petType").value = item.petType;
}

async function removeRegister(id) {
    
    const confirmation = confirm("Deseja remover este usuário?");

    if (!confirmation) {
        return;
    }

    await removeData(id);

    await updateList();
}