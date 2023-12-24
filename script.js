function renderMineField(){
    let tableEl = document.querySelector("#mine-field");
    // let m = 15 ;
    // let n = 15 ;
    // let mineNums = 40;

    let gameState = {
        m :15,
        n :15,
        mineCount: 40,
        remaining: null,
        timing: null,// 游戏开始与否
        cells: null,
    }



    let cells = [];

    for (let i = 0; i < gameState.m; i++){
        let trEl = document.createElement("tr");
        let row = [];
        for (let j = 0; j < gameState.n; j++){
            let tdEl = document.createElement("td");

            let cellEl = document.createElement('div');
            cellEl.className = "cell";

            cellEl.onclick = function() {
                
                handleClick(gameState, i, j);
            };  

            cellEl.oncontextmenu = function(event) {
                // console.log("contextmenu",i,j);
                handleFlagging(gameState, i, j);
                // event.stopPropagation();
                // event.preventDefault();
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

    // console.log(cells);
    let mineFields = [79, 165, 19, 190, 170, 216, 156, 138, 21, 141, 151, 105, 168, 119, 111, 160, 144, 189, 80, 134, 78, 224, 38, 90, 53, 27, 95, 214, 59, 92, 125, 85, 179, 37, 180, 107, 74, 75, 122, 102];
    // console.log(mineFields);
    for (let cellNo of mineFields ) {
        let rowNo = Math.floor (cellNo / gameState.n);
        let colNo = cellNo % gameState.n;
        console.log(cellNo, rowNo , colNo);

        let cell = cells[rowNo][colNo];
        cell.mined = true;

        let mineSpan = document.createElement("span");
        mineSpan.className = "mine";
        mineSpan.innerText = "*";

        cell.el.append(mineSpan);
    }
    checkAmbeientMinedCounts(gameState);
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
    let cell = gameState.cells[rowIdx][colIdx]
    if(cell.mined) {

    } else if (cell.mineCount == 0) {
        spreadSafeField(gameState, rowIdx, colIdx)

    } else if (cell.mineCount > 0) {

    }
    // console.log(gameState.cells[rowIdx][colIdx]);
}

function handleFlagging(gameState, rowIdx, colIdx) {
    let cell = gameState.cells[rowIdx][colIdx];
    if (cell.spreaded) {
        return;
    }

    console.log(rowIdx, colIdx, cell);
    setFlag(cell, !cell.flag);
}

function setFlag(cell, flag) {
    if (flag) {
        cell.flag = true;
        cell.el.innerHTML =`<span class="flag">!</span>`;
    } else {
        cell.flag = false;
        if (cell.mined) {
            cell.el.innerHTML =`<span class="mine">*</span>`;
        } else if (cell.mineCount > 0) { 
            cell.el.innerHTML =`<span class="mine-count n${cell.mineCount}">${cell.mineCount}</span>`;
        } else {
            cell.el.innerHTML = "";
        }
    }
}

function spreadSafeField(gameState, rowIdx,colIdx) {
    let cell = gameState.cells[rowIdx][colIdx];
    if (!cell.spreaded){
        cell.spreaded = true;
        cell.el.classList.add("spreaded");
        if  (cell.flag) {
            setFlag(cell, false);
        }
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
        if(!cell.spreaded && cell.mineCount == 0){
            spreadSafeField(gameState, newRowIdx,newColIdx); 
        }

        cell.spreaded = true;
        cell.el.classList.add("spreaded");

        if  (cell.flag) {
            console.log("rc:", rowIdx, colIdx);
            setFlag(cell, false);
        }


        
    }
}


renderMineField();
