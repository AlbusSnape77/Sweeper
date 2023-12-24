let easyBtn = document.querySelector("#easy");
let mediumBtn = document.querySelector("#medium");
let hardBtn = document.querySelector("#hard");
let resetBtn = document.querySelector("#reset");
let messageEl = document.querySelector(".game-info > .message")
messageEl.innerText = "一款扫雷游戏❥(^_-)";
easyBtn.onclick = function() {
    let tableEl = document.querySelector("#mine-field");
    tableEl.innerHTML = "";
    
    let gameState = {
        m :8,
        n :8,
        mineNums: 10,
        remaining: null,
        timing: null,// 游戏开始与否
        cells: null,
        gameOver:false,
    }



    let cells = [];

    for (let i = 0; i < gameState.m; i++){
        let trEl = document.createElement("tr");
        let row = [];
        for (let j = 0; j < gameState.n; j++){
            let tdEl = document.createElement("td");

            let cellEl = document.createElement('div');
            cellEl.className = "cell unclear";

            cellEl.onclick = function() {
                if (gameState.gameOver) {
                    return;
                }
                
                handleClick(gameState, i, j);
            };  

            cellEl.oncontextmenu = function(event) {
                if (gameState.gameOver) {
                    return;
                }
                handleFlagging(gameState, i, j);

                
            };

            tdEl.append(cellEl);
            row.push({
                mined: false,
                el: cellEl,
            });

            trEl.append(tdEl);
        }

        cells.push(row);
        tableEl.append(trEl);
    }

    gameState.cells = cells;

    let mineFields = randomMineFieldNo(gameState.m, gameState.n, gameState.mineNums);
    for (let cellNo of mineFields ) {
        let rowNo = Math.floor (cellNo / gameState.n);
        let colNo = cellNo % gameState.n;
        console.log(cellNo, rowNo , colNo);

        let cell = cells[rowNo][colNo];
        cell.mined = true;

        let mineSpan = document.createElement("span");
        mineSpan.className = "mine";
        mineSpan.innerText = " 💣";

        cell.el.append(mineSpan);
    }
    checkAmbeientMinedCounts(gameState);
    let messageEl = document.querySelector(".game-info > .message")
    messageEl.innerText = "一款扫雷游戏❥(^_-)";

    

    messageEl.onclick = function () {
        let tableEl = document.querySelector("#mine-field");
        tableEl.innerHTML = "";
    

    }
    gameState.intervalID = setInterval(function() {
        gameState.timing += 1;
        timerEl.innerText = `${gameState.timing}`;

    }, 1000);
    clearInterval(gameState.intervalID);
}

mediumBtn.onclick = function() {
    let tableEl = document.querySelector("#mine-field");
    tableEl.innerHTML = "";
    let gameState = {
        m :15,
        n :15,
        mineNums: 35,
        remaining: null,
        timing: null,// 游戏开始与否
        cells: null,
        gameOver:false,
    }



    let cells = [];

    for (let i = 0; i < gameState.m; i++){
        let trEl = document.createElement("tr");
        let row = [];
        for (let j = 0; j < gameState.n; j++){
            let tdEl = document.createElement("td");

            let cellEl = document.createElement('div');
            cellEl.className = "cell unclear";

            cellEl.onclick = function() {
                if (gameState.gameOver) {
                    return;
                }
                
                handleClick(gameState, i, j);
            };  

            cellEl.oncontextmenu = function(event) {
                if (gameState.gameOver) {
                    return;
                }
                handleFlagging(gameState, i, j);

                
            };

            tdEl.append(cellEl);
            row.push({
                mined: false,
                el: cellEl,
            });

            trEl.append(tdEl);
        }

        cells.push(row);
        tableEl.append(trEl);
    }

    gameState.cells = cells;

    let mineFields = randomMineFieldNo(gameState.m, gameState.n, gameState.mineNums);
    for (let cellNo of mineFields ) {
        let rowNo = Math.floor (cellNo / gameState.n);
        let colNo = cellNo % gameState.n;
        console.log(cellNo, rowNo , colNo);

        let cell = cells[rowNo][colNo];
        cell.mined = true;

        let mineSpan = document.createElement("span");
        mineSpan.className = "mine";
        mineSpan.innerText = " 💣";

        cell.el.append(mineSpan);
    }
    checkAmbeientMinedCounts(gameState);
    let messageEl = document.querySelector(".game-info > .message")
    messageEl.innerText = "一款扫雷游戏❥(^_-)";

    messageEl.onclick = function () {
        let tableEl = document.querySelector("#mine-field");
        tableEl.innerHTML = "";
    }
    gameState.intervalID = setInterval(function() {
        gameState.timing += 1;
        timerEl.innerText = `${gameState.timing}`;

    }, 1000);
    clearInterval(gameState.intervalID);
}

