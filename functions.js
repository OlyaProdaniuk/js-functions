let a = 5;
let b = 3;

c = a + b;
console.log(c);

function sum(a, b) {
  let c = a + b;
  console.log(c);
  return c + a;
}

console.log(sum(40, 12));

//anonimous function

const anonimous = function (a, b) {
  let c = a + b;
  console.log(c);
  return c + a;
};
console.log(anonimous(1, 2));

const arrowFunc = (a, b) => {
  let c = a + b;
  console.log(c);
};
arrowFunc(1, 2);

const funcwithDefaultParam = (a, b = 2) => {
  return a * b;
};
console.log(funcwithDefaultParam(3, 5));
console.log(funcwithDefaultParam(3));
console.log(Date());

const myRequestWithDate = (field1, timestamp = Date()) => {
  let requestBody = {
    someData: 1,
    someData2: 2,
    timestamp: "",
  };
  requestBody.someData = field1;
  requestBody.timestamp = timestamp;

  return requestBody;
};
console.log(myRequestWithDate("qweqwe", "8181818188181"));
console.log(myRequestWithDate("qweqwe"));

const playWithReturnFunc = () => {
  for (let i = 0; i < 8; i++) {
    console.log(i);
    if (i === 5) {
      return;
    }
  }
};

playWithReturnFunc();

//callback
function first() {
  setTimeout(function () {
    console.log("First");
  }, 5000);
}

function second() {
  console.log("Second");
}
first();
second();

function someFuncWAithCallback(param1, callbackFunction) {
  console.log(`Here is my param: ${param1}`);
  callbackFunction();
}
someFuncWAithCallback("parammm", function () {
  console.log("something");
});
