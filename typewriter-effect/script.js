const title = document.querySelector('h1');

function typeWriter(element){    
    const titleArray = element.innerHTML.split('');    
    element.innerHTML = '';    
    titleArray.forEach((letter, i) => {        
        setTimeout(() => element.innerHTML += letter , 75 * i);
        /*
        setTimeout(function(){
            element.innerHTML += letter;
        } , 90 * i); */
    });
}

typeWriter(title);