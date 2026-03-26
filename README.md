# Visualizador de Perfil do GitHub 🚀

Uma aplicação web simples e elegante que permite buscar e visualizar informações detalhadas de perfis do GitHub utilizando a API oficial.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização com animações e design responsivo.
- **JavaScript (ES6+)**: Lógica de busca, manipulação de DOM e consumo de API.
- **GitHub API**: Fonte dos dados dos usuários e repositórios.
- **DevIcons**: Ícones estilizados para a interface.

## ✨ Funcionalidades

- **Busca em Tempo Real**: Digite o nome de usuário e clique em buscar (ou pressione Enter).
- **Dados do Perfil**: Exibe avatar, nome de usuário, bio e contadores de seguidores/seguindo.
- **Repositórios**: Lista os 10 repositórios mais recentes do usuário com estatísticas de estrelas, forks e linguagem predominante.
- **Feedback Visual**: Indicador de carregamento e mensagens de erro amigáveis para usuários não encontrados.

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```
2. Abra o arquivo `index.html` em seu navegador ou utilize a extensão "Live Server" no VS Code.

## 📂 Estrutura de Pastas

```text
├── index.html          # Página principal
├── js/
│   ├── index.js        # Ponto de entrada e eventos
│   ├── api/            # Comunicação com a API do GitHub
│   ├── controllers/    # Lógica de controle da busca
│   └── ui/             # Funções de renderização da interface
└── src/
    └── css/            # Arquivos de estilização (Reset, Styles, Animations, Responsive)
```

---
Desenvolvido com para estudos de integração com APIs.