hardBtn.onclick = function() {
    let tableEl = document.querySelector("#mine-field");
    tableEl.innerHTML = "";
    let gameState = {
        m :24,
        n :24,
        mineNums: 99,
        remaining: null,
        timing: null,// 游戏开始与否
        cells: null,
        gameOver:false,
    }



    let cells = [];

    for (let i = 0; i < gameState.m; i++){
        let trEl = document.createElement("tr");
        let row = [];
        for (let j = 0; j < gameState.n; j++){
            let tdEl = document.createElement("td");

            let cellEl = document.createElement('div');
            cellEl.className = "cell unclear";

            cellEl.onclick = function() {
                if (gameState.gameOver) {
                    return;
                }
                
                handleClick(gameState, i, j);
            };  

            cellEl.oncontextmenu = function(event) {
                if (gameState.gameOver) {
                    return;
                }
                handleFlagging(gameState, i, j);

                
            };

            tdEl.append(cellEl);
            row.push({
                mined: false,
                el: cellEl,
            });

            trEl.append(tdEl);
        }

        cells.push(row);
        tableEl.append(trEl);
    }

    gameState.cells = cells;

    let mineFields = randomMineFieldNo(gameState.m, gameState.n, gameState.mineNums);
    for (let cellNo of mineFields ) {
        let rowNo = Math.floor (cellNo / gameState.n);
        let colNo = cellNo % gameState.n;
        console.log(cellNo, rowNo , colNo);

        let cell = cells[rowNo][colNo];
        cell.mined = true;

        let mineSpan = document.createElement("span");
        mineSpan.className = "mine";
        mineSpan.innerText = " 💣";

        cell.el.append(mineSpan);
    }
    checkAmbeientMinedCounts(gameState);
    let messageEl = document.querySelector(".game-info > .message")
    messageEl.innerText = "一款扫雷游戏❥(^_-)";

    messageEl.onclick = function () {
        let tableEl = document.querySelector("#mine-field");
        tableEl.innerHTML = "";
    }
    gameState.intervalID = setInterval(function() {
        gameState.timing += 1;
        timerEl.innerText = `${gameState.timing}`;

    }, 1000);
    clearInterval(gameState.intervalID);
}

resetBtn.onclick = function() {
    let tableEl = document.querySelector("#mine-field");
    tableEl.innerHTML = "";
        gameState.intervalID = setInterval(function() {
        gameState.timing += 1;
        timerEl.innerText = `${gameState.timing}`;

    }, 1000);
    clearInterval(gameState.intervalID);
    
}








let directions = [
    [-1,-1],[0,-1],[1,-1],
    [-1,0],[1,0],
    [-1,1],[0,1],[1,1]
]

function checkAmbeientMinedCounts(gameState) {
    for (let rowIdx = 0; rowIdx < gameState.m; rowIdx++){
        for (let colIdx = 0; colIdx < gameState.n; colIdx++){
            let cell = gameState.cells[rowIdx][colIdx];
            if (cell.mined) {
                continue;
            }

            let mineCount = 0;
            for (let [drow,dcol] of directions) {
                let newRowIdx = rowIdx + drow, newColIdx = colIdx + dcol;
                if (newRowIdx < 0 || newRowIdx >= gameState.m || 
                    newColIdx < 0 || newColIdx >= gameState.n) {
                    continue;
                }
                if (gameState. cells[newRowIdx][newColIdx].mined) {
                    mineCount += 1;
                }                
            }

            if (mineCount > 0) {
                let countSpan = document.createElement("span");
                countSpan.className = "mine-count";
                countSpan.innerText = `${mineCount}`;
                
                countSpan.classList.add(`n${mineCount}`)

                cell.el.append(countSpan);

            } 
            cell.mineCount = mineCount;
        }
    }

}
function randomMineFieldNo(m, n, mineNums) {
    console.assert(mineNums <= m * n);

    let mines = [];
    for (let i = 0; i < mineNums; i++) {
        let fieldNo;
        while (true) {        
            fieldNo = Math.floor(Math.random() * m * n);
            if (!mines.includes(fieldNo)) {
                    break;
            }
        }
        mines.push(fieldNo);
    }

    return mines;
}

function handleClick(gameState,rowIdx,colIdx) {
    if (gameState.timing === null) {
        startGame(gameState);
       
    }
    

    let cell = gameState.cells[rowIdx][colIdx]
    if(cell.mined) {
        explode(gameState, rowIdx, colIdx);

    } else if (cell.mineCount == 0) {
        spreadSafeField(gameState, rowIdx, colIdx)

    } else if (cell.mineCount > 0) {
        let cell = gameState.cells[rowIdx][colIdx];
        if (!cell.spreaded){
            cell.spreaded = true;
            cell.el.classList.remove("unclear"); 
            cell.el.classList.add("spreaded");
        }else {
            let flagCount = 0;
            for (let [drow,dcol] of directions) {
                let newRowIdx = rowIdx + drow, newColIdx = colIdx + dcol;
                if (newRowIdx < 0 || newRowIdx >= gameState.m || 
                    newColIdx < 0 || newColIdx >= gameState.n) {
                    continue;
                }
                if (gameState. cells[newRowIdx][newColIdx].flag) {
                    flagCount += 1;
                }                
            }

            if (flagCount == cell.mineCount) {
                for (let [drow,dcol] of directions) {
                    let newRowIdx = rowIdx + drow, newColIdx = colIdx + dcol;
                    if (newRowIdx < 0 || newRowIdx >= gameState.m || 
                        newColIdx < 0 || newColIdx >= gameState.n) {
                        continue;
                    }
                    let cell = gameState.cells[newRowIdx][newColIdx];
                    if (cell.flag){
                        console.log(newRowIdx,newColIdx)
                        continue;

                    }

                    if (cell.spreaded){
                        continue;
                    }
                    if(cell.mined){
                        handleClick(gameState,newRowIdx,newColIdx)
                    }
                    if(cell.mineCount > 0){
                        handleClick(gameState,newRowIdx,newColIdx)
                    }
                    if(!cell.spreaded && cell.mineCount ==0){
                        spreadSafeField(gameState,newRowIdx,newColIdx)
                    }
                    if (!gameState.cells[newRowIdx][newColIdx].flag) {
                        handleClick(gameState, newRowIdx, newColIdx);
                    }                
                }
            }
        }
    }

        
    
    
    if (checkSuccess(gameState)) {
        gameSuccess(gameState)
    }
        // console.log(gameState.cells[rowIdx][colIdx]);
}

function startGame (gameState) {
    if (gameState.timing === null) {
        let messageEl = document.querySelector(".game-info > .message")
        messageEl.innerText = "你正在扫雷中0.0";

        gameState.remaining = gameState.mineNums; 
        let remainingEl =  document.querySelector(".game-info > .remaining");
        remainingEl.innerHTML = `<span>${gameState.remaining}</span>`;
    

        let timerEl =  document.querySelector(".game-info > .timer");
        let secondsEl = document.createElement("span");
        timerEl.append(secondsEl);
        gameState.timing = 0;
        timerEl.innerText = `${gameState.timing}`;
        // remainingEl.innerHTML = `<span>${gameState.remaining}</span>`;

        gameState.intervalID = setInterval(function() {
            gameState.timing += 1;
            timerEl.innerText = `${gameState.timing}`;

        }, 1000);
    }

}

function checkSuccess(gameState) {
    let unspreadCount = 0;
    for (let rowIdx = 0; rowIdx < gameState.m; rowIdx++) {
        for (let colIdx = 0; colIdx < gameState.n; colIdx++) {
            let cell = gameState.cells[rowIdx][colIdx];
            if (cell.flag) {
                continue;
            }
            if (!cell.spreaded) {
                unspreadCount += 1;
            }

        }
    
    }

    return gameState.remaining === unspreadCount; 

    
}

