const textIn = document.getElementById("text_in");
const textOut = document.getElementById("text_out");

function criptografar() {
    if(!(validaCaracteres())) {
        abreAlerta();
        return;
    }

    let caracteres = textIn.value.split("");
    let wordsLength = caracteres.length;
    let newWords = [];

    for(let i = 0; i < wordsLength ; i++) {
        if(caracteres[i].includes('e'))
            caracteres[i] = caracteres[i].replace("e", "enter");
        if(caracteres[i] == 'i')
            caracteres[i] = caracteres[i].replace("i", "imes");
        if(caracteres[i] == 'a')
            caracteres[i] = caracteres[i].replace("a", "ai");
        if(caracteres[i] == 'o')
            caracteres[i] = caracteres[i].replace("o", "ober");
        if(caracteres[i] == 'u')
            caracteres[i] =  caracteres[i].replace("u", "ufat");
        newWords.push(caracteres[i]);
    }

    atualizarTexto(textOut, newWords.join(""))

    let btn_copy = document.getElementById("copy");
    btn_copy.style.display = 'inline-block';
}

function descriptografar() {
    if(!(validaCaracteres())) {
        abreAlerta();
        return;
    }

    let caracteres = textIn.value.split("");
    let wordsLength = caracteres.length;

    for(let i = 0; i < wordsLength; i++) {
        if(caracteres[i] == 'e' && caracteres[i + 1] == 'n' && caracteres[i + 2] == 't' && caracteres[i + 3] == 'e' && caracteres[i + 4] == 'r') {
            for(let j = i; j < i + 4; j++)
                caracteres.splice(i + 1, 1);
        }
        if(caracteres[i] == 'i' && caracteres[i + 1] == 'm' && caracteres[i + 2] == 'e' && caracteres[i + 3] == 's') {
            for(let j = i; j < i + 3; j++)
                caracteres.splice(i + 1, 1);
        }
        if(caracteres[i] == 'a' && caracteres[i + 1] == 'i') {
                caracteres.splice(i + 1, 1);
        }
        if(caracteres[i] == 'o' && caracteres[i + 1] == 'b' && caracteres[i + 2] == 'e' && caracteres[i + 3] == 'r') {
            for(let j = i; j < i + 3; j++)
                caracteres.splice(i + 1, 1);
        }
        if(caracteres[i] == 'u' && caracteres[i + 1] == 'f' && caracteres[i + 2] == 'a' && caracteres[i + 3] == 't') {
            for(let j = i; j < i + 3; j++)
                caracteres.splice(i + 1, 1);
        }
    }

    let newWord = caracteres.toString();
    for(let i = 0; i < newWord.length; i++)
        newWord = newWord.replace(',', '');

    atualizarTexto(textOut, newWord);

    let btn_copy = document.getElementById("copy");
    btn_copy.style.display = 'inline-block';
}

function copiaTexto() {
    /* TO DO */
}

function validaCaracteres() {
    let caracteres = textIn.value.split("");
    if(caracteres.length == 0)
        return false;
    const regex = /^[a-zA-Z]+$/;
    return caracteres.every(item => regex.test(item));
}

function abreAlerta() {
    document.getElementById('overlay').style.display = 'block';

    let bodyChildren = document.body.children;
    for(let i = 0; i < bodyChildren.length; i++) {
        if(bodyChildren[i].id !== 'overlay' && bodyChildren[i].id !== 'invalidChar') {
            bodyChildren[i].style.pointerEvents = 'none';
        }
    }

    let invalidChar = document.getElementById("invalidChar");
    invalidChar.style.display = "flex";
}

function fechaAlerta() {
    document.getElementById('overlay').style.display = 'none';

    let bodyChildren = document.body.children;
    for(let i = 0; i < bodyChildren.length; i++) {
        bodyChildren[i].style.pointerEvents = 'auto';
    }

    let invalidChar = document.getElementById("invalidChar");
    invalidChar.style.display = "none";
}

function atualizarTexto(tag, texto) {
    tag.innerHTML = texto;
}