const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const submit = document.getElementById("senden")


submit.addEventListener("click", () => {
console.log(firstname.value, lastname.value, email.value)
})

function checkFunction() {

if (firstname.value == "" || lastname.value == "" || email.value == "" || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
submit.disabled = true;
} else {
submit.disabled = false;
}
}

submit.addEventListener("click", async (event) => {
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["email", "firstname", "lastname"], [email.value, firstname.value, lastname.value] )
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page  
        location.href = "https://www.jackjones.com/ch/de/home"
    
    }})

