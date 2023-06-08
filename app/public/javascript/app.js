// Obtenha os elementos do DOM
const addProjectButton = document.getElementById('addProjectButton');
const projectModal = document.getElementById('projectModal');
const closeButton = document.getElementsByClassName('btn btn-secondary')[0];
const projectForm = document.getElementById('projectForm');

// Abrir o modal ao clicar no botão "Adicionar Projeto"
addProjectButton.addEventListener('click', () => {
  projectModal.style.display = 'flex';
});

// Fechar o modal ao clicar no botão de fechar (X)
closeButton.addEventListener('click', () => {
  projectModal.style.display = 'none';
});

// Submeter o formulário ao adicionar um projeto
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obter os valores dos campos do formulário
  const projectName = document.getElementById('projectName').value;
  const projectDescription = document.getElementById('projectDescription').value;
  const projectLink = document.getElementById('projectLink').value;

  // Criar um novo elemento section com os detalhes do projeto
  const newProjectSection = document.createElement('section');
  newProjectSection.innerHTML = `
    <h2>${projectName}</h2>
    <p>${projectDescription}</p>
    <a href="${projectLink}">Ver projeto</a>
  `;

  // Adicionar o novo projeto à seção de projetos
  const projectsSection = document.getElementById('projetos');
  projectsSection.appendChild(newProjectSection);

  // Limpar os campos do formulário
  projectForm.reset();

  // Fechar o modal
  projectModal.style.display = 'none';
});
