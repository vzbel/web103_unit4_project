// Obtain all characters information
export async function getAllCharacters(){
    const res = await fetch("/api/characters");
    const data = await res.json();
    return data;
};

// Get a specific character by ID
export async function getCharacter(id){
    const res = await fetch(`/api/characters/${id}`);
    const data = await res.json();
    return data;
}

// Make a new character
export async function createCharacter(characterData){
    const res = await fetch("/api/characters", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(characterData)
    });
    const data = await res.json();
    return data; 
}

// Change all or some attributes of the character with the given id
export async function updateCharacter(id, characterData){
    const res = await fetch(`/api/characters/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(characterData)
    });
    const data = await res.json();
    return data;
};

// Remove a character from DB
export async function deleteCharacter(id){
    const res = await fetch(`/api/characters/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();
    return data;
}