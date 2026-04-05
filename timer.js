// time variables
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

// function to update timer every second
function updateTimer(){

seconds++;

if(seconds == 60){
seconds = 0;
minutes++;
}

if(minutes == 60){
minutes = 0;
hours++;
}

// formatting numbers to 2 digits
let s = seconds < 10 ? "0"+seconds : seconds;
let m = minutes < 10 ? "0"+minutes : minutes;
let h = hours < 10 ? "0"+hours : hours;

// update timer display
document.getElementById("timer").innerText = h + ":" + m + ":" + s;

}

// start timer
function startTimer(){

if(timer !== null) return;

timer = setInterval(updateTimer,1000);

}

// pause timer
function pauseTimer(){

clearInterval(timer);
timer = null;

}

// reset timer
function resetTimer(){

clearInterval(timer);
timer = null;

seconds = 0;
minutes = 0;
hours = 0;

document.getElementById("timer").innerText = "00:00:00";

}
// ---------------- SMART STREAK SYSTEM ----------------

let streak = localStorage.getItem("streak") || 0;
let lastDate = localStorage.getItem("lastDate");

document.addEventListener("DOMContentLoaded", () => {
    let el = document.getElementById("streakCount");
    if(el) el.innerText = streak + " days";
});

function increaseStreak(){

    let today = new Date().toDateString();

    // If already marked today → block
    if(lastDate === today){
        alert("Already completed today ✅");
        return;
    }

    // If yesterday → continue streak
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if(lastDate === yesterday.toDateString()){
        streak++;
    }
    else{
        // streak broken → reset
        streak = 1;
    }

    // save data
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastDate", today);

    document.getElementById("streakCount").innerText = streak + " days";
}
// Spotify login (basic redirect placeholder)
function loginSpotify(){
    alert("Redirecting to Spotify login (API needed for real use)");
}

// Create shareable room
function createRoom(){
    let link = "https://yourapp.com/room/" + Math.random().toString(36).substring(7);
    document.getElementById("roomLink").innerText = link;
}

// Simple AI response (demo)
function solveDoubt(){
    let input = document.getElementById("doubtInput").value;
    let response = "AI: Try breaking the problem into smaller parts 👍";
    
    if(input.toLowerCase().includes("code")){
        response = "AI: Debug step-by-step. Check logic, then syntax 💻";
    }

    document.getElementById("aiResponse").innerText = response;
}
// -------- RELAX ROOM SOUND --------

function playSound(){
    let audio = document.getElementById("relaxSound");
    if(audio){
        audio.play();
    }
}

function stopSound(){
    let audio = document.getElementById("relaxSound");
    if(audio){
        audio.pause();
        audio.currentTime = 0;
    }
}
function newTip(){
    let tips = [
        "Break problems into functions",
        "Practice DSA daily 🔥",
        "Debug using console.log()",
        "Write clean and readable code",
        "Consistency > Motivation"
    ];

    let random = tips[Math.floor(Math.random() * tips.length)];
    
    let tipElement = document.getElementById("tip");
    if(tipElement){
        tipElement.innerText = random;
    }
}
// -------- BREATHING GUIDE --------

let breathStates = ["Breathe In...", "Hold...", "Breathe Out..."];
let index = 0;

setInterval(() => {
    let el = document.getElementById("breathText");
    if(el){
        el.innerText = breathStates[index];
        index = (index + 1) % breathStates.length;
    }
}, 3000); // changes every 3 sec
function solveDoubt(){
    let input = document.getElementById("doubtInput").value;
    let response = "Try breaking the problem into smaller steps 👍";

    if(input.toLowerCase().includes("code")){
        response = "Debug step-by-step. Check logic first 💻";
    }

    document.getElementById("aiResponse").innerText = response;

    // clear input
    document.getElementById("doubtInput").value = "";
}
function toggleTheme(){
    document.body.classList.toggle("light-mode");
}
document.addEventListener("DOMContentLoaded", () => {
    let msg = document.getElementById("welcomeMsg");
    if(msg){
        let hour = new Date().getHours();
        let text = hour < 12 ? "Good Morning ☀️" :
                   hour < 18 ? "Good Afternoon 🌤️" :
                               "Good Evening 🌙";
        msg.innerText = text;
    }
});