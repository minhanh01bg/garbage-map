function clickAdmin() {
    var username= $("#username").val().trim();
    var password = $("#password").val().trim();
    if (username === "") {
        document.getElementById("username").focus();
        return;
    }
    else if(password === "") {
        document.getElementById("password").focus();
        return;
    }
    console.log("true");
    $.ajax({
        url: 'C:/Users/vuanh/OneDrive/Desktop/leaflet-map/map/garbage/app/get.php',
        success: function (response) {
            console.log(response);
            var records = response.split("\n");
            console.log(records);
            var x = false;
            for (var i = 0; i < records.length; i++) {
                var user = records[i].split(" ")[0];
                var pass = records[i].split(" ")[1];
                if (user === username && pass === password) {
                    console.log("true");
                    let win = window.open("garbage/index.html","_blank");
                    win.focus();
                    x = true;
                }
                if (records[i] === "") {
                    break;
                }
            }
            if(x===false)
                alert("sai mat khau");
        }
    })
}


// $("#username").click(function () {
//     // $("#username").css({
//     //     border: '1px solid #1877f2'
//     // });
//     var user = document.getElementById("username");
//     user.classList.toggle("active");
// });
