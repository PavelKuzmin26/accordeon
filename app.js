let accordion = document.querySelectorAll('.accordion-container .accordion')

accordion.forEach(acco =>{
    acco.onclick = () =>{
        accordion.forEach(subAcco =>{
            subAcco.classList.remove('active')
        })
        acco.classList.add('active')
    }
})