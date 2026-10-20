import { database } from "./fbConfig.js";
import {
    get,
    ref,
    push,
    set,
    remove,
    child,
    uptade
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const registrationRef = ref(database, "registrations");

export async function save(name, age, petName, petType) {
    const newItemRef = await push(registrationRef);
    await set(newItemRef, {name, age, petName, petType});
}

export async function edit(id, name, age, petName, petType) {
    const itemRef = child(registrationRef, id);
    await uptade(itemRef, {name, age,petName, petType});
}

export async function remove(id) {
    const itemRef = child(registrationRef, id);
    await remove(itemRef);
}

export async function searchAll(params) {
    const snapshot = await get(registrationRef);
    return snapshot.exists() ? snapshot.val() : {};
}