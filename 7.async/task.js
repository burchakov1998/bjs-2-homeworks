
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, CBfunc) {
    //      console.log(arguments);
    if ((arguments.length != 2) || (time === null) || (CBfunc === null)) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    else {
      let ind;
      //  console.log(this.alarmCollection);
      if (this.alarmCollection.length < 0) {
        ind = this.alarmCollection.some((item) => item.time === time)

        this.alarmCollection.filter((call) => call.time === time);
      }
      if (ind) {
        console.warn('Уже присутствует звонок на это же время');
      }
      else {
        this.alarmCollection.push({ callback: CBfunc, time: time, canCall: true });
      }
    }

  }

  removeClock(time) {

    const beginLenght = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);

    return beginLenght;
  }

  getCurrentFormattedTime() {
    let date = new Date();
    return date.toLocaleTimeString().substr(0, 5);
  }

  start() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((item) => {
          if ((item.time === this.getCurrentFormattedTime()) && item.canCall) {
            item.canCall = false;
            //                console.log(item);
            item.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => {
      item.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
