// Find current date
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
let day = weekday[currentDate.getDay()];
document.getElementById("CurrentDay").innerHTML = day;

// Find current time
const CurrentUTCtime = new Date(currentDate);
let hours = CurrentUTCtime.getUTCHours();
const minutes = CurrentUTCtime.getUTCMinutes();
const Currenttime =   ${hours + 2}:${minutes < 10 ? "0" : ""}${minutes}  ;
document.getElementById("CurrentUTCtime").innerHTML = Currenttime;

// Include milliseconds
const milliseconds = CurrentUTCtime.getUTCMilliseconds();
document.getElementById("Milliseconds").innerHTML = milliseconds;

// Include track
const track = "Frontend"; // Replace with your desired track
document.getElementById("myTrack").innerHTML = track;
