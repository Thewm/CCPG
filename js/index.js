let inputSerial = document.querySelector(".input").value;
const output = document.querySelector(".output");
let edgeCase = 8;
const passwordGenerator = creditNumber => {
  let randNumber = Math.floor(Math.random() * 9),
    period = Math.floor(Math.random() * 3),
    choice = Math.ceil(Math.random() * 5),
    creditSerialization = creditNumber.toString().split(""),
    arr = [],
    pass = [];
  const btn = document.querySelector(".submit");

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

  inputSerial = inputSerial.toString();
  inputSerial = inputSerial.split("");

  btn.addEventListener("click", _ => {
    console.log(inputSerial);
    
    if (inputSerial.length >= edgeCase) {
      document.querySelector(".pass-code").textContent = pass.join("");
      return inputSerial;
    } else {
      output.style.color = "#db1d00";
      output.innerHTML = `Input must be greater than or equal to ${edgeCase}, So your entered input "${inputSerial.join(
        ""
      )}" has no chance to get result!!`;
    }
  });
};

passwordGenerator(inputSerial);
