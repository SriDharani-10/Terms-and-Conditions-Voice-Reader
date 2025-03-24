let checkbox_status = document.getElementById("i-agree");
checkbox_status.checked = false;
let login_btn = document.getElementById("loginbutton");
login_btn.disabled = true;
let instruction = document.createElement("p");

function click_box() {

    if (docrd==true||played==true) {
        instruction.remove();
        checkbox_status.checked = true;
        login_btn.disabled = false;
        login_btn.style.backgroundColor = "#66d3fa";
        login_btn.style.borderColor = "#1120cf";
        login_btn.style.cursor = "allowed";
        login_btn.style.cursor = "pointer"; // Set cursor to pointer
        document.getElementById("whole-login-page").style.height="100vh";
        
    } 

    else{
        instruction.classList.add("instruc");
        let container_temp=document.getElementById("playback-speed-container");
        instruction.textContent="Please listen to the audio or read the terms and conditions then try to LOGIN";
        login_btn.style.cursor = "not-allowed";
        checkbox_status.checked = false;
        container_temp.appendChild(instruction);
        document.getElementById("whole-login-page").style.height="110vh";
    }
}


let docrd=false;

function documentReaded(){
    docrd=true;
}

let played=false;

function audioPlayed(){
    played=true;
}

function lgb(event) {
    event.preventDefault(); // Prevent form from submitting

    if (!login_btn.disabled) {
        window.location.href = "job.html"; // Redirect to job portal
    }
}
