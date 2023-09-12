const panel = document.querySelector('.panel');
const buttons = document.querySelectorAll('button');

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        if (e.target.innerText == '=') {
            panel.innerText = eval(panel.innerText);
        } else if (e.target.innerText == 'C') {
            panel.innerText = '';
        } else {
            panel.innerText += e.target.innerText;
        }
    })
}