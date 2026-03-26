const BASE_URL = "https://api.github.com";

export async function fetchUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error("Úsuario não encontrado. Por favor digite um úsuario válido");
    }

    return await response.json();
}

export async function fetchUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);

    if (!response.ok) {
        throw new Error("Repositórios não encontrados");
    }

    return await response.json();
}