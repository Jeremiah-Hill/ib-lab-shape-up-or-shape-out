console.log("Loading..");

const CANVAS = document.getElementById('canvas');
const BTN_SQUARE = document.getElementById('square-btn');

class Shape {
    constructor(h) {
        this.h = this.inputCheck(h);
        this.offsetV = this.offset(this.h);
        this.offsetH = this.offset(this.h);
        this.shape = document.createElement('div');
        this.shape.style.height = (this.h + 'px');
        this.shape.style.width = (this.h + 'px');
        this.shape.style.top = this.offsetV;
        this.shape.style.left = this.offsetH;
    }
    inputCheck(x) {
        if ((x.length === 0) || (Number.isNaN(x) === true)) {
            return 100;
        } else {
            return x;
        }
    }
    offset(x) {
        return (Math.abs((Math.floor(Math.random() * 600)) - x - 4) + 'px');
    }
}
class Circle extends Shape {
    constructor(h) {
        super(h);
        this.shape.classList.add('circle');
        CANVAS.appendChild(this.shape);
    }
}
class Square extends Shape {
    constructor(h) {
        super(h);
        this.shape.classList.add('square');
        CANVAS.appendChild(this.shape);
    }
}

BTN_SQUARE.addEventListener('click', () => {
    let h = document.getElementById('square-input').value;
    new Square(h);
    new Circle(h);
});

console.log("Loaded.");