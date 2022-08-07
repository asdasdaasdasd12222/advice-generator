let adviceInner = document.querySelector('.advice'),
    adviceNumInner = document.querySelector('span'),
generateBtn = document.querySelector('.generate');

generateBtn.addEventListener('click' , function(){
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        adviceInner.innerHTML =`${json.slip.advice}`
        adviceNumInner.innerHTML = `#${json.slip.id}`
    })
})


//loading
let loading = document.querySelector('.loader')
window.addEventListener('load' , function(){
    loading.style.marginLeft = '200%'
})