let isFieldFill = false;

function getPrices(){
  return {
    servicesTypes: [100, 100, 300, 500, 1000],
    servicesOptions: {
      option1: 1,
      option2: 2,
      option3: 3,
    },
    servicesProperties: {
      prop1: 1,
      prop2: 2,
    }
  }
};

function updatePrice() {
  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  
  // Скрываем или показываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = (select.value == "3" ? "block" : "none");
  
  // Смотрим какая товарная опция выбрана.
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });

  // Скрываем или показываем чекбоксы.
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "none" : "block");

  // Смотрим какие товарные свойства выбраны.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  
  let prodPrice = document.getElementById("prodPrice");
  prodPrice.innerHTML = price + " рублей";
}

function choose1(){
  price = 100;
  let txt = `Цена за одну услугу ${price} ₽`;
  let app = document.getElementById("out-label");
  app.innerHTML = txt;
  return false;
} 

function choose2(){
  price = 100;
  let txt = `Цена за одну услугу ${price} ₽`;
  let app = document.getElementById("out-label");
  app.innerHTML = txt;
  return false;
} 

function choose3(){
  price = 300;
  let txt = `Цена за одну услугу ${price} ₽`;
  let app = document.getElementById("out-label");
  app.innerHTML = txt;
  return false;
} 

function choose4(){
  price = 500;
  let txt = `Цена за одну услугу ${price} ₽`;
  let app = document.getElementById("out-label");
  app.innerHTML = txt;
  return false;
} 

function choose5(){
  price = 1000;
  let txt = `Цена за одну услугу ${price} ₽`;
  let app = document.getElementById("out-label");
  app.innerHTML = txt;
  return false;
} 

function calc(){
  let count = document.getElementsByName("field1");
  let out = document.getElementById("result");
  let txt = "Итого: ";
  let rub = " ₽";
  isFieldFill = true;
  out.innerHTML = txt + price * parseInt(count[0].value) + rub;
  return false;
}

function clickEvent(){
  if(isFieldFill == true){
    alert('Спасибо, что воспользовались нашими услугами');
  }
  return false;
}

function clickEventSecond(){
  let text = document.getElementById("result");
  alert(text[0]);
  return false;
}

function vova()
{
  let vova = prompt("Вова гей?");
  if (vova == 'да' | vova == 'da'){
    alert("вы правы")
  }
  else{
    alert("вы не правы, вова гей")
  }
  return false
}