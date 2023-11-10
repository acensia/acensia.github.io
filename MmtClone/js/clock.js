const Month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const clockDiv = document.getElementById("clockDiv");
const clockDate = clockDiv.querySelector("h3");
const clockTime = clockDiv.querySelector("h2");


function clock(){
    const date = new Date();

    const curr_year = date.getFullYear();
    const curr_month = date.getMonth();
    const curr_date = date.getDate();
    const curr_day = date.getDay();

    const curr_time = date.getHours();
    const curr_minute = date.getMinutes();
    const curr_second = date.getSeconds();

    const str_time = String(curr_time).padStart(2, "0");
    const str_minute = String(curr_minute).padStart(2, "0");
    const str_second = String(curr_second).padStart(2, "0");

    clockDate.innerText = `${curr_year}, ${Month_name[curr_month]} ${curr_date} (${Day_name[curr_day]})`;
    clockTime.innerText = `${str_time}:${str_minute}:${str_second}`;

}

clock();
setInterval(clock, 1000);


//clockDiv.appendChild("");