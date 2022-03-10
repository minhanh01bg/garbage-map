function Validator(options) {
    // hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value);
        // console.log(errorMessage);
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.classList.add("active");
        } else {
            errorElement.innerText = "";
            inputElement.classList.remove("active");
        }
    }

    
    var formElement = document.querySelector(options.form);
    // console.log(formElement);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            // xử lí trường hợp blur khỏi input
            // console.log(inputElement);
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
            }
            // xử lí mỗi khi người dùng nhập vào input
            inputElement.oninput = function () {
                // console.log(inputElement.value);
                var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                errorElement.innerText = "";
                inputElement.classList.remove("active");
            }
        });
    }
}
// rules

Validator.isUsernameRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập tài khoản";
        }
    }
}
Validator.isPasswordRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập mật khẩu";
        }
    }
}