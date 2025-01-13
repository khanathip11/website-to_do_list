// // การกำหนด typeof ให้ Paramitor
// function typeOf(text) {
//     if(typeof text === "string") {
//         console.log(text.toUpperCase());
//     } else {
//         console.error("Paramitor must be String!");
//     };
// };
// typeOf('text');
// // typeOf(15);

// // function  expresstion การใช้ชื่อตัวแปรแทน function
// const epresstion_1 = function() {
//     return "Function Expresstion 1";
// };
// console.log(epresstion_1());
// const epresstion_2 = function myFunction() {
//     return "Function Expresstion 2";
// };
// console.log(epresstion_2());

// // Spread Operator function ที่สามารถรับค่าอาร์กิวเมนต์ได้หลายค่า ใช้กรณีไม่ทราบจำนวนอาร์กิวเมนต์
// function spread(...text) {
//     return text;
// };
// console.log(spread("2" ,4 ,"6" ,8 ,"10"));

// // rest Operator function ที่สามารถรับค่าอาร์กิวเมนต์ได้หลายค่า แต่เก็บค่าต่างๆเป็น Array
// function rest(...param) {
//     console.log(Array.isArray(param));
//     console.log(Array(param));
//     console.log(param)
// };
// rest('Rest' ,"function");
// const rest_1 = (a ,b ,...c) => {
//     console.log(a ,b)
//     for(let item of c) {
//         console.log(item);
//     };
// };
// console.log(rest_1(1 ,2 ,3 ,4 ,5));

const datas = [];
const btn = document.querySelector(".btnAdd");
btn.addEventListener("click", onClick);

document.addEventListener("DOMContentLoaded", () => {
  const storedArray = JSON.parse(localStorage.getItem("datas"));

  if (storedArray) {
    storedArray.forEach((task) => array.push(task));
    updateElement();
    updateStatus();
  }
});

const saveArray = () => {
  localStorage.setItem("datas", JSON.stringify(datas));
};

function onClick(event) {
  event.preventDefault();
  addTask();
}

function addTask() {
  const inputElement = document.querySelector(".input");
  const text = inputElement.value.trim();
  datas.push({ text: text, complete: false });
  inputElement.value = "";
  updateTagLi();
}

function updateTagLi() {
  const ulElement = document.querySelector(".ul");
  ulElement.innerHTML = "";
  datas.forEach((task, index) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
            <div class="todo_input_section task ${
              task.complete ? "complete" : ""
            }">
                <input type="checkbox" class="checkbox" ${
                  task.complete ? "checked" : ""
                }>
                <span class="checkText">${task.text}</span>
            </div>
            <div class="todo_img_section">
                <span class="editTodolist">
                    <img src="../image/pen-to-square-regular.svg" onClick="editTask(${index})">
                </span>
                <span class="deleteTodolist">
                    <img src="../image/delete-left-solid.svg" alt="" onClick="deleteTask(${index})">
                </span>
            </div>
        `;
    liElement.addEventListener("change", () => toggleInputChecked(index));
    ulElement.append(liElement);
  });
}

const toggleInputChecked = (index) => {
  datas[index].complete = !datas[index].complete;
  updateTagLi();
};

function editTask(index) {
  const inputElement = document.querySelector(".input");
  inputElement.value = datas[index].text;
  datas.splice(index, 1);
  updateTagLi();
}

function deleteTask(index) {
  datas.splice(index, 1);
  updateTagLi();
}

// --------------------------------------
// ค่าธรรมเนียม 50 บาท
// 1-10 หน่วย อัตราหน่วยละ 5 บาท
// 11-20 หน่วย อัตราหน่วยละ 10 บาท
// 21-30 หน่วย อัตราหน่วยละ 30 บาท
// 31 หน่วยขึ ้นไป อัตราหน่วยละ 50 บาท

const btnElem = document.querySelector(".cal");
btnElem.addEventListener("click", onClick);

function onClick() {
  const inputElem = document.querySelector(".values");
  let money = Number(inputElem.value.trim());
  let result = document.querySelector(".total");
  const flee = 50;
  let total = 0;

  if (money <= 10) {
    total += money * 5;
  } else if (money <= 20) {
    total += 10 * 5 + (money - 10) * 10;
  } else if (money <= 30) {
    total += 10 * 5 + 10 * 10 + (money - 20) * 30;
  } else {
    total += 10 * 5 + 10 * 10 + 10 * 30 + (money - 45) * 50;
  }

  total += flee;
  return (result.innerHTML = `Total : ${total}`);
}

onClick();

const rex = document.querySelector(".rex");
rex.addEventListener("click", isPrime);

function isPrime(num) {
  if (num <= 1) return false; // จำนวนที่น้อยกว่าหรือเท่ากับ 1 ไม่ใช่จำนวนเฉพาะ
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // ถ้ามีตัวหารที่ลงตัว (นอกจาก 1 และตัวเอง) ไม่เป็นจำนวนเฉพาะ
  }
  return true; // ถ้าไม่มีตัวหารที่ลงตัว นั่นแสดงว่าเป็นจำนวนเฉพาะ
}

function displayPrimeAndNonPrime(input) {
  // ตรวจสอบว่า input เป็นตัวเลขหรือไม่ และต้องไม่เกิน 50,000
  if (
    isNaN(input) ||
    input < 1 ||
    input > 50000 ||
    !Number.isInteger(Number(input))
  ) {
    console.log("Error");
    return;
  }

  let number = parseInt(input);
  let primeNumbers = [];
  let nonPrimeNumbers = [];

  // ตรวจสอบจำนวนตั้งแต่ 1 ถึง number
  for (let i = 1; i <= number; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i); // ถ้าเป็นจำนวนเฉพาะ ให้เพิ่มลงใน array primeNumbers
    } else {
      nonPrimeNumbers.push(i); // ถ้าไม่ใช่จำนวนเฉพาะ ให้เพิ่มลงใน array nonPrimeNumbers
    }
  }

  // แสดงผล
  console.log("number:", nonPrimeNumbers.join(" "));
  console.log("prime number:", primeNumbers.join(" "));
}

// ทดสอบฟังก์ชัน
let input = "10"; // ตัวอย่าง input
displayPrimeAndNonPrime(input);

// ทดสอบกรณี Error
input = "10A00"; // ตัวอย่าง input ที่ไม่ใช่ตัวเลข
displayPrimeAndNonPrime(input);


