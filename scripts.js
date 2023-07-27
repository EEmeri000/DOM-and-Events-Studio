// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let rocket = document.getElementById("rocket");
    rocket.style.position = 'relative'
    rocket.style.top = 0
    rocket.style.left = 0
    
    let spaceShuttleHeight = 0;

    takeOff.addEventListener('click', event => {
        let launchConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (launchConfirm) {
        flightStatus.innerHTML = 'Shuttle in flight.';
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
        };
    });
    landing.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight = 0;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
    });
    missionAbort.addEventListener('click', event => {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
        if (abortConfirm) {
        flightStatus.innerHTML = 'Mission aborted.';
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight = 0;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
        };
    });
    up.addEventListener('click', event => {
        rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
        spaceShuttleHeight += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
    });
    down.addEventListener('click', event => {
        rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
        spaceShuttleHeight -= 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
    });
    left.addEventListener('click', event => {
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    });
    right.addEventListener('click', event => {
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    });

});