const CANVAS = document.getElementById('canvas');
const BTN_SQUARE = document.getElementById('square-btn');

class Square {
    constructor(h) {
        this.h = h;
        this.offset = offset;
        this.square = document.createElement('div');
        this.square.classList.add('square');
        this.square.style.height = (h + 'px');
        this.square.style.width = (h + 'px');
        this.square.style.top = offset(h);
        this.square.style.left = offset(h);
        CANVAS.appendChild(this.square);
    }
}
function offset(x) {
    let o = Math.abs((Math.floor(Math.random() * 600)) - x - 4);
    console.log(o);
    return o + 'px';
}
BTN_SQUARE.addEventListener('click', () => {
    let h = document.getElementById('square-input').value;
    new Square(h);
});