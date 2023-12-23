function renderMineField(){
    let tableEl = document.querySelector("#mine-field");
    let m = 15 ;
    let n = 15 ;
    let mineNums = 40;

    let cells = [];

    for (let i = 0; i < m; i++){
        let trEl = document.createElement("tr");
        let row = [];
        for (let j = 0; j < n; j++){
            let tdEl = document.createElement("td");

            let cellEl = document.createElement('div');
            cellEl.className = "cell";

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

    console.log(cells);
    let mineFields = [79, 165, 19, 190, 170, 216, 156, 138, 21, 141, 151, 105, 168, 119, 111, 160, 144, 189, 80, 134, 78, 224, 38, 90, 53, 27, 95, 214, 59, 92, 125, 85, 179, 37, 180, 107, 74, 75, 122, 102];
    console.log(mineFields);
    for (let cellNo of mineFields ) {
        let rowNo = Math.floor (cellNo / n);
        let colNo = cellNo % n;
        console.log(cellNo, rowNo , colNo);

        let cell = cells[rowNo][colNo];
        cell.mined = true;

        let mineSpan = document.createElement("span");
        mineSpan.className = "mine";
        mineSpan.innerText = "*";

        cell.el.append(mineSpan);
    }
    checkAmbeientMinedCounts(cells, m, n);
}

let directions = [
    [-1,-1],[0,-1],[1,-1],
    [-1,0],[1,0],
    [-1,1],[0,1],[1,1]
]

function checkAmbeientMinedCounts(cells, m, n) {
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            let cell = cells[i][j];
            if (cell.mined) {
                continue;
            }

            let minedCount = 0;
            for (let [dx,dy] of directions) {
                let newRowIdx = i + dx, newColIdx = j + dy;
                if (newRowIdx < 0 || newRowIdx >= m || 
                    newColIdx < 0 || newColIdx >= n) {
                    continue;
                }
                if (cells[newRowIdx][newColIdx].mined) {
                    minedCount += 1;
                }                
            }

            if (minedCount > 0) {
                let countSpan = document.createElement("span");
                countSpan.className = "mine-count";
                countSpan.innerText = `${minedCount}`;
                
                countSpan.classList.add(`n${minedCount}`);

                cell.el.append(countSpan);

            } 
             console.log(i, j, minedCount);
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


renderMineField();