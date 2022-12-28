import consoleLogText from "./some";

//import $ from 'jquery';



(function () {

  //$('.title').html('gh111h');

  const buttonStart = document.querySelector(".button-start");
  const buttonStop = document.querySelector(".button-stop");
  const tableCellItemsArray = [];

  const newTable = document.createElement("main");
  newTable.className = "table";

  for (var i = 1; i < 16; i++) {
    let newCell = document.createElement("div");
    newCell.className = "table-cell";
    newCell.innerHTML = i;
    tableCellItemsArray.push(newCell);
    newTable.append(newCell);
  }

  let newCellBlank = document.createElement("div");
  newCellBlank.className = "table-cell blank";
  tableCellItemsArray.push(newCellBlank);

  console.log(tableCellItemsArray);

  newTable.append(newCellBlank);

  let numberOfBlankCell;
  let numberOfSelectedCell;
  const cellObject = new Object();

  const footerItem = document.querySelector(".footer");
  document.body.insertBefore(newTable, footerItem);

  window.addEventListener("load", () => {
    startGame();
  });

  buttonStart.addEventListener("click", startGame);

  var counter = 0;
  document.querySelector(".moves").textContent = counter;

  let min = 0;
  let sec;

  function startGame() {
    shuffleCells();
    counter = 0;
    initTime();
    const cellArray = [];
    for (let i = 0; i < tableCellItemsArray.length; i++) {
      tableCellItemsArray[i].style.order = i;
      if (tableCellItemsArray[i].classList.contains("blank")) {
        numberOfBlankCell = i;
      }
      cellArray.push(tableCellItemsArray[i].outerHTML);
      cellObject[i] = tableCellItemsArray[i].outerHTML;
    }

    newTable.onclick = function (event) {
      let target = event.target;
      numberOfSelectedCell = Object.values(cellObject).indexOf(
        target.outerHTML
      );

      //console.log(tableCellItemsArray[numberOfBlankCell]);
      //console.log(tableCellItemsArray[numberOfSelectedCell]);

      if (target.tagName !== "DIV") return;
      if (target.tagName === "DIV" && target.className !== "table-cell blank") {
        counter += 1;
        document.querySelector(".moves").textContent = counter;
      }

      tableCellItemsArray[numberOfBlankCell].style.order = numberOfSelectedCell;
      tableCellItemsArray[numberOfSelectedCell].style.order = numberOfBlankCell;

      console.log(tableCellItemsArray[numberOfBlankCell]);
      console.log(tableCellItemsArray[numberOfSelectedCell]);
    };
  }

  function shuffleCells() {
    for (let i = tableCellItemsArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [tableCellItemsArray[i], tableCellItemsArray[j]] = [
        tableCellItemsArray[j],
        tableCellItemsArray[i],
      ];
    }
  }

  function moveCell() {}

  let mySetInterval;

  function initTime() {
    sec = 0;
    mySetInterval = setInterval(stopwatch, 1000);
    console.log(mySetInterval);
  }

  function stopwatch() {
    sec++;
    if (sec >= 60) {
      min++;
      sec = sec - 60;
    }
    if (sec < 10) {
      if (min < 10) {
        document.querySelector(".time").innerHTML = "0" + min + ":0" + sec;
      } else {
        document.querySelector(".time").innerHTML = min + ":0" + sec;
      }
    } else {
      if (min < 10) {
        document.querySelector(".time").innerHTML = "0" + min + ":" + sec;
      } else {
        document.querySelector(".time").innerHTML = min + ":" + sec;
      }
    }
  }

  buttonStop.addEventListener("click", () => {
    clearInterval(1);
  });


  consoleLogText()
  
})();
