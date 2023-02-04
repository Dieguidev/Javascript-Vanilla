let edad = parseInt(prompt('Ingresa tu edad'));

if (edad > 0) {
  if (edad < 18) {
    alert('eres menor de edad, pide permiso a tus padres para realizar un acompra');
  } else if (edad < 100) {
    alert('eres mayor de edad, tu si puedes comprar');
  } else {
    alert('eres un superhumano, realiza tus compras con gusto');
  };
} else if (edad === 0) {
  alert('recien naciste???? no puedes comprar en este ecommerce');
} else {
  alert('no eres humano, no puedes comprar en este ecommerce');
};