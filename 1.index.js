form.addEventListener('submit', event => {

    event.preventDefault(); //evita o recarregamento da página 
    var username = document.getElementById('nome').value;
    localStorage.setItem('nome', username) 
   start()
}
)
function start(){
    window.location= "2.quiz.html"
}
