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
    inputCheck(name, x) {
        let def;
        switch (name) {
            case 'circle':
                def = 50;
                break;
            case 'square':
                def = 100;
                break;
            case 'triangle':
                def = 100;
                break;
            case 'rectangle':
                def = 70;
                break;
        }
        if ((x.length === 0) || (Number.isNaN(x) === true)) {
            return def;
        } else {
            return x;
        }
    }
    offset(x) {
        let y = Math.floor(Math.random() * 601 - x) - 4;
        if (y < 0) {
            let y = Math.floor(Math.random() * 601 - x) - 4;
        } else {
            return y;
        }
    }
    shapeAppend() {
        CANVAS.appendChild(this.shape);
    }
}
class Circle extends Shape {
    constructor(r) {
        super();
        this.name = 'circle';
        this.r = this.inputCheck(this.name, r);
        this.h = this.r * 2;
        this.shape.style.height = this.h + 'px';
        this.w = this.r * 2;
        this.shape.style.width = this.w + 'px';
        this.shape.style.top = this.offset(this.h) + 'px';
        this.shape.style.left = this.offset(this.w) + 'px';
        this.shape.classList.add('circle');
        this.shapeAppend();
    }
    
}
class Square extends Shape {
    constructor(l) {
        super();
        this.name = 'square';
        this.l = this.inputCheck(this.name, l);
        this.shape.style.height = (this.l + 'px');
        this.shape.style.width = (this.l + 'px');
        this.shape.style.top = this.offset(this.l) + 'px';
        this.shape.style.left = this.offset(this.l) + 'px';
        this.shape.classList.add('square');
        this.shapeAppend();
    }
}
class Rectangle extends Shape {
    constructor(l, w) {
        super();
    }
}
class Triangle extends Shape {
    constructor(h) {
        super();
    }
}
console.log("Loaded.");