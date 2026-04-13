abstract class Figura {
  abstract CalcularArea(): number;
}

class Circulo extends Figura {
  private _radio: number;
  constructor(radio: number) {
    super();
    this._radio = radio;
  }

  CalcularArea(): number {
    return Math.PI * this._radio ** 2;
  }
  get radio(): number {
    return this._radio;
  }
}

const exec = new Circulo(10);
const area = exec.CalcularArea();

console.log(`el area es: ${area}`);

// New class triangle extends Figura
class Triangulo extends Figura {
  private _base: number;
  private _altura: number;

  constructor(base: number, altura: number) {
    super();
    this._altura = altura;
    this._base = base;
  }

  CalcularArea(): number {
    const AreaTriangulo = (this._base * this._altura) / 2;
    return AreaTriangulo;
  }
}

const trinagulo1 = new Triangulo(20, 3);
const areaTrinagulo1 = trinagulo1.CalcularArea();

console.log(`El area del triángulo es: ${areaTrinagulo1}`);

class Rectangulo extends Figura {
  private _base: number;
  private _altura: number;

  constructor(base: number, altura: number) {
    super();
    this._base = base;
    this._altura = altura;
  }

  CalcularArea(): number {
    return this._base * this._altura;
  }

  get base(): number {
    return this._base;
  }

  get altura(): number {
    return this._altura;
  }
}

const rectangulo1 = new Rectangulo(10, 5);
const areaRectangulo1 = rectangulo1.CalcularArea();

console.log(`El área del rectángulo es: ${areaRectangulo1}`);
