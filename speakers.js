function Speakers() {
    console.log("got into Speakers()")
    const confIndex = [
        {
            "Conference Name": "Scripting",
            "Speaker Name": "Manoj",
            "email": "manoj@gmail.com",
            "Capacity": 20,
            "Location": "Remote",
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["8:00 a.m. CST", "12:00 p.m. CST", "3:00 p.m. CST"]
        },

        {
            "Conference Name": "Linux",
            "Speaker Name": "Mary Jane",
            "email": "mj24@gmail.com",
            "Capacity": 30,
            "Location": "Remote",
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["9:00 a.m. CST", "11:00 a.m. CST", "2:00 p.m. CST"]
        },

        {
            "Conference Name": "Red Teaming",
            "Speaker Name": "Prof X",
            "email": "Profx@gmail.com",
            "Capacity": 30,
            "Location": "Remote",
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["10:00 a.m. CST", "1:00 p.m. CST", "4:00 p.m. CST"]
        },

        {
            "Conference Name": "Blue Teaming",
            "Speaker Name": "Prof Y",
            "email": "Profy@gmail.com",
            "Capacity": 10,
            "Location": "Chicago",
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["8:00 a.m. CST", "12:00 p.m. CST", "3:00 p.m. CST"]
        },

        {
            "Conference Name": "General Programming",
            "Speaker Name": "Prof Z",
            "email": "Profz@gmail.com",
            "Capacity": 10,
            "Location": "Chicago",
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["9:00 a.m. CST", "11:00 a.m. CST", "2:00 p.m. CST"]
        },

        {
            "Conference Name": "GitHub and You",
            "Speaker Name": "Jim Beam",
            "email": "Jbeam@outlook.com",
            "Capacity": 10,
            "Location": ["Chicago", "Remote"],
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["10:00 a.m. CST", "1:00 p.m. CST", "4:00 p.m. CST"]
        },

        {
            "Conference Name": "From Scrum to Fantastic",
            "Speaker Name": "Stanley Kubrick",
            "email": "skubrick@outlook.com",
            "Capacity": 10,
            "Location": ["Chicago", "Remote"],
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["8:00 a.m. CST", "12:00 p.m. CST", "3:00 p.m. CST"]
        },

        {
            "Conference Name": "The Only Thing Missing Is CSS",
            "Speaker Name": "Amber Brit",
            "email": "abrit@outlook.com",
            "Capacity": 10,
            "Location": "Austin",
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["9:00 a.m. CST", "11:00 a.m. CST", "2:00 p.m. CST"]
        },

        {
            "Conference Name": "Be A Winner At The Game of Life",
            "Speaker Name": "Maureen Farmer",
            "email": "mfarmer@outlook.com",
            "Capacity": 10,
            "Location": "Austin",
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["10:00 a.m. CST", "1:00 p.m. CST", "4:00 p.m. CST"]

        },

        {
            "Conference Name": "Navigating w3Schools",
            "Speaker Name": "Anu P",
            "email": "anup@outlook.com",
            "Capacity": 10,
            "Location": ["Austin", "Remote"],
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["9:00 a.m. CST", "11:00 p.m. CST", "2:00 p.m. CST"]

        },

        {
            "Conference Name": "You're Hired! Now What?",
            "Speaker Name": "Bill Gates",
            "email": "bgates@outlook.com",
            "Capacity": 10,
            "Location": ["Austin", "Remote"],
            "Date": ["October 3, 2022", "October 4, 2022", "October 5, 2022"],
            "Time": ["8:00 a.m. CST", "12:00 p.m. CST", "3:00 p.m. CST"]

        }
    ]

    let mainContainer = document.getElementById("speakersList")
    confIndex.forEach((item) => {
        const div = document.createElement("div")
        div.innerHTML = item["Speaker Name"]
        mainContainer.appendChild(div)
    })
}