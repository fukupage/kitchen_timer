'use strict';

/*
  #timer:時間の表示部分
  #stop:ストップボタン
*/
const addZero = function (value) {
  if (value < 10) {
    value = '0' + value;
  }
  return value;
}

let start;
let timer_id;
const button = document.getElementById('stop').addEventListener('click',
  function() {
    if(this.innerHTML === 'START!'){

      start = new Date();
      timer_id = setInterval(goTimer, 10);
      this.innerHTML = 'STOP!';
      this.classList.remove('btn_start');
      this.classList.add('btn_stop');
    } else {
      clearInterval(timer_id);
      this.innerHTML = 'START!';
      this.classList.remove('btn_stop');
      this.classList.add('btn_start');
    }
  });
  
  let goTimer = function() {
    let now = new Date();
    let mil = now.getTime() - start.getTime();
    let sec = Math.floor(mil / 1000);
    let min = Math.floor(sec / 60);
    sec = addZero(sec - min * 60);
    min = addZero(min);

    document.getElementById('timer').innerHTML = `${min}:${sec}`;
  } 