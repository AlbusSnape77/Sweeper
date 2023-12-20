function renderMineField(){
    let tableEl = document.querySelector("#mine-field");
    let m = 15 ;
    let n = 15 ;
    for (let i = 0; i < m; i++){
        let trEl = document.createElement("tr");
        for (let j = 0; j < n; j++){
            let tdEl = document.createElement("td");

            let cellEl = document.createElement('div');
            cellEl.className = "cell";

            tdEl.append(cellEl);

            trEl.append(tdEl);
        }

        tableEl.append(trEl);
    }
}

renderMineField();