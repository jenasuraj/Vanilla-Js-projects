function skj(event) {
    event.preventDefault();
    console.log("Button clicked");
    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let birthdate = document.getElementById("BirthDate").value;
    let favourite = document.getElementById("Favourite").value;
    let email = document.getElementById("Email").value;
    let company = document.getElementById("Company").value;
    
    console.log(name, password, birthdate, favourite, email, company);

    let final = `USERNAME: ${name}, PASSWORD: ${password}, BIRTHDATE: ${birthdate},
        FAVOURITE: ${favourite}, EMAIL: ${email}, COMPANY: ${company}`;
    
    console.log(final);

    document.getElementById("login-form").style.display = "none";
   // document.getElementById("name").style.display = "none";
    
    document.getElementById("det").innerHTML = final;
}