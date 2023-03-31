
document.getElementById('popup-menu').addEventListener('click', () => {
    if(confirm('Are you confirm?')){
        document.getElementsByClassName('popup')[0].classList.add('active')
    }
})

document.getElementById('dismiss-btn').addEventListener('click', () => {
    document.getElementsByClassName('popup')[0].classList.remove('active')
})

