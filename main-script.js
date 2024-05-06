countdown()
setInterval(countdown, 1000)

function countdown()
{
    const nyar = new Date("06/21/2024 12:00")
    const now = new Date()
    let seconds_to_summer = Math.floor((nyar.getTime() - now.getTime()) / 1000);

    let cd = ""

    if (seconds_to_summer > 0)
    {
        cd = " mins " + ( (seconds_to_summer % 60).toString().length == 1 ? "0" : "") + (seconds_to_summer % 60).toString() + cd
        seconds_to_summer = (seconds_to_summer - (seconds_to_summer % 60)) / 60

        cd = " hours " + ( (seconds_to_summer % 60).toString().length == 1 ? "0" : "") + (seconds_to_summer % 60).toString() + cd
        seconds_to_summer = (seconds_to_summer - (seconds_to_summer % 60)) / 60

        cd = " days " + ( (seconds_to_summer % 24).toString().length == 1 ? "0" : "") + (seconds_to_summer % 24).toString() + cd
        seconds_to_summer = (seconds_to_summer - (seconds_to_summer % 24)) / 24

        cd = ( seconds_to_summer.toString().length == 1 ? "0" : "") + seconds_to_summer.toString() + cd + " mp"

        document.getElementById("countdown").innerHTML = cd
    }
}