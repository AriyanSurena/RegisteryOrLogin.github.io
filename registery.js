const person = {  
    firstName: document.getElementById("userFirstname"),  
    lastName: document.getElementById("userLastname"),  
    emailAddress: document.getElementById("userEmail"),  
    emailPassword: document.getElementById("userPassword"),  
    passConfirm: document.getElementById("userPassConfirm"),  
    checkboxRules: document.getElementById("checkbox-rules"),  
};  

const errorMessages = document.getElementsByClassName("error_message");  

let isValid = true;  
const form = document.getElementById("form");  

function validateFirstName() {  
    const firstName = person.firstName.value;  
    if (firstName.length < 3) {  
        errorMessages[0].innerText = "طول نام باید بیش از 3 کاراکتر باشد.";  
        return false;  
    } else if (firstName.length > 36) {  
        errorMessages[0].innerText = "طول نام باید کمتر از 36 کاراکتر باشد.";  
        return false;  
    } else {  
        errorMessages[0].innerText = ""; // پاک کردن پیام خطا  
        return true;  
    }  
}  

function validateLastName() {  
    const lastName = person.lastName.value;  
    if (lastName.length < 3) {  
        errorMessages[1].innerText = "طول نام خانوادگی باید بیش از 3 کاراکتر باشد.";  
        return false;  
    } else if (lastName.length > 36) {  
        errorMessages[1].innerText = "طول نام خانوادگی باید کمتر از 36 کاراکتر باشد.";  
        return false;  
    } else {  
        errorMessages[1].innerText = ""; // پاک کردن پیام خطا  
        return true;  
    }  
}  

function validateEmail() {  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
    if (!emailPattern.test(person.emailAddress.value)) {  
        errorMessages[2].innerText = "لطفا یک آدرس ایمیل معتبر وارد کنید.";  
        return false;  
    } else {  
        errorMessages[2].innerText = ""; // پاک کردن پیام خطا  
        return true;  
    }  
}  

function validatePassword() {  
    const password = person.emailPassword.value;  
    const hasUpperCase = /[A-Z]/.test(password);  
    const hasLowerCase = /[a-z]/.test(password);  
    const hasNumber = /\d/.test(password);  
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);  

    if (password.length < 8) {  
        errorMessages[3].innerText = "طول پسورد باید بیشتر از 8 کاراکتر باشد.";  
        return false;  
    } else if (password.length > 36) {  
        errorMessages[3].innerText = "طول پسورد باید کمتر از 36 کاراکتر باشد.";  
        return false;  
    } else if (!hasUpperCase) {  
        errorMessages[3].innerText = "پسورد باید حداقل یک کاراکتر بزرگ داشته باشد.";  
        return false;  
    } else if (!hasLowerCase) {  
        errorMessages[3].innerText = "پسورد باید حداقل یک کاراکتر کوچک داشته باشد.";  
        return false;  
    } else if (!hasNumber) {  
        errorMessages[3].innerText = "پسورد باید حداقل یک عدد داشته باشد.";  
        return false;  
    } else if (!hasSymbol) {  
        errorMessages[3].innerText = "پسورد باید حداقل یک نماد داشته باشد.";  
        return false;  
    } else {  
        errorMessages[3].innerText = ""; // پاک کردن پیام خطا  
        return true;  
    }  
}  

function validatePasswordConfirmation() {  
    if (person.passConfirm.value !== person.emailPassword.value) {  
        errorMessages[4].innerText = "پسوردها مطابقت ندارند.";  
        return false;  
    } else {  
        errorMessages[4].innerText = ""; // پاک کردن پیام خطا  
        return true;  
    }  
}  

form.addEventListener("submit", (event) => {  
    isValid = validateFirstName() && validateLastName() && validateEmail() && validatePassword() && validatePasswordConfirmation();  
    if (!isValid) {  
        event.preventDefault(); // جلوگیری از ارسال فرم اگر اعتبارسنجی ناموفق بود  
    }
    else {
        event.preventDefault();
        console.log(person.firstName.value + " " + person.lastName.value + " " + person.emailAddress.value + " " + person.emailPassword.value)
    }
});  

// اضافه کردن لیسنر به عناوین ورودی برای اعتبارسنجی در لحظه  
person.firstName.addEventListener("blur", validateFirstName);  
person.lastName.addEventListener("blur", validateLastName);  
person.emailAddress.addEventListener("blur", validateEmail);  
person.emailPassword.addEventListener("blur", validatePassword);  
person.passConfirm.addEventListener("blur", validatePasswordConfirmation);  

