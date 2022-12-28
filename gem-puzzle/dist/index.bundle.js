/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/some.js":
/*!*********************!*\
  !*** ./src/some.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function consoleLogText() {
  console.log('Export/Import');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consoleLogText);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _some__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./some */ "./src/some.js");


//import $ from 'jquery';

(function () {
  //$('.title').html('gh111h');

  var buttonStart = document.querySelector(".button-start");
  var buttonStop = document.querySelector(".button-stop");
  var tableCellItemsArray = [];
  var newTable = document.createElement("main");
  newTable.className = "table";
  for (var i = 1; i < 16; i++) {
    var newCell = document.createElement("div");
    newCell.className = "table-cell";
    newCell.innerHTML = i;
    tableCellItemsArray.push(newCell);
    newTable.append(newCell);
  }
  var newCellBlank = document.createElement("div");
  newCellBlank.className = "table-cell blank";
  tableCellItemsArray.push(newCellBlank);
  console.log(tableCellItemsArray);
  newTable.append(newCellBlank);
  var numberOfBlankCell;
  var numberOfSelectedCell;
  var cellObject = new Object();
  var footerItem = document.querySelector(".footer");
  document.body.insertBefore(newTable, footerItem);
  window.addEventListener("load", function () {
    startGame();
  });
  buttonStart.addEventListener("click", startGame);
  var counter = 0;
  document.querySelector(".moves").textContent = counter;
  var min = 0;
  var sec;
  function startGame() {
    shuffleCells();
    counter = 0;
    initTime();
    var cellArray = [];
    for (var _i = 0; _i < tableCellItemsArray.length; _i++) {
      tableCellItemsArray[_i].style.order = _i;
      if (tableCellItemsArray[_i].classList.contains("blank")) {
        numberOfBlankCell = _i;
      }
      cellArray.push(tableCellItemsArray[_i].outerHTML);
      cellObject[_i] = tableCellItemsArray[_i].outerHTML;
    }
    newTable.onclick = function (event) {
      var target = event.target;
      numberOfSelectedCell = Object.values(cellObject).indexOf(target.outerHTML);

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
    for (var _i2 = tableCellItemsArray.length - 1; _i2 > 0; _i2--) {
      var j = Math.floor(Math.random() * (_i2 + 1));
      var _ref = [tableCellItemsArray[j], tableCellItemsArray[_i2]];
      tableCellItemsArray[_i2] = _ref[0];
      tableCellItemsArray[j] = _ref[1];
    }
  }
  function moveCell() {}
  var mySetInterval;
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
  buttonStop.addEventListener("click", function () {
    clearInterval(1);
  });
  (0,_some__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map