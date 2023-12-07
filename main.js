var contacts = [
    { // 0
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    { // 1
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    { // 2
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    { // 3
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
contacts[0].number =
function lookUpProfile(name , pro) {
    for(var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName == name) {
            return contacts[i][pro] || "no such property";
        }
    }
    return "No such contact"
}
