let inputBox = document.querySelector("input");
let addButton = document.querySelector(".add");
let noItemsDiv = document.querySelector(".no-item");
let itemsUl = document.querySelector("ul");
let itemsCounter = document.querySelector(".items-counter");
let removeItemBtn = document.querySelector(".cross");
let clearBtn = document.querySelector(".clear");
let completeBtn = document.querySelectorAll(".task .rad");
let task = document.querySelector(".todo");
let activeBtn = document.querySelector(".active-tasks");
let completedBtn = document.querySelector(".completed");
let allBtn = document.querySelector(".all");

//check items
checkItems();
function checkItems() {
  if (itemsUl.children.length == 0) {
    noItemsDiv.classList.add("active");
  } else {
    noItemsDiv.classList.remove("active");
  }
}
addButton.onclick = function () {
  //get input todo and add it to list
  getTodo();
  //update  items-counter
  updateCounter();
  //check items
  checkItems();
};

//get input todo
let inputValue;
function getTodo() {
  if (inputBox.value == "") {
  } else {
    let li = document.createElement("li");
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    let radSpan = document.createElement("span");
    radSpan.className = "rad";
    radSpan.classList.add("task-rad");
    let todoSpan = document.createElement("span");
    todoSpan.className = "todo";
    todoSpan.innerHTML = inputBox.value;
    //
    taskDiv.appendChild(radSpan);
    taskDiv.appendChild(todoSpan);
    //
    let crossImg = document.createElement("img");
    crossImg.className = "cross";
    crossImg.src = "images/icon-cross.svg";
    //
    li.appendChild(taskDiv);
    li.appendChild(crossImg);
    //
    itemsUl.appendChild(li);
    inputBox.value = "";
  }
}
updateCounter();

function updateCounter() {
  let itemsLis = document.querySelectorAll("ul li");
  let doneItems = document.querySelectorAll(".done");
  itemsCounter.innerHTML = itemsLis.length - doneItems.length;
}

//crossbtn onclick
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("cross")) {
    console.log(e.target);
    e.target.parentElement.remove();
    updateCounter();
    //check items
    checkItems();
  }
});

//clear all cmopleted item
clearBtn.onclick = function () {
  let completedTasks = document.querySelectorAll(".done");
  completedTasks.forEach((ele) => {
    ele.remove();
    checkItems();
  });
};

//done the task
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("task-rad")) {
    e.target.classList.toggle("check");
    e.target.nextElementSibling.classList.toggle("completed");
    e.target.parentElement.parentElement.classList.toggle("done");
    updateCounter();
  }
});

//completedBtn onclick
completedBtn.onclick = function () {
  let tasks = document.querySelectorAll("ul li");
  tasks.forEach((ele) => {
    !ele.classList.contains("done")
      ? (ele.style.display = "none")
      : (ele.style.display = "flex");
  });
};

//activeBtn onclick
activeBtn.onclick = function () {
  let tasks = document.querySelectorAll("ul li");
  tasks.forEach((ele) => {
    ele.classList.contains("done")
      ? (ele.style.display = "none")
      : (ele.style.display = "flex");
  });
};

//activeBtn onclick
allBtn.onclick = function () {
  let tasks = document.querySelectorAll("ul li");
  tasks.forEach((ele) => {
    ele.style.display = "flex";
  });
};
