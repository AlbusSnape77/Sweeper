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
            row.push(cellEl);

            trEl.append(tdEl);
        }

        cells.push(row);
        tableEl.append(trEl);
    }

    console.log(cells);

    for (let cellNo of randomMineFieldNo(m, n, mineNums)) {
        let rowNo = Math.floor (cellNo / n);
        let colNo = cellNo % n;
        console.log(cellNo, rowNo , colNo);
        // cells[rowNo][colNo].classList.add("mine");
        // cells[rowNo][colNo].innerText = "*";

        let mineSpan = document.createElement("span");
        mineSpan.className = "mine";
        mineSpan.innerText = "*";
        console.log(rowNo, colNo);

        cells[rowNo][colNo].append(mineSpan);
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