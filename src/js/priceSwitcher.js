document.addEventListener("DOMContentLoaded", function () {
  const standardButton = document.getElementById("standard");
  const vipButton = document.getElementById("vip");
  const tariffPrice = document.getElementById("tariff-price");
  const tariffPriceMounth = document.getElementById("tariff-price-month");

  const standardTwo = document.getElementById("standardTwo");
  const standardTwoMounth = document.getElementById("standardTwoMounth");

  const tariffPriceTwo = document.getElementById("standardTwoPrice");
  const tariffPriceTwoVip = document.getElementById("standardTwoPriceMounth");

  standardButton.addEventListener("change", function () {
    changeTariff("standard");
  });

  vipButton.addEventListener("change", function () {
    changeTariff("vip");
  });

  standardTwo.addEventListener("change", function () {
    changeTariff("standart-two");
  });

  standardTwoMounth.addEventListener("change", function () {
    changeTariff("vip-two");
  });

  function changeTariff(tariff) {
    if (tariff === "standard") {
      tariffPrice.textContent = "15 000 грн"; // Замените на реальную цену для стандартного тарифа
      tariffPriceMounth.textContent = "8 400 грн/міс.";
    } else if (tariff === "vip") {
      tariffPrice.textContent = "20 000 грн"; // Замените на реальную цену для VIP тарифа
      tariffPriceMounth.textContent = "12 400 грн/міс. ";
    } else if (tariff === "standart-two") {
      tariffPriceTwo.textContent = "24 000 грн"; // Замените на реальную цену для базового тарифа
      tariffPriceTwoVip.textContent = "12 500 грн/міс. ";
    } else if (tariff === "vip-two") {
      tariffPriceTwo.textContent = "30 000 грн"; // Замените на реальную цену для премиум тарифа
      tariffPriceTwoVip.textContent = "19 500 грн/міс. ";
    }
  }
});
