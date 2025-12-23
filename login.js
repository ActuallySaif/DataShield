
let errMsg = document.getElementById("errMsg");

let localusers = JSON.parse(localStorage.getItem("localUsers"));


function loginCheck() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
     
    for (i = 0; i < localusers.length; i++) {
        if (email == localusers[i].email && pass == localusers[i].pass) {
            window.location.href = 'index.html'
        } else {
            errMsg.style.display = 'block'
        }
    }
}
