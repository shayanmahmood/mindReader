const input = document.querySelector('.input')
const btn = document.querySelector('.readMind');
const txt = document.querySelector('.think')
const texty = document.querySelector('.hidden')
btn.addEventListener('click', () => {
    if (!isNaN(input.value) && input.value > 0 && input.value <= 10) {
        let li = document.querySelectorAll('.li');
        for (let i = 0; i < li.length; i++) {
            li[i].style.animation = 'spin 2s 0.6s infinite';
        }
        txt.textContent = 'Analysing Brain Waves.....'
        progress.style.width = '20%'
        setTimeout(() => {
            txt.textContent = 'Scanning Memories'
            progress.style.width = '80%'
            setTimeout(() => {
                txt.textContent = 'Calculation POsiilities...'
                progress.style.width = '100%'
            }, 1000);
        }, 2000);
        setTimeout(() => {
            txt.textContent = 'Decoding Thoughts...'
            progress.style.width = '20%'
            setTimeout(() => {
                txt.textContent = 'Checking Behaviour...'
                progress.style.width = '40%'
            }, 1000);
        }, 1000);
        setTimeout(() => {
            txt.textContent = 'We are CONcluding the ReSuLt....'
        }, 5000);
        setTimeout(() => {
            texty.innerHTML = `<h1>You are thinking about the number<br/> <b style='font-size:40px;'>${input.value} </b>🤯😨😱</h1>`
        }, 6000);
    }
})




const progress = document.querySelector('.progress-done');


progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;




