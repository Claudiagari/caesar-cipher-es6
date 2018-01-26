$(document).ready(()=>{
  // llamando al boton para cifrar
  $('#button').on('click', () => {
    let phrase = $('#text').val();
    $('#cipherResult').text(cipher(phrase, 33));
    $('#text').val('');
  });
  // llamando al boton decifrar
  $('#buttonDecipher').on('click', () => {
    let phrase = $('#textCipher').val();
    $('#decipherResult').text(decipher(phrase, 33));
    $('#textCipher').val('');
  });
  // funcion para cifrar   
  var cipher = (text, number) => {
    let output = '';
    for (let i = 0;i < text.length;i++) {
      // variable que contendra los numeros ASCII
      let k = text.charCodeAt(i);
      // dando la condicion si la variable k esta en el rango de mayusculas
      if (65 <= k && k <= 90) {
        // aplicando la formula que devuelve la letra encriptada en mayusculas
        output += String.fromCharCode(((k - 65 + number) % 26) + 65);
      }
      // Dando la condicion la variable k pertenece a minusculas
      else if (97 <= k && k <= 122) {
        // aplicando la formula que devuelva la letra encriptada en minusculas
        output += String.fromCharCode(((k - 97 + number) % 26) + 97);
      } else if (k === 32) {
        output += ' ';
        // si no es una letra devuelve una alerta
      } else {
        output = alert('Ingresar solo letras');
      }
    }
    return output;
  }; 
  // funcion para decifrar   
  var decipher = (text, number) =>{
    // creando la variable result que contendra la frase original
    let output = '';
    // recorriendo las posiciones de text
    for (let i = 0;i < text.length;i++) {
      // recorriendo las posiciones de text
      let k = text.charCodeAt(i);
      // creando la condicion de mayusculas
      if (65 <= k && k <= 90) {
        // aplicando la formula para devolver letra original en mayusculas
        output += String.fromCharCode((((k + number - 1) % 26)) + 65);
      }
      // creando la condicion para minusculas
      else if (97 <= k && k <= 122) {
        // aplicando la formula para devolver la letra original en minusculas
        output += String.fromCharCode((((k + number + 19) % 26)) + 97);
      } else if (k === 32) {
        output += ' ';
        // de lo contrario enviar una alerta
      } else {
        output = alert('Ingresar solo letras');
      }
    }
    // retornando el texto original
    return output;
  };
});