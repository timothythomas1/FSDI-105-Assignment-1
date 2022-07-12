// Create the User constructor function
// function User(fname, lname, email, password, payment, color){
//     this.fname = fname;
//     this.lname = lname;
//     this.email = email; 
//     this.password = password; 
//     this.payment = payment;
//     this.color = color;
// }
class User {
    constructor(fname, lname, email, password,age, address, phone, payment, color) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
    }
}
//  Create the register function
function register() {
    // Get the values from the form fields
    let userFname = $("#textFirstName").val();
    let userLname = $("#textLastName").val();
    let userEmail = $("#textEmail").val();
    let userPassword = $("#textPassword").val();
    let userAge = $("#textAge").val();
    let userAddress = $("#textAddress").val();
    let userPhone = $("#textPhone").val();
    let userPayment = $("#textPayment").val();
    let userColor = $("#txtColor").val();
    // Create the object
    let newUser = new User(userFname, userLname, userEmail, userAge, userAddress, userPhone, userPassword, userPayment, userColor);
    // Display the user on the console
    console.log(newUser);
}

// jQuery vs JavaScript 
// document.getElementById("txtFirstName").value;
// $("#txtFirstName").val();

// document.getElementById("txtLastName").style.display = "none";
// $("#txtLastName").hide();
