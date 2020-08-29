//Na tela adicione um evento de monitoração do scroll quando acontecer dispare a função.
window.addEventListener('scroll',function(){
    //a variavel header vai receber a div header inteira.
    var header = document.querySelector('header');
    //na div header va em suas classes e add a classe sticky quando o scroll sai do topo.
    header.classList.toggle('rolou', window.scrollY > 0);
});
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu-mobile');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}