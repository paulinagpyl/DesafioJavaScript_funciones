//parte 3
const divUno = document.querySelector('#uno');
const divDos = document.querySelector('#dos');
const divTres = document.querySelector('#tres');
const divCuatro = document.querySelector('#cuatro');
const divKey=document.querySelector('#key')
const colorea = (elemento) => (elemento.style.backgroundColor= "black");
divUno.addEventListener('click', () => colorea(divUno));
divDos.addEventListener('click', () => colorea(divDos));
divTres.addEventListener('click', () => colorea(divTres));
divCuatro.addEventListener('click', () => colorea(divCuatro));

function creaDivs(color){
    const nvoDiv =document.createElement('div');
    nvoDiv.style.width='200px';
    nvoDiv.style.height='200px';
    nvoDiv.style.margin='2px';
    nvoDiv.style.backgroundColor=color
    document.body.appendChild(nvoDiv);
}
document.addEventListener('keydown',function(ele){
    if (ele.key==='a'){
        divKey.style.backgroundColor='pink';
    }else if (ele.key==='s'){
        divKey.style.backgroundColor='orange';
    }else if (ele.key==='d'){
        divKey.style.backgroundColor='skyblue';
    }else if (ele.key==='q'){
        creaDivs('purple');
    }else if (ele.key==='w'){
        creaDivs('grey');
    }else if (ele.key==='e'){
        creaDivs('brown');
    }
})
