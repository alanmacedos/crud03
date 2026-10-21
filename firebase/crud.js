import { database } from "./fbConfig.js";
import {
    get,
    ref,
    push,
    set,
    remove,
    child,
    update
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const registrationRef = ref(database, "registrations");

export async function save(name, age, petName, petType) {
    const newItemRef = await push(registrationRef);
    await set(newItemRef, {name, age, petName, petType});
}

export async function edit(id, name, age, petName, petType) {
    const itemRef = child(registrationRef, id);
    await update(itemRef, {name, age,petName, petType});
}

export async function removeData(id) {
    const itemRef = child(registrationRef, id);
    await remove(itemRef);
}

export async function searchAll() {
    const snapshot = await get(registrationRef);
    return snapshot.exists() ? snapshot.val() : {};
}