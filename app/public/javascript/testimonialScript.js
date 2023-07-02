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

        <div class="container">
            <div class="row">
                <div class="col-md-6 p-2">
                    <h2 class="display-4 text-primary fw-bold">${testimonialName}</h2>
                    <h4 class="display-4 text-primary fw-bold">${professionReference}</h4>
                    <p>${testimonialDescription}</p>
                    <a href="${testimonialLink}" target="_blank" title="link do Projeto" class="btn btn-primary">Ver projeto</a>
                    <button class="btn btn-warning btn-alterar">Alterar</button>
                    <button class="btn btn-danger btn-deletar">Deletar</button>
                </div>
            </div>
        </div>
        
    `;

    // Adicionar o depoimento a seção
    const testimonialSection = document.getElementById('testimonials');
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
const testimonialSection = document.getElementById('testimonials');

// Variável para armazenar o projeto atual
let testimonialAtual;

// Função para preencher os campos do modal de alteração com os valores atuais do projeto
function preencherCamposDoModalAlterarTestimonial() {
    putTestimonialNameInput.value = testimonialAtual.nome;
    putTestimonialProfissionReferenceInput.value = testimonialAtual.profissao;
    putTestimonialDescriptionInput.value = testimonialAtual.descricao;
    putTestimonialLinkInput.value = testimonialAtual.link;

    const closeButton = document.querySelector('#putTestimonialModal .putTestimonialButton');

    // Fechar o modal ao clicar no botão de fechar (X)
    closeButton.addEventListener('click', () => {
        putTestimonialModal.style.display = 'none';
    });

}

// Adicione o evento de clique ao container dos projetos
testimonialSection.addEventListener('click', (e) => {
    // Verifique se o botão de alteração foi clicado
    if (e.target.classList.contains('btn-alterar')) {
        testimonialAtual = {
            nome: e.target.parentNode.querySelector('h2').textContent,
            profissao: e.target.parentNode.querySelector('h4').textContent,
            descricao: e.target.parentNode.querySelector('p').textContent,
            link: e.target.parentNode.querySelector('a').href,
        }
        preencherCamposDoModalAlterarTestimonial();
        putTestimonialModal.style.display = 'flex';
    }

});

// Salvar as alterações ao clicar no botão "Salvar Alterações
salvarAlteracoesTestimonial.addEventListener('click', () => {
    const novoNome = putTestimonialNameInput.value;
    const novaProfissao = putTestimonialProfissionReferenceInput.value;
    const novaDescricao = putTestimonialDescriptionInput.value;
    const novoLink = putTestimonialLinkInput.value;

    // Atualizar os valores do depoimento
    testimonialAtual.nome = novoNome;
    testimonialAtual.profissao = novaProfissao;
    testimonialAtual.descricao = novaDescricao;
    testimonialAtual.link = novoLink;

    // Criar um novo elemento section com o detalhes atualizados do depoimento
    const testimonialAtulizado = document.createElement('section');
    testimonialAtulizado.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-md-6 p-2">
                <h2 class="display-4 text-primary fw-bold">${testimonialName}</h2>
                <h4 class="display-4 text-primary fw-bold">${professionReference}</h4>
                <p>${testimonialDescription}</p>
                <a href="${testimonialLink}" target="_blank" title="link do Projeto" class="btn btn-primary">Ver projeto</a>
                <button class="btn btn-warning btn-alterar" data-bs-toggle="modal" data-bs-target="#putTestimonialModal">Alterar</button>
                <button class="btn btn-danger btn-deletar" data-bs-toggle="modal" data-bs-target="#putTestimonialModal">Deletar</button>
            </div>
        </div>
    </div>
        
    `;

    // Substituir o elemento anterior pelo projeto atualizado na seção de projetos
    testimonialSection.replaceChild(testimonialAtulizado, testimonialSection.firstChild);

    // Fechar o modal de alteração
    putTestimonialModal.style.display = 'none';

    alert('Depoimento Alterado');
});

// Obtendo os elementos DOM DELETE
const deleteTestimonialModal = document.getElementById('deleteTestimonialModal');
const deleteTestimonialButton = document.getElementById('deletarTestimonial');
const deleteTestimonialNameInput = document.getElementById('deleteTestimonialName');
const deleteTestimonialProfissionReferenceInput = document.getElementById('deleteTestimonialProfessionReference');
const deleteTestimonialDescriptionInput = document.getElementById('deleteTestimonialDescription');
const deleteTestimonialLinkInput = document.getElementById('deleteTestimonialLink');

function preencherCamposDoModalDeletarTestimonial() {
    deleteTestimonialNameInput.value = testimonialAtual.nome;
    deleteTestimonialProfissionReferenceInput.value = testimonialAtual.profissao;
    deleteTestimonialDescriptionInput.value = testimonialAtual.descricao;
    deleteTestimonialLinkInput.value = testimonialAtual.link;

    const closeButton = document.querySelector('#deleteTestimonialModal .testimonialButton');

    // Fechar o modal ao clicar no botão de fechar (x)
    closeButton.addEventListener('click', () => {
        deleteTestimonialModal.style.display = 'none';
    });
}

// Adicione o evento de clique ao container dos projetos
testimonialSection.addEventListener('click', (e) => {
    // Verifique se o botão de deletar fois clicado
    if (e.target.classList.contains('btn-deletar')) {
        // Obter os valores atuais do depoimento
        testimonialAtual = {
            nome: e.target.parentNode.querySelector('h2').textContent,
            profissao: e.target.parentNode.querySelector('h4').textContent,
            descricao: e.target.parentNode.querySelector('p').textContent,
            link: e.target.parentNode.querySelector('a').href,
        }

        preencherCamposDoModalDeletarTestimonial();
        deleteTestimonialModal.style.display = 'flex';
    }
});


// Adicione o evento de clique ao botão de "Deletar"
deleteTestimonialButton.addEventListener('click', () => {
    // A lógica para deletar o projeto
    const depoimento = document.querySelector(`#testimonials a[href='${testimonialAtual.link}']`);
    if (depoimento) {
        depoimento.parentElement.remove();
    }

    // Feche o modal de deleção
    deleteTestimonialModal.style.display = 'none';

    alert('Depoimento Excluído');
});

