// 預設食物清單
let foodList = ["西式", "火鍋", "日式", "韓式", "拉麵"];

// 獲取 DOM 元素
const foodListElement = document.getElementById("food-list");
const resultElement = document.getElementById("result");
const drawButton = document.getElementById("draw-button");
const addButton = document.getElementById("add-button");
const newFoodInput = document.getElementById("new-food");

// 隨機抽籤功能
drawButton.addEventListener("click", () => {
  if (foodList.length === 0) {
    resultElement.textContent = "清單中沒有食物！";
    return;
  }
  const randomIndex = Math.floor(Math.random() * foodList.length);
  const randomFood = foodList[randomIndex];
  resultElement.textContent = `今天吃：${randomFood}`; // 顯示抽籤結果
});

// 新增食物功能
addButton.addEventListener("click", () => {
  const newFood = newFoodInput.value.trim();
  if (newFood) {
    foodList.push(newFood);
    const newLi = document.createElement("li");
    newLi.textContent = newFood;
    foodListElement.appendChild(newLi);
    newFoodInput.value = ""; // 清空輸入框
  } else {
    alert("請輸入有效的食物選項！");
  }
});
