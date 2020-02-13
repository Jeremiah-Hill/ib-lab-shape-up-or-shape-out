console.log("Loading..");

const CANVAS = document.getElementById('canvas'),
    infShape = document.getElementById('infShape');
infWidth = document.getElementById('infWidth');
infHeight = document.getElementById('infHeight');
infRadius = document.getElementById('infRadius');
infArea = document.getElementById('infArea');
infPerimeter = document.getElementById('infPerimeter');

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
// triangle listener.
document.getElementById('triangle-btn').addEventListener('click', () => {
    let h = document.getElementById('triangle-height').value;
    new Triangle(h);
});
// rectangle listener.
document.getElementById('rectangle-btn').addEventListener('click', () => {
    let l = document.getElementById('rectangle-length').value;
    let w = document.getElementById('rectangle-width').value;
    new Rectangle(l, w);
});

class Shape {
    constructor() {
        this.shape = document.createElement('div');
        this.shape.addEventListener('click', () => this.inform());
        this.shape.addEventListener('dblclick', () => this.shape.remove());
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
        this.shape.style.width = this.h + 'px';
        this.shape.style.top = this.offset(this.h) + 'px';
        this.shape.style.left = this.offset(this.h) + 'px';
        this.shape.classList.add('circle');
        this.shapeAppend();

    }
    inform() {
        infShape.innerText = "Shape: " + this.name;
        infWidth.innerText = "Width: " + this.h;
        infHeight.innerText = "Height: " + this.h;
        infRadius.innerText = "Radius: " + this.r;
        infArea.innerText = "Area: " + (Math.PI * Math.pow(this.r, 2)).toFixed(3);
        infPerimeter.innerText = "Perimeter: " + (2 * Math.PI * parseInt(this.r)).toFixed(3);
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
    inform() {
        infShape.innerText = "Shape: " + this.name;
        infWidth.innerText = "Width: " + this.l;
        infHeight.innerText = "Height: " + this.l;
        infRadius.innerText = "Radius: N/A";
        infArea.innerText = "Area: " + (Math.pow(this.l, 2));
        infPerimeter.innerText = "Perimeter: " + (4 * this.l);
    }
}
class Rectangle extends Shape {
    constructor(l, w) {
        super();
        this.name = 'rectangle';
        this.l = this.inputCheck(this.name, l);
        this.w = this.inputCheck(this.name, w);
        this.getRect();
        this.shape.style.height = (this.l) + 'px';
        this.shape.style.width = (this.w) + 'px';
        this.shape.style.top = this.offset(this.l) + 'px';
        this.shape.style.left = this.offset(this.w) + 'px';
        this.shape.classList.add('rectangle');
        this.shapeAppend();
    }
    getRect() {
        if (this.l === this.w) {
            alert("This is a square! Using defaults...");
            this.l = 50;
            this.w = 100;
        }
    }
    inform() {
        infShape.innerText = "Shape: " + this.name;
        infWidth.innerText = "Width: " + this.w;
        infHeight.innerText = "Height: " + this.l;
        infRadius.innerText = "Radius: N/A";
        infArea.innerText = "Area: " + (this.l * this.w);
        infPerimeter.innerText = "Perimeter: " + (parseInt(this.l) * 2 + parseInt(this.w) * 2);
    }
}
class Triangle extends Shape {
    constructor(h) {
        super();
    }
}
console.log("Loaded.");