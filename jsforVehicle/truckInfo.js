function closeEditModal() {
    document.querySelector('.edit-modal-container').style.display = 'none';
}
function deleteRow() { }
function addRow() {}
 
function openAddNewModal() {
    document.querySelector('.add-modal-container').style.display = 'block';
}
function closeAddNewModal() {
    document.querySelector('.add-modal-container').style.display = 'none';
}


var t;
var elementInfo;
function openEditModal() {
    t = event.target.parentElement.firstChild;
    t = t.textContent;
    console.log(t);
    document.querySelector('.edit-modal-container').style.display = 'block';
}

// save row
function saveDataVH() {
    // console.log(t);
    $.ajax({
        url: '/php/saveUpdateVehicle.php',
        method: 'POST',
        data: {
            id: t,
            engineId: $("#engineId").val(),
            engineType: $("#engineType").val(),
            model:$("#modelInput").val(),
            registrationYear: $("#registrationYear").val(),
            startingDate: $("#startingDate").val(),
            address: $("#address").val(),
            status: $("#statusInput").val(),
        },
        success: function (response) {
            console.log(response);
        }
    })
    location.reload();
}
// delete row
function deleteRow() {
    console.log(t);
    $.ajax({
        url: '/php/deleteVehicle.php',
        method: 'POST',
        data: {
            id: t
        },
        success: function (response) {
            console.log(response);
        }
    });
    location.reload();
}
// add rows and save
function AddDataVehicle() {
    $.ajax({
        url: '/php/addVehicle.php',
        method: 'POST',
        data: {
            licensePlate: $("#licensePlate").val(),
            engineIdInput: $("#engineIdInput").val(),
            engineTypeInput: $("#engineTypeInput").val(),
            modelInput: $("#modelInput").val(),
            registrationYearInput: $("#registrationYearInput").val(),
            startingDateInput: $("#startingDateInput").val(),
            addressInput: $("#addressInput").val(),
            statusInput: $("#statusInput").val()
        },
        success: function (response) {
            console.log(response);
        }

    })
}