const moneyBox = coins => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`moneyBox: $${saveCoins}`);
};
// No hay closure
moneyBox(5);
moneyBox(10);

// Si hay closure
const moneyBox2 = () => {
  var saveCoins = 0;
  const countCoins = coins => {
    saveCoins += coins;
    console.log(`MoneyBox : $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox2();

myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); // 20
