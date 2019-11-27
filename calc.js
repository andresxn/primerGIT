function memoryPlus(){ 
     memoriaMas = eval(document.getElementById('visor').innerHTML);
    
};
function ans(){
    document.getElementById('visor').innerHTML += memoriaMas;
}

function numero(value){
    document.getElementById('visor').innerHTML += value;
};

function operador(value){
    document.getElementById('visor').innerHTML += value;
};
function borrarUno(){
    let menosUno = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = menosUno.slice(0, -1);
}

function botonIgual(){
    let valorIgual = document.getElementById('visor').innerHTML;
    if (valorIgual.includes('**') || valorIgual.includes('//')) {
            alert('Error en la sintaxis');
    } else if (valorIgual == ''){
        return;
    } else {
        try {
            document.getElementById('visor').innerHTML = eval(valorIgual);
        } catch (error) {
            console.log(error);
            alert('Error en la sintaxis');
        };
    };
};
function delVisor(){
    document.getElementById('visor').innerHTML = '';
    memoriaMas = document.getElementById('visor').innerHTML;
};
function coma(value){
    let visor = document.getElementById('visor').innerHTML;
    if (visor.indexOf('.') == -1){
        document.getElementById('visor').innerHTML += value;
    };
};

function masMenos(){
    let visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = eval(visor) * -1;
};