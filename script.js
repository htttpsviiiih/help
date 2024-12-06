function buscar (cep){

let ajax = new XMLHttpRequest();

ajax.open('GET', 'https://viacep.com.br/ws/'+cep+'/json/', true);

ajax.onload = function(){
    if (ajax.status == 200) {
        console.log('Resposta: ', JSON.parse(ajax.responseText));
    }else {
        console.error('Erro: ', ajax.status, ajax.statusText);
    }
}

ajax.send(null);

}



let button = document.querySelector('button');

button.addEventListener('click', ()=>{

let input = document.querySelector('input');

let cep = input.value;

    buscar(cep);

});
