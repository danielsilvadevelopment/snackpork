// função para sumir cor da barra e logo ao tocar no topo da tela
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    var $logo = $(".logo-img");
    $logo.toggleClass('style-nav-logo-hidden', $(this).scrollTop() <= $nav.height());
    var $botaoMenu = $(".style-nav-button");
    $botaoMenu.toggleClass("style-nav-button-yellow", $(this).scrollTop() <= $nav.height());
    });
});


// função para smooth scroll
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
});

// faz fechar o menu quando se clica em um botão
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


// função que muda cor dos botões de navegação quando a barra está no topo
$(function () {
  $(document).scroll(function () {  	
    var $nav = $(".navbar-fixed-top");
    var $aHover = $(".style-nav-a");
    $aHover.toggleClass('style-nav-a-cor-top', $(this).scrollTop() <= $nav.height());
})});

// acrescenta um border quando o botão está na seção
$('body').scrollspy({
  target: '#my-nav-bar',
  offset: 80
});


// acrescenta uma layer na tela quando o menu está ativo
var botao = document.querySelector(".style-nav-button");
var camada = document.querySelector(".hidden-layer");
botao.addEventListener('click', function(){
	camada.classList.toggle("layer");
})
var link = document.querySelector(".nav");
link.addEventListener('click', function(){
	camada.classList.remove("layer");
})

// fecha o menu quando se clica na layer
var lista = document.querySelector(".navbar-collapse");
camada.addEventListener('click', function(){
  camada.classList.remove("layer");
})
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

// remove e faz aparecer o botão arrow-up
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    var $button = $(".style-up-button");
    $button.toggleClass('style-up-button-hidden', $(this).scrollTop() <= $nav.height());
    });
});


