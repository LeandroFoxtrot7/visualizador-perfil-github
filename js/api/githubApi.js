const BASE_URL = "https://api.github.com";

export async function fetchUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error("Úsuario não encontrado. Por favor digite um úsuario válido");
    }

    return await response.json();
}

