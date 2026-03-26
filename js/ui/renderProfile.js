export function showLoading(container) {
    container.innerHTML = `<p>Carregando...</p>`;
}

export function clearProfile(container) {
    container.innerHTML = "";
}

export function renderProfile(container, userData, reposData) {
    const repositoriesHTML = reposData && reposData.length > 0 ? reposData.map(repo => `
    <div class="repository-card">
    <a href="${repo.html_url}" target="_blank">
        <h3>${repo.name}</h3>
        <div class="repository-stats">
            <span>⭐ Stars: ${repo.stargazers_count}</span>
            <span>🍴 Forks: ${repo.forks_count}</span>
            <span>👀 Watchers: ${repo.watchers_count}</span>
            <span>💻 Language: ${repo.language || `Indisponível`}</span>
        </div>
    </a>    
    </div>    
    `).join("") : `<p>Nenhum repositório encontrado</p>`;

    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de: ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.login}</h2>
                <p>${userData.bio || `Não possui bio cadastrada 🥹`}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores:</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo:</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div>
                <span>${repositoriesHTML}</span>
            </div>
        </div>
    `;
}

