window.addEventListener('load', ()=>{
// function getData() {
    $.ajax({
        url: "/php/getDataVEHICLE.php",
        method: "POST",
        success: function (response) {
            var records = response.split(["\n"]);
            // add header 
            
            // add rows
            var table_body = `
            <div class="table__body" id="table__body"></div>
            `;
            var table_row = `
            <div class="table_row" id="table_row" onclick="ClickedText()"></div>
            `;
            var table_cell = `<div class="table_cell" id="table_cell"></div>`;
            var buttonEdit = `<button id="button-edit" onclick="openEditModal()">edit</button>`;
            // var buttonEdit = `
            // <div class="table_cell">
            //     <div class="btn" onclick="openEditModal()"><span>edit</span></div>
            // </div>`;
            document.getElementById("table").innerHTML += table_body;
            
            for (var i = 0; i < records.length; i++){
                if (records[i] === "") {
                    break;
                }

                var rows = records[i].split(["\t"]);
                var table_lastRow = document.getElementById("table__body").lastElementChild;

                if (table_lastRow == null) {
                    document.getElementById("table__body").innerHTML = table_row;
                    let row = document.getElementById("table__body").lastElementChild;
                    for (var j = 0; j < rows.length; j++) {
                        if (row.lastElementChild == null) {
                            row.innerHTML = table_cell;
                            row.lastElementChild.innerText = rows[j];
                        }
                        else {
                            row.innerHTML += table_cell;
                            row.lastElementChild.innerText = rows[j];
                        }
                    }
                    row.innerHTML += buttonEdit;
                }
                else {
                    document.getElementById("table__body").innerHTML += table_row;
                    let row = document.getElementById("table__body").lastElementChild;
                    for (var j = 0; j < rows.length; j++) {
                        if (row.lastElementChild == null) {
                            row.innerHTML = table_cell;
                            row.lastElementChild.innerText = rows[j];
                        }
                        else {
                            row.innerHTML += table_cell;
                            row.lastElementChild.innerText = rows[j];
                        }
                    }
                    row.innerHTML += buttonEdit;
                }
                
            }
        }
    })
    return;
// }
})
// function ClickedText() {
//     // let win = window.open("new.html");
//     // win.focus();
//     // handle click data 
//     var content = event.target.parentElement;
    
//     // sessionStorage.setItem("Vehicle", content);
//     // localStorage.setItem("Vehicle",content);
//     console.log(content);
//     // return;
// }