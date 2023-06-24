// Obtenha os elementos do DOM POST
const addTestimonialButton = document.getElementById('addTestimonialButton');
const closeTestimonialButton = document.getElementsByClassName('testimonialButton')[0];
const testimonialModal = document.getElementById('testimonialModal');
const testimonialForm = document.getElementById('testimonialForm');

// Abrir o modal ao clicar no botao adicionar depoimento
addTestimonialButton.addEventListener('click', () => {
    testimonialModal.style.display = 'flex';
});

// Fechar o modal ao clicar no botão de fechar
closeTestimonialButton.addEventListener('click', () => {
    testimonialModal.style.display = 'none';
});

// Submeter o formulário ao adicionar um projeto
testimonialForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obter os valores dos campos do formulário
    const testimonialName = document.getElementById('testimonialName').value;
    const professionReference = document.getElementById('professionReference').value;
    const testimonialDescription = document.getElementById('testimonialDescription').value;
    const testimonialLink = document.getElementById('testimonialLink').value;

    // Criar novo elemento na seção com detalhes do depoimento
    const newTestimonialSection = document.createElement('section');

    newTestimonialSection.innerHTML = `
        <h2>${testimonialName}</h2>
        <h4>${professionReference}</h4>
        <p>${testimonialDescription}</p>
        <a href="${testimonialLink}">Ver projeto</a>
        <button class="btn btn-alterar">Alterar</button>
        <button class="btn btn-deletar">Deletar</button>
    `;

    // Adicionar o depoimento a seção
    const testimonialSection = document.getElementById('testimonial');
    testimonialSection.appendChild(newTestimonialSection);

    // Limpar formulário
    testimonialForm.reset();

    // Fechar o modal
    testimonialModal.style.display = 'none';

});

// Obtendo os elementos do DOM PUT
const putTestimonialModal = document.getElementById('putTestimonialModal');
const salvarAlteracoesTestimonial = document.getElementById('salvarAlteracoesTestimonial');
const putTestimonialNameInput = document.getElementById('putTestimonialName');
const putTestimonialProfissionReferenceInput = document.getElementById('putTestimonialProfessionReference');
const putTestimonialDescriptionInput = document.getElementById('putTestimonialDescription');
const putTestimonialLinkInput = document.getElementById('putTestimonialLink');
const putTestimonialSection = document.getElementById('testimonial');

// Variável para armazenar o projeto atual
let testimonialAtual;

// Função para preencher os campos do modal de alteração com os valores atuais do projeto
function preencherCamposDoModalAlterarTestimonial() {
    putTestimonialNameInput.value = testimonialAtual.nome;
    putTestimonialProfissionReferenceInput.value = testimonialAtual.profissao;
    putTestimonialDescriptionInput.value = testimonialAtual.descricao;
    putTestimonialLinkInput.value = testimonialAtual.link;

    const closeButton = document.querySelector('#putTestimonialModal .btn-secondary');

    // Fechar o modal ao clicar no botão de fechar (X)
    closeButton.addEventListener('click', () => {
        putTestimonialModal.style.display = 'none';
    });
}

// Adicione o evento de clique ao container dos projetos
putTestimonialSection.addEventListener('click', (e) =>{
    // Verifique se o botão de alteração foi clicado
    if (e.target.classList.contains('btn-alterar')) {
        testimonialAtual = {
            nome: e.target.parentNode.querySelector('h2').textContent,
            profissao: e.target.parentNode.querySelector('h4').textContent,
            descricao: e.target.parentNode.querySelector('p').textContent,
            link: e.target.parentNode.querySelector('a').href,
        }
    }

    preencherCamposDoModalAlterarTestimonial();
    putTestimonialModal.style.display = 'flex';
});

// Salvar as alterações ao clicar no botão "Salvar Alterações
salvarAlteracoesTestimonial.addEventListener('click', ()=>{
    const novoNome = putTestimonialNameInput.value;
    const novaProfissao = putTestimonialProfissionReferenceInput.value;
    const novaDescricao = putTestimonialDescriptionInput.calue;
    const novoLink = putTestimonialLinkInput.value;

    // Atualizar os valores do depoimento
    testimonialAtual.nome = novoNome;
    testimonialAtual.profissao = novaProfissao;
    testimonialAtual.descricao = novaDescricao;
    testimonialAtual.link = novoLink;

    // Criar um novo elemento section com o detalhes atualizados do depoimento
    const testimonialAtulizado = document.createElement('section');
    testimonialAtulizado.innerHTML = `
        <h2>${testimonialName}</h2>
        <h4>${professionReference}</h4>
        <p>${testimonialDescription}</p>
        <a href="${testimonialLink}">Ver projeto</a>
        <button class="btn btn-alterar">Alterar</button>
        <button class="btn btn-deletar">Deletar</button>
    `;

    // Substituir o elemento anterior pelo projeto atualizado na seção de projetos
    putTestimonialSection.replaceChild(testimonialAtulizado, putTestimonialSection.firstChild);

    // Fechar o modal de alteração
    putModal.style.display = 'none';

    alert('Projeto Alterado');
});
