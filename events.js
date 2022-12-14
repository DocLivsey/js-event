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
      prop1: 1.5,
      prop2: 2,
    }
  }
};

function updatePrice() {
  // Находим select по имени в DOM.
  let s = document.getElementsByName("field-choose");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.servicesTypes[priceIndex];
  }
  
  // Скрываем или показываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = ((select.value == "1" || select.value == "2" || select.value == "5") ? "flex" : "none");
  
  // Смотрим какая товарная опция выбрана.
  let radios = document.getElementsByName("services-options");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = parseInt(prices.servicesOptions[radio.value]);
      if (optionPrice !== undefined) {
        price *= optionPrice;
      }
    }
  });

  // Скрываем или показываем чекбоксы.
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = ((select.value == "3" || select.value == "2") ? "none" : "flex");

  // Смотрим какие товарные свойства выбраны.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.servicesProperties[checkbox.value];
      if (propPrice !== undefined) {
        price *= propPrice;
      }
    }
  });
  
  let prodPrice = document.getElementById("result");
  prodPrice.innerHTML = price + " рублей";

  let f1 = document.getElementsByName("coefficient-input");
  let res = document.getElementById("final-result");
  res.innerHTML = f1[0].value * price;
}

window.addEventListener('DOMContentLoaded', function (event) {
  let calcDiv = document.getElementById("price-label");
  calcDiv.style.display = "flex";

  let buttonOutput = document.getElementById("output-button");
  buttonOutput.style.display = "none";
  
  // Скрываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";
  
  // Находим select по имени в DOM.
  let s = document.getElementsByName("field-choose");
  let select = s[0];
  // Назначаем обработчик на изменение select.
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  
  // Назначаем обработчик радиокнопок.  
  let radios = document.getElementsByName("services-options");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

    // Назначаем обработчик радиокнопок.  
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  let coef = document.getElementsByName("coefficient-input");
  coef[0].addEventListener("change", function (event) {
    if (coef[0].value.match(/^[1-9][0-9]*$/g) == null) {
      alert("Введено не число");
      res.innerHTML = 0;
    }
    updatePrice();
  });

  updatePrice();
});

function clickEvent(){
  if(isFieldFill == true){
    alert('Спасибо, что воспользовались нашими услугами');
  }
  return false;
}

function clickEventSecond(){
  let text = document.getElementById("coefficient-input");
  if(text[0].match(/^[1-9][0-9]*$/g) == null) {
    alert("Введено не число");
  }
  return false;
}