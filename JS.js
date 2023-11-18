const select = document.querySelector("select");
const response = document.querySelector("#response");

select.addEventListener("change", setChoice);

function setChoice(){
    const choice = select.value;

    if (choice === "snowboarding"){
        response.textContent = 
        "Snowboarding is harder to learn but easier to master. Excellent choice!";
    } else if (choice === "skiing"){
        response.textContent =
        "Skiing is easier to learn but harder to master. Wise choice!";
    } else {
        response.textContent ="";
    }
}