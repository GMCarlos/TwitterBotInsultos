class Insultos {
  fraseGenerada;
  listaInsultos;
  insultosMaximos;

  constructor() {
    this.listaInsultos  = [];
    this.insultosMaximos = 9;
    this.cargarInsultos();
  }

  generarInsulto = () => {
    let numero = this.between(0, this.insultosMaximos);
    this.fraseGenerada = this.listaInsultos[numero];
    console.log(numero);
    console.log(this.fraseGenerada);

    return this.fraseGenerada;
  }

  between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    );
  }

  cargarInsultos() {
      this.listaInsultos.push('@Nick tienes más piojos que un almendro.');
      this.listaInsultos.push('@Nick si tu cabeza fuera un tomate, tendrían que hacer gazpacho en una plaza de toros.');
      this.listaInsultos.push('@Nick tienes más mierda que el pecho de una serpiente.');
      this.listaInsultos.push('@Nick eres un trozo de carne con ojos.');
      this.listaInsultos.push('@Nick tienes más mierda que el zancajo de un indio.');
      this.listaInsultos.push('@Nick eres tan cerdo que no sé si lavarte o asarte.');
      this.listaInsultos.push('@Nick si ganas 5 kilos más te hacen descuento de grupo.');
      this.listaInsultos.push('@Nick es más tonto que hecho por encargo.');
      this.listaInsultos.push('@Nick tienes más orejas que Dumbo.');
  }
  
}

module.exports = Insultos;