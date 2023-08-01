//先获取按钮和待操作的标题元素
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//setUserName(); 获取用户输入的名字，并且对 myHeading 进行文字上的操作
function setUserName() {
  let UserName = prompt("input your username plz");
  if (!UserName) {
    setUserName();
  } else {
    localStorage.setItem("name", UserName);
    myHeading.textContent = "Mozilla is coolest " + UserName;
  }
}

//判断一下localStorage 中是否存在了 UserName，如果有就获取出来，然后对 myHeading 进行操作，如果没有就调用 setUserName 方法对 myHeading 进行操作
if (!localStorage.getItem("name")) {
  //没有的情况
  setUserName(); //调用 setUserName()
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is coolest " + storedName;
}

//给 myButton 按钮添加监听事件
myButton.onclick = function () {
  setUserName();
};
