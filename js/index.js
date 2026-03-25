const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const base_URL = "https://api.github.com"
const profileResults = document.querySelector(".profile-results")

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;
    if(userName) {
        profileResults.innerHTML = `<p>Carregando</p>`

      try {  
        const response = await fetch(`${base_URL}/users/${userName}`);

        if(!response.ok) {
            alert(`Úsuario não encontrado. Por favor digite um úsuario válido.`)
            profileResults.innerHTML = ""
            return
        }

        const userData = await response.json();

        console.log(userData)

        profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de: 4${userData.name}" class=""profile-avatar>
            <div class="profile-info">
                <h2>${userData.login}</h2>
                <p>${userData.bio || `Não possui bio cadastrada🥹`}</p>
            </div>
        </div>

        `
        
      
    }catch(error) {
        console.error(`Erro ao buscar o perfil do úsuario: `, error);
        alert(`Ocorreu um erro ao buscar o perfil do úsuario. Por favor, tente novamente mais tarde`)
        profileResults.innerHTML = ""
    }
        
    } else {
        alert("Por favor, digite um nome de úsuario do GitHub")
    }
});

