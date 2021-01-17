const clockContainer = document.querySelector(".js-clock"),//html 에 접근 -> js-clock 클래스에 접근 아래도 같음. 
  clockTitle = clockContainer.querySelector("span");
const alert = document.querySelector(".alert")

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  //const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;// 시간을 04:21:05초 이런식으로 보여주기 위해 삼항연산자를 사용함
  //삼항 연산자란 앞에 두값을 비교한후 맞으면 : 앞에 값을 틀리면 뒤의 값을 넣어주는 식임;
}

function alertTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  alert.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
  alertTime();
  setInterval(getTime, 1000);//뒤에 인자는 리로드 시간 1은 1ms를 뜻함 fuction init는 기본 함수로 정의함;
}

init();