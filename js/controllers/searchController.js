import { fetchUser, fetchUserRepos } from "../api/githubApi.js";
import { renderProfile, showLoading, clearProfile } from "../ui/renderProfile.js";

export async function handleSearch(userName, container) {
    if (!userName) {
        alert("Por favor, digite um nome de usuário do GitHub");
        return;
    }

    showLoading(container);

    try {
        const userData = await fetchUser(userName);
        const reposData = await fetchUserRepos(userName);
        renderProfile(container, userData, reposData);
    } catch (error) {
        console.error(`Erro ao buscar o perfil do úsuario: `, error);
        alert(`Ocorreu um erro ao buscar o perfil do úsuario. Por favor, tente novamente mais tarde`);
        clearProfile(container);
    }
}