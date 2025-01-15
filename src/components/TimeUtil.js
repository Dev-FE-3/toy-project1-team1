export default class TimeUtil {
  constructor() {
    this.currentTime = this.getCurrentTime();
    this.currentDate = this.getCurrentDate();
    this.updateTime();
  }

  updateTime () {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
    setInterval(() => {
      this.putTime();
    }, 1000);
  }

  putTime() {
    this.getCurrentTime();
    document.querySelector(".hour-min").textContent = this.currentTime;
    document.querySelector("#date").textContent = this.currentDate;
  }

  getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const dayNames = ["월", "화", "수", "목", "금", "토", "일"];
    const day = dayNames[today.getDay()];

    return `${year}년 ${month}월 ${date}일 ${day}요일`;
  }
  getCurrentTime() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    // const sec = now.getSeconds().toString().padStart(2, "0");
    // return `${hour} : ${minutes} : ${sec}`;
    return `${hour} : ${minutes}`;
  }
}
