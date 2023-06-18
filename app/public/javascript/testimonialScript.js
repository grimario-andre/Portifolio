// Obtenha os elementos do DOM POST
const addTestimonialButton      = document.getElementById('addTestimonialButton');
const closeTestimonialButton    = document.getElementsByClassName('testimonialButton')[0];
const testimonialModal          = document.getElementById('testimonialModal');
const testimonialForm           = document.getElementById('testimonialForm');

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
    const testimonialName           = document.getElementById('testimonialName').value;
    const professionReference       = document.getElementById('professionReference').value;
    const testimonialDescription    = document.getElementById('testimonialDescription').value;
    const testimonialLink           = document.getElementById('testimonialLink').value;

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