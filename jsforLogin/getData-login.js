$("#login").click(function () {
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
        url: 'app/get.php',
        method: 'POST',
        data: {
            username: $("#username").val().trim(),
            password: $("#password").val().trim()
        },
        success: function (response) {
            console.log(response);
            if (response === "true") {
                console.log("true");
                let win = window.open("dashBoard.html", "_blank");
                win.focus();
            }
            else {
                alert("sai mat khau");
            }
        }
    })
})
    
