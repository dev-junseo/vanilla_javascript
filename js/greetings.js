//const : 바꿀 수 없는, 기본적으로 사용
//let : 바꿀 수 있는
//var 사용가능
//null : 값이 없는
//undefined : 값이 지정되지 않은
//object 설명이 필요한 정보가 담긴 리스트
//getElementById : Id를 통해서 array를 반환한다
//querySelector : .css selector를 통해 단 하나의 element를 가져온다

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(info){
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreeting();
}
function paintingGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const username = localStorage.getItem(USERNAME_KEY);
if(username === null){
    //input이 보이도록
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    //새로고침 해도 h1이 보이도록
    paintingGreeting();
}
