console.log("Loading..");

const CANVAS = document.getElementById('canvas');

// circle listener.
document.getElementById('circle-btn').addEventListener('click', () => {
    let r = document.getElementById('circle-radius').value;
    new Circle(r);
});
// square listener.
document.getElementById('square-btn').addEventListener('click', () => {
    let l = document.getElementById('square-length').value;
    new Square(l);
});

class Shape {
    constructor() {
        this.shape = document.createElement('div');
    }
    
    shapeAppend() {
        CANVAS.appendChild(this.shape);
    }
}
class Circle extends Shape {
    constructor(r) {
        super();
        this.r = this.inputCheck(r);
        this.shape.style.height = (this.r * 2 + 'px');
        this.shape.style.width = (this.r * 2 + 'px');
        this.shape.style.top = this.offset(this.r);
        this.shape.style.left = this.offset(this.r);
        this.shape.classList.add('circle');
        this.shapeAppend();
    }
    inputCheck(x) {
        if ((x.length === 0) || (Number.isNaN(x) === true)) {
            return 50;
        } else {
            return x;
        }
    }
    offset(x) {
        return Math.abs((Math.floor(Math.random() * (x * 9))) - x - 4) + 'px';
    }
}
class Square extends Shape {
    constructor(l) {
        super();
        this.l = this.inputCheck(l);
        this.shape.style.height = (this.l + 'px');
        this.shape.style.width = (this.l + 'px');
        this.shape.style.top = this.offset(this.l);
        this.shape.style.left = this.offset(this.l);
        this.shape.classList.add('square');
        this.shapeAppend();
    }
    inputCheck(x) {
        if ((x.length === 0) || (Number.isNaN(x) === true)) {
            return 100;
        } else {
            return x;
        }
    }
    offset(x) {
        return Math.abs((Math.floor(Math.random() * (x * 6))) - x - 4) + 'px';
    }
}

console.log("Loaded.");