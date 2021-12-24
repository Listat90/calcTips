const inputCheak = document.querySelector('#cheak'),
      inputTips = document.querySelector('#tips');

inputCheak.addEventListener('input', () =>{
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if(request.status === 200){
            console.log(request.response)
            const data = JSON.parse(request.response);
            inputTips.value = (+inputCheak.value * data.current.tips).toFixed(2);
        }else{
            inputTips.value = 'Что то пошло не так';
        }
    })

    
})