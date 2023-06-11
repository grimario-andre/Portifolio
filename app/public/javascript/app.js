// Obtenha os elementos do DOM POST
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
    <button class="btn btn-alterar">Alterar</button>
    <button class="btn btn-deletar">Deletar</button>
  `;

  // Adicionar o novo projeto à seção de projetos
  const projectsSection = document.getElementById('projetos');
  projectsSection.appendChild(newProjectSection);

  // Limpar os campos do formulário
  projectForm.reset();

  // Fechar o modal
  projectModal.style.display = 'none';
});


// Obtendo os elementos do DOM PUT
const putModal = document.getElementById('putModal');
const salvarAlteracoesButton = document.getElementById('salvarAlteracoes');
const putProjectNameInput = document.getElementById('putProjectName');
const putProjectDescriptionInput = document.getElementById('putProjectDescription');
const putProjectLinkInput = document.getElementById('putProjectLink');
const projectsSection = document.getElementById('projetos');

// Variável para armazenar o projeto atual
let projetoAtual;

// Função para preencher os campos do modal de alteração com os valores atuais do projeto
function preencherCamposDoModalAlterar() {
  putProjectNameInput.value = projetoAtual.nome;
  putProjectDescriptionInput.value = projetoAtual.descricao;
  putProjectLinkInput.value = projetoAtual.link;

  const closeButton = document.querySelector('#putModal .btn-secondary');

  // Fechar o modal ao clicar no botão de fechar (X)
  closeButton.addEventListener('click', () => {
    putModal.style.display = 'none';
  });

}

// Adicione o evento de clique ao container dos projetos
projectsSection.addEventListener('click', (e) => {
  // Verifique se o botão de alteração foi clicado
  if (e.target.classList.contains('btn-alterar')) {
    // Obtenha os valores atuais do projeto
    projetoAtual = {
      nome: e.target.parentNode.querySelector('h2').textContent,
      descricao: e.target.parentNode.querySelector('p').textContent,
      link: e.target.parentNode.querySelector('a').href
    };

    preencherCamposDoModalAlterar();
    putModal.style.display = 'flex';
  }
});

// Salvar as alterações ao clicar no botão "Salvar Alterações"
salvarAlteracoesButton.addEventListener('click', () => {
  const novoNome = putProjectNameInput.value;
  const novaDescricao = putProjectDescriptionInput.value;
  const novoLink = putProjectLinkInput.value;

  // Atualizar os valores do projeto atual
  projetoAtual.nome = novoNome;
  projetoAtual.descricao = novaDescricao;
  projetoAtual.link = novoLink;

  // Criar um novo elemento section com os detalhes atualizados do projeto
  const projetoAtualizado = document.createElement('section');
  projetoAtualizado.innerHTML = `
    <h2>${projetoAtual.nome}</h2>
    <p>${projetoAtual.descricao}</p>
    <a href="${projetoAtual.link}">Ver projeto</a>
    <button class="btn btn-primary btn-alterar" data-bs-toggle="modal" data-bs-target="#putModal">Alterar</button>
    <button class="btn btn-primary btn-deletar" data-bs-toggle="modal" data-bs-target="#putModal">Deletar</button>
  `;

  // Substituir o elemento anterior pelo projeto atualizado na seção de projetos
  projectsSection.replaceChild(projetoAtualizado, projectsSection.firstChild);

  // Fechar o modal de alteração
  putModal.style.display = 'none';

  alert('Projeto Alterado');
});

// Obtendo os elementos DOM DELETE
const deleteModal = document.getElementById('deleteModal');
const deletarAlteracoesButton = document.getElementById('deletarProjeto');
const deleteProjectNameInput = document.getElementById('deleteProjectName');
const deleteProjectDescriptionInput = document.getElementById('deleteProjectDescription');
const deleteProjectLinkInput = document.getElementById('deleteProjectLink');

// Função para preencher os campos do modal de alteração com os valores atuais do projeto
function preencherCamposDoModalDeletar(){
  deleteProjectNameInput.value = projetoAtual.nome;
  deleteProjectDescriptionInput.value = projetoAtual.descricao;
  deleteProjectLinkInput.value = projetoAtual.link;

  const closeButton = document.querySelector('#deleteModal .btn-secondary');

  // Fechar o modal ao clicar no botão de fechar (x)
  closeButton.addEventListener('click', () =>{
    deleteModal.style.display= 'none';
  });

}

// Adicione o evento de clique ao container dos projetos
projectsSection.addEventListener('click', (e) => {
  // Verifique se o botão de deletar fois clicado
  if (e.target.classList.contains('btn-deletar')) {
    // Obetnha os valores atuais do projeto
    projetoAtual = {
      nome:     e.target.parentNode.querySelector('h2').textContent,
      descricao: e.target.parentNode.querySelector('p').textContent,
      link:     e.target.parentNode.querySelector('a').href
    }

    preencherCamposDoModalDeletar();
    deleteModal.style.display = 'flex';
  }
});

// Adicione o evento de clique ao botão de "Deletar"
deletarAlteracoesButton.addEventListener('click', () => {
  // A lógica para deletar o projeto
  const projeto = document.querySelector(`#projetos a[href='${projetoAtual.link}']`);
  if (projeto) {
    projeto.parentElement.remove(); 
  }

  alert('Projeto Excluído');

  // Feche o modal de deleção
  deleteModal.style.display = 'none';
});


