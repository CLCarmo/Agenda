// Array para armazenar os usuários
const users = [];

// Função para adicionar um usuário
function addUser(name, email) {
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email
    };
    users.push(newUser);
    console.log("Usuário adicionado:", newUser);
    displayUsers(); // Atualizar a exibição dos usuários
}

// Função para editar um usuário
function editUser(id) {
    const user = users.find(u => u.id === id);
    if (user) {
        const newName = prompt("Novo Nome:", user.name);
        const newEmail = prompt("Novo Email:", user.email);
        if (newName && newEmail) {
            user.name = newName;
            user.email = newEmail;
            console.log("Usuário editado:", user);
            displayUsers();
        }
    }
}

// Função para excluir um usuário
function deleteUser(id) {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        console.log("Usuário excluído:", users[index]);
        users.splice(index, 1);
        displayUsers();
    }
}

// Função para exibir a lista de usuários
function displayUsers() {
    const userContainer = document.querySelector('.ContentUser');
    userContainer.innerHTML = ""; // Limpa o conteúdo atual

    users.forEach(user => {
        userContainer.innerHTML += `
            <div class="User">
                <div class="NumberOrder">${user.id}</div>
                <div class="NameUser">${user.name}</div>
                <div class="EmailUser">${user.email}</div>
                <button onclick="editUser(${user.id})">Editar</button>
                <button onclick="deleteUser(${user.id})">Excluir</button>
            </div>
        `;
    });
}

// Adicionar evento ao botão "Adicionar" para abrir o prompt e adicionar usuário
document.getElementById('addUserBtn').addEventListener('click', () => {
    const name = prompt("Digite o nome do usuário:");
    const email = prompt("Digite o email do usuário:");
    if (name && email) {
        addUser(name, email);
    }
});

// Evento de pesquisa
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchValue) || 
        user.email.toLowerCase().includes(searchValue)
    );
    displayFilteredUsers(filteredUsers);
});

// Função para exibir usuários filtrados
function displayFilteredUsers(filteredUsers) {
    const userContainer = document.querySelector('.ContentUser');
    userContainer.innerHTML = ""; // Limpa o conteúdo atual

    filteredUsers.forEach(user => {
        userContainer.innerHTML += `
            <div class="User">
                <div class="NumberOrder">${user.id}</div>
                <div class="NameUser">${user.name}</div>
                <div class="EmailUser">${user.email}</div>
                <button onclick="editUser(${user.id})">Editar</button>
                <button onclick="deleteUser(${user.id})">Excluir</button>
            </div>
        `;
    });
}

// Inicializar com exibição vazia
document.addEventListener('DOMContentLoaded', displayUsers);
