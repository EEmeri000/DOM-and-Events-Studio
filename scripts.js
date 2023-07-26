// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");

    takeOff.addEventListener('click', event => {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
              flightStatus.innerHTML = 'Shuttle in flight.';
    });
});