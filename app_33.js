// app_32
function runAnimation(){
    const blobSvg = document.querySelectorAll('body #container > .blobSvg .item g path');
    const resultSVG = document.querySelector('body #container > .blobSvg .resultSVG svg g path');
    let i = 0;

    const stop = setInterval(function(){
        i++;
        if(i >= blobSvg.length){
            i = 0;
        }
        resultSVG.setAttribute('d',`${blobSvg[i].getAttribute('d')}`);
        // resultSVG.children[0].classList.remove('item');
    },3000)
}

// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);          detect mode dark or light ?!
document.addEventListener('DOMContentLoaded',function(){runAnimation()});