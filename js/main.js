(()=>{

  const textArea = document.querySelector(".testCon .textArea"),
        contentPara = document.querySelector(".paraContainer p").innerHTML,
        resetButton = document.querySelector(".twoBox button"),
        clockSet = document.querySelector(".twoBox div");


  var interval, flag = false;
  var clockHands = [0,0,0,0];

  function clockStart()
  {
      let enteredText = textArea.value;
      if(enteredText.length === 0 && flag==false)
      {
        flag = true;
        interval = setInterval(runClock, 10);
      }
  }

  function spellCheck()
  {
      let enteredText = textArea.value;
      let defaultText = contentPara.substring(0, enteredText.length);

      if(enteredText == contentPara)
      {
        clearInterval(interval);
        textArea.style.borderColor = "Green";
      }
      else if(enteredText == defaultText)
      {
        textArea.style.borderColor = "lightblue";
      }
      else
      {
        textArea.style.borderColor = "red";
      }
  }

  function clockZero(time)
  {
    if(time <=9)
    {
      time = "0" + time;
    }
    return time;
  }

  function runClock()
  {
    let clock = clockZero(clockHands[0]) + ":" + clockZero(clockHands[1]) + ":" + clockZero(clockHands[2]);
    clockSet.innerHTML = clock;
    clockHands[3]++;

    clockHands[0] = Math.floor(clockHands[3]/100/60);
    clockHands[1] = Math.floor((clockHands[3]/100) - (clockHands[0]*60));
    clockHands[2] = Math.floor(clockHands[3] - (clockHands[1]*100) - (clockHands[0]*6000));
  }

  function resetTestor()
  {
    textArea.value = "";
    flag = false;
    clockHands = [0,0,0,0];
    clockSet.innerHTML = "00:00:00";
    clearInterval(interval);
    textArea.style.borderColor = "#00B3B3";

    resetButton.classList.add("buttonStyle");
  }

  function removeButtonStyle()
  {
    resetButton.classList.remove("buttonStyle");
  }

  textArea.addEventListener("keypress", clockStart);
  textArea.addEventListener("keyup", spellCheck);
  resetButton.addEventListener("mousedown", resetTestor);
  resetButton.addEventListener("mouseup", removeButtonStyle);

})();
