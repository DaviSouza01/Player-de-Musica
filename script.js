let musicas = [
    {titulo: 'Happy', artista: 'Pharrell Williams', src: 'musicas/Pharrell Williams - Happy (Video).mp3', img:'imagens/imagem-happy.jpg'}, 
    {titulo: 'Rude',  artista: 'MAGIC!', src: 'musicas/MAGIC! - Rude.mp3', img:'imagens/imagem-rude.jpg'},
    {titulo: 'Chop Suey!',  artista: 'System Of A Down', src: 'musicas/System Of A Down - Chop Suey!.mp3', img:'imagens/imagem-soad.jpg'},
    {titulo: 'Tiro ao alvaro',  artista: 'Elis Regina & Adoniran Barbosa', src: 'musicas/Tiro ao Alvaro.mp3', img:'imagens/imagem-tiroAlvaro.jpg'},
    {titulo: 'João e Maria',  artista: 'Chico Buarque', src: 'musicas/chico buarque - joao e maria.mp3', img:'imagens/imagem-joao-e-maria.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;
let tempoDecorrido = document.querySelector('#inicio');
let duracaoMusica = document.querySelector('#fim');
let imagem = document.querySelector('img');
let nomeDaMusica = document.querySelector('.descricao h2');
let nomeDoArtista = document.querySelector('.descricao i');
var aux = 0;

renderizarMusica(indexMusica, aux);

// Eventos 

window.onload = duration;

document.querySelector('.iconPlay').addEventListener('click', tocarMusica);

document.querySelector('.iconPause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

musica.addEventListener('ended', () => {
    indexMusica++
    if(indexMusica == 5){
        indexMusica = 0
    }
    renderizarMusica(indexMusica, aux)
  }); 

document.querySelector('.iconEsquerda').addEventListener('click', () => {
    aux++;
    indexMusica--;
    if(indexMusica == -1){
        indexMusica = 4
    }
    renderizarMusica(indexMusica, aux)
});

document.querySelector('.iconDireita').addEventListener('click', () => {
    aux++;
    indexMusica++;
    if(indexMusica == 5){
        indexMusica = 0
    }
    renderizarMusica(indexMusica, aux)
});

// Funções
function renderizarMusica(index, aux){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeDaMusica.textContent = musicas[index].titulo
        nomeDoArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
        atualizarBarra()
        if(aux>0){
            tocarMusica();
        }
    }); 
    
}

function duration(){
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}

function tocarMusica(){
    aux++;
    musica.play();
    document.querySelector('.iconPause').style.display = 'block';
    document.querySelector('.iconPlay').style.display = 'none';
    if(duracaoMusica.textContent == tempoDecorrido.textContent){
        indexMusica++
        if(indexMusica == 5){
            indexMusica = 0
        }
        renderizarMusica(indexMusica, aux)
    }
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.iconPause').style.display = 'none';
    document.querySelector('.iconPlay').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
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