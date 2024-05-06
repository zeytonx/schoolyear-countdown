const orarend = [
    ["phys", "eng", "chem", "pe", "bio", "math", "geog"],
    ["pe", "hist", "draw", "phys", "sec", "maths", "gram"],
    ["hist", "sec", "chem", "gram", "math", "math", "it"],
    ["math", "eng", "sing", "sec", "math", "pe", "gram"],
    ["math", "bio", "gram", "eng", "phys", "0", "0"]
]

const excp = [
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 20],
    [5, 31]
];

const csengetes_rend_perc = [
    45, 40, 35, 40, 35, 30, 25 
]

const orak = [
    "math",
    "phys",
    "chem",
    "it",
    "gram",
    "eng",
    "geog",
    "hist",
    "draw",
    "sing",
    "pe",
    "sec",
    "bio"
]

const nyar = new Date();
nyar.setFullYear(2024)
nyar.setMonth(5)
nyar.setDate(21)
nyar.setHours(10)
nyar.setMinutes(35)
nyar.setSeconds(0)

const YEAR = 2024

update_UI()
setInterval(update_UI, 1000)

function update_UI()
{
    let dictionary = {
        "math": 0,
        "phys": 0,
        "chem": 0,
        "it": 0,
        "gram": 0,
        "eng": 0,
        "geog": 0,
        "hist": 0,
        "draw": 0,
        "sing": 0,
        "pe": 0,
        "sec": 0,
        "bio": 0
    }

    let m_length = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ]

    let vakacio = "!NOITACAV"

    const d = new Date()

    let cur_date = d.getDate()
    let cur_month = d.getMonth() + 1

    let cur_hour = d.getHours()
    let cur_minute = d.getMinutes()
    let year = d.getFullYear()

    let days_to_summer = 0;

    let month = cur_month;

    let done = false;

    while(year == YEAR)
    {
        for (let day = 1; day <= m_length[month-1]; day++)
        {
            var d2 = new Date();
            d2.setFullYear(year);
            d2.setMonth(month-1);
            d2.setDate(day);

            if (month == cur_month && day < cur_date) continue;
            if (month >= 6 && day >= 16 && year >= 2023) done = true;
            if (done) break;
            if (d2.getDay() == 0 || d2.getDay() == 6) continue;
            
            let cont = false;
            for(let i = 0; i < excp.length; i++)
            {
                if(month == excp[i][0] && day == excp[i][1])
                {
                    cont = true;
                    break;
                }
            }
            if(cont)
                continue;
            
            days_to_summer++;

            for (let hour = 8; hour <= 14; hour++)
            {
                if (month == cur_month && day == cur_date && hour < cur_hour) continue;
                if (month == cur_month && day == cur_date && hour == cur_hour && cur_minute >= csengetes_rend_perc[hour-8]) continue;
                if (orarend[d2.getDay()-1][hour-8] != "0") dictionary[ orarend[d2.getDay()-1][hour-8] ]++;
            }
        }
        if (done) break;

        if(month == 12) month = 0;
        month++;
    }

    if ((days_to_summer-8) * (-1) > 0)
    {
        let text = "";
        for (let i = 0; i < (days_to_summer-8) * (-1); i++)
        {
            text = vakacio[i] + text
        }
        document.getElementById("title").innerHTML = text;
    }

    for (let i = 0; i < orak.length; i++) document.getElementById(orak[i]).innerHTML = dictionary[orak[i]];

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

        cd = ( seconds_to_summer.toString().length == 1 ? "0" : "") + seconds_to_summer.toString() + cd + " secs"

        document.getElementById("countdown").innerHTML = cd
    }
}