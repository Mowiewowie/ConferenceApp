const database = [
    {
        "ConferenceName": "Learn C++",
        "SpeakerName": "Prof Groot",
        "email": "grooty@gmail.com",
        "Capacity": 20,
        "Location": "Remote",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["8:00 a.m. CST", "12:00 p.m. CST", "3:00 p.m. CST"],
        "Track": ["Introduction to Computing", "Computer Languages"]
    },

    {
        "ConferenceName": "Learn Linux",
        "SpeakerName": "Mary Jane",
        "email": "mj24@gmail.com",
        "Capacity": 30,
        "Location": "Remote",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["9:00 a.m. CST", "11:00 a.m. CST", "2:00 p.m. CST"],
        "Track": ["Introduction to Computing", "Computer Languages"]
    },

    {
        "ConferenceName": "Learn C#",
        "SpeakerName": "Prof Smartdude",
        "email": "ProfSmart@gmail.com",
        "Capacity": 30,
        "Location": "Remote",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["10:00 a.m. CST", "1:00 p.m. CST", "4:00 p.m. CST"],
        "Track": ["Introduction to Computing", "Computer Languages"]
    },

    {
        "ConferenceName": "Learn Python",
        "SpeakerName": "Prof BigBrain",
        "email": "ProfBrain@gmail.com",
        "Capacity": 10,
        "Location": "Chicago",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["8:00 a.m. CST", "12:00 p.m. CST", "3:00 p.m. CST"],
        "Track": ["Introduction to Computing", "Computer Languages"]
    },

    {
        "ConferenceName": "General Programming",
        "SpeakerName": "Prof Buzzkill",
        "email": "Buzzzkill@gmail.com",
        "Capacity": 10,
        "Location": "Chicago",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["9:00 a.m. CST", "11:00 a.m. CST", "2:00 p.m. CST"],
        "Track": ["Introduction to Computing", "Computer Languages"]
    },

    {
        "ConferenceName": "GitHub and You",
        "SpeakerName": "Jim Beam",
        "email": "Jbeam@outlook.com",
        "Capacity": 10,
        "Location": "Chicago",
        "Location2": "Remote",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["10:00 a.m. CST", "1:00 p.m. CST", "4:00 p.m. CST"],
        "Track": ["Web Design"]
    },

    {
        "ConferenceName": "From Scrum to Fantastic",
        "SpeakerName": "Stanley Kubrick",
        "email": "skubrick@outlook.com",
        "Capacity": 10,
        "Location": "Chicago",
        "Location2": "Remote",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["8:00 a.m. CST", "12:00 p.m. CST", "3:00 p.m. CST"],
        "Track": ["Project Management"]
    },

    {
        "ConferenceName": "The Only Thing Missing Is CSS",
        "SpeakerName": "Prof Query",
        "email": "Query@outlook.com",
        "Capacity": 10,
        "Location": "Austin",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["9:00 a.m. CST", "11:00 a.m. CST", "2:00 p.m. CST"],
        "Track": ["Web Design"]
    },

    {
        "ConferenceName": "Be A Winner At The Game of Life",
        "SpeakerName": "Dr. Feelgood",
        "email": "feelgood@outlook.com",
        "Capacity": 10,
        "Location": "Austin",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["10:00 a.m. CST", "1:00 p.m. CST", "4:00 p.m. CST"],
        "Track": ["Project Management", "Professional Development"]

    },

    {
        "ConferenceName": "What can W3Schools Do For You?",
        "SpeakerName": "Dr.Questions",
        "email": "question@outlook.com",
        "Capacity": 10,
        "Location": "Austin",
        "Location2": "Remote",
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["9:00 a.m. CST", "11:00 p.m. CST", "2:00 p.m. CST"],
        "Track": ["Introduction to Computing", "Computer Languages"]

    },

    {
        "ConferenceName": "You're Hired! Now What?",
        "SpeakerName": "Dr. Feelgood",
        "email": "feelgood@outlook.com",
        "Capacity": 10,
        "Location": ["Austin", "Remote"],
        "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
        "Time": ["8:00 a.m. CST", "12:00 p.m. CST", "3:00 p.m. CST"],
        "Track": ["Professional Development"]

    }
]

function countUp() {
    var txtInvoer = document.getElementById('addSession');
    var i = parseInt(txtInvoer.value, 10);
    txtInvoer.value = --i;
}

function Speakers() {
    console.log("got into Speakers()")

    let mainContainer = document.getElementById("showList")
    database.forEach((item) => {
        const whatever = document.createElement("div")
        whatever.innerHTML = item["SpeakerName"]
        mainContainer.appendChild(whatever)
    })
}

function StoreInitialData() {
    for (i = 1; i <= database.length; i++) {
        console.log(database[i].ConferenceName)
        sessionStorage.setItem(database[i].ConferenceName, database[i].Capacity)
    }
}