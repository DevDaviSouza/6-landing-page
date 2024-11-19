document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
    const swiper = new Swiper('.swiper', {
        // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
        direction: 'horizontal',
        // Define a direção de transição dos slides como horizontal.
        loop: false,
        // Define que o carrossel não irá repetir os slides (não fará looping).

        pagination: {
            el: '.swiper-pagination'
            // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
        }
    });

    document.addEventListener('keydown', function (event) {
        // Adiciona um listener para eventos de teclado.
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
            // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
            // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
        }
    });

    const gameInput = document.getElementById('gameInput');
    // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

    gameInput.addEventListener('keypress', function (event){
        // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
        if(event.key === 'Enter'){
            // Verifica se a tecla pressionada foi 'Enter'.
            let searchGame = gameInput.value.trim().toUpperCase();
            // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    // Se o valor digitado for 'MARIO', move para o primeiro slide (índice 0).
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    // Se o valor digitado for 'POKEMON', move para o segundo slide (índice 1).
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    // Se o valor não corresponder a nenhum dos casos, exibe um alerta informando que o jogo não foi encontrado.
                    break;
            }
        }
    });
});

const login = document.getElementById('login')

login.addEventListener('click', () => {
    console.log('listando');
    
    const modal = document.querySelector('.janela-modal'); // Seleciona a classe 'janela-modal'
    if (modal) {
        modal.classList.add('abrir');
    } else {
        console.error('Elemento com a classe "janela-modal" não encontrado!');
    }
})

const fechar = document.querySelector('.fechar')

fechar.addEventListener('click', () => {
    const modal = document.querySelector('.janela-modal');
    if(modal) {
        modal.classList.remove('abrir')
    }else { 
        console.error('Elemento com a classe "fechar" não encontrado!')
    }
})

class Menu {
    constructor(mobileMenu, li, nav) {
        this.menuMobile = document.querySelector(mobileMenu)
        this.links = document.querySelectorAll(li)
        this.navbar = document.querySelector(nav)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.navbar.classList.toggle(this.activeClass)
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", () => {
            this.handleClick()
        })
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent()
        }

        return true
    }
}

const menu = new Menu(".mobile-menu", "li", "nav")

menu.init()