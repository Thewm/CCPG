const passwordGenerator = creditNumber => {
  let randNumber = Math.floor(Math.random() * 9),
    period = Math.floor(Math.random() * 3),
    choice = Math.ceil(Math.random() * 5),
    creditSerialization = creditNumber.split(""),
    arr = [],
    pass = [];

  for (let _value of creditSerialization) {
    _value = Number(_value);
    if (randNumber === 0) randNumber += period + 1;
    _value += Math.ceil(
      Math.abs(randNumber - period) * (Math.random() * 2) +
        1 -
        Math.ceil(Math.random() * 2)
    );
    if (_value < 0) {
      _value += period ** 2;
      arr.push(_value);
    } else if (_value < 10) arr.push(_value);
  }

  for (let i = 0; i < 4; i++) {
    if (arr.length >= 15) {
      pass.push(arr[choice * i]);
    } else {
      pass.push(arr[i]);
    }
  }
  return pass.join("");
};

const getSerialNumber = () => {
  const btn = document.querySelector(".submit");
  let inputSerial = document.querySelector(".input").value;

  btn.addEventListener("click", _ => {
    passwordGenerator(inputSerial);
    document.querySelector(".pass-code").textContent = passwordGenerator.pass;
    console.log(passwordGenerator.pass);
  });

  document.addEventListener("keypress", event => {
    if (event.keyCode === 13 || event.which === 13) {
      passwordGenerator(inputSerial);
      document.querySelector(".pass-code").textContent = passwordGenerator.pass;
      console.log(passwordGenerator.pass);
    }
  });
};

getSerialNumber();