function explode(gameState, rowIdx, colIdx) {
    // let cell = gameState.cells[rowIdx][colIdx];
    // cell.exploded = true;
    // cell.el.classList.add("exploded");

    for (let rowIdx = 0; rowIdx < gameState.m; rowIdx++) {
        for (let colIdx = 0; colIdx < gameState.n; colIdx++) {
            let cell = gameState.cells[rowIdx][colIdx];
            if (cell.mined) {
                cell.exploded = true;
                cell.el.classList.add("exploded");
                cell.el.classList.remove("unclear");
            } else {
                cell.el.classList.add("exploded");
                cell.el.classList.add("spreaded");
                cell.el.classList.remove("unclear");
            }
        }
    }

    clearInterval(gameState.intervalID);

    let messageEl = document.querySelector(".game-info > .message")
    messageEl.innerText = "你被炸死啦！！";

    gameState.gameOver = true;
}

function gameSuccess(gameState) { 
    for (let rowIdx = 0; rowIdx < gameState.m; rowIdx++) {
        for (let colIdx = 0; colIdx < gameState.n; colIdx++) {
            let cell = gameState.cells[rowIdx][colIdx];
            if (cell.mined) {
                cell.exploded = true;
                cell.el.classList.add("success");
            } else {
                cell.el.classList.add("success");
                cell.el.classList.add("spreaded");
            }
        }
    }
    clearInterval(gameState.intervalID);
    
    let messageEl = document.querySelector(".game-info > .message")
    messageEl.innerText = "你通关啦！！";
    messageEl.classList.add('success');

    gameState.gameOver = true;


}

function handleFlagging(gameState, rowIdx, colIdx) {
    if (gameState.timing === null) {
        startGame(gameState);
       
    }

    let cell = gameState.cells[rowIdx][colIdx];
    if (cell.spreaded) {
        return;
    }

    console.log(rowIdx, colIdx, cell);
    setFlag(cell, !cell.flag);

    if (cell.flag) {
        gameState.remaining -= 1; 
    } else {
        gameState.remaining += 1; 
    }
    let remainingEl =  document.querySelector(".game-info > .remaining > span");
    remainingEl.innerText = `${gameState.remaining}`;

    if (checkSuccess(gameState)) {
        gameSuccess(gameState)
    }
}

function setFlag(cell, flag) {
    if (flag) {
        cell.flag = true;
        cell.el.innerHTML =`<span class="flag">🚩</span>`;
    } else {
        cell.flag = false;
        if (cell.mined) {
            cell.el.innerHTML =`<span class="mine"> 💣</span>`;
        } else if (cell.mineCount > 0) { 
            cell.el.innerHTML =`<span class="mine-count n${cell.mineCount}">${cell.mineCount}</span>`;
        } else {
            cell.el.innerHTML = "";
        }
    }
}

function spreadSafeField(gameState, rowIdx,colIdx) {
    let cell = gameState.cells[rowIdx][colIdx];
    if (!cell.spreaded) {
        cell.spreaded = true;
        cell.el.classList.remove("unclear");
        cell.el.classList.add("spreaded");

    }
    

    for (let [drow,dcol] of directions) {
            let newRowIdx = rowIdx + drow, newColIdx = colIdx + dcol;
            if (newRowIdx < 0 || newRowIdx >= gameState.m || 
                newColIdx < 0 || newColIdx >= gameState.n) {
                continue;
            }
        let cell = gameState.cells[newRowIdx][newColIdx];
        if (cell.spreaded) {
            continue;
        }
        if(!cell.spreaded && cell.mineCount == 0) {
            spreadSafeField(gameState, newRowIdx,newColIdx); 
        }

        cell.spreaded = true;
        cell.el.classList.remove("unclear");
        cell.el.classList.add("spreaded");

        if  (cell.flag) {
            console.log("rc:", rowIdx, colIdx);
            setFlag(cell, false);
        }


        
    
    }
 
}


document.oncontextmenu = function () { return false; }