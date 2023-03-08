const fullNameElement = document.getElementById('fullName')
const femaleBtnElement = document.getElementById('femaleBtn')
const maleBtnElement = document.getElementById('maleBtn')
const unknownBtnElement = document.getElementById('unknownBtn')
const passwordElement = document.getElementById('password')
const addressElement = document.getElementById('address')
const agreeBoxElement = document.getElementById('agreeBox')
const submitBtnElement = document.getElementById('submitBtn')

let fullName, gender, password, address, agree;

const fetchData = () => {
    fullName = fullNameElement.value;
    gender = femaleBtnElement.checked ? "Female" : maleBtnElement.checked ? "Male" : unknownBtnElement.checked ? "Unknown" : ""
    password = passwordElement.value;
    address = addressElement.value;
    agree = agreeBoxElement.checked;
}

const showData = () => {
    alert(`
        Fullname : ${fullName}
        Gender : ${gender}
        Password : ${password}
        Address: ${address}
        Agree : ${agree}
    `)
}

const containsNumber = (str) => {

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            return true;
        }
    }

    return false;
}

const containsSpecial = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes('!@#$%^&*()_+')) {
            return true;
        }
    }

    return false;
}

submitBtnElement.addEventListener('click', (event) => {
    event.preventDefault();

    let errorMessage = "";
    fetchData();

    // name validation
    if (gender === "") {
        errorMessage += "Please fill the gender\n"
    }

    // password validation
    //min. 8 characters
    if (password.length < 8) {
        errorMessage += 'Password length min 8\n'
    }

    // contains number
    if (!containsNumber(password)) {
        errorMessage += 'Password must contain number\n';
    }

    // contains special character
    if (!containsSpecial(password)) {
        errorMessage += 'Password must contain special character\n'
    }

    // check box
    if (!agree) {
        errorMessage += 'Please accept the term and condition\n'
    }

    if (errorMessage.length === 0) {
        alert("Thank you!")
    } else {
        alert(errorMessage)
    }







    // showData();
})