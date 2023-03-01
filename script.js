let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('#fim');
let imagem = document.querySelector('img');
let nomeDaMusica = document.querySelector('.descricao h2');
let nomeDoArtista = document.querySelector('.descricao i');

// Eventos 

window.onload = duration;

document.querySelector('.iconPlay').addEventListener('click', tocarMusica);

document.querySelector('.iconPause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

// Funções

function duration(){
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}

function tocarMusica(){
    musica.play();
    document.querySelector('.iconPause').style.display = 'block';
    document.querySelector('.iconPlay').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.iconPause').style.display = 'none';
    document.querySelector('.iconPlay').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('#inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
