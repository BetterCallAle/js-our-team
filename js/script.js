// Extract DOM elements
const row = document.querySelector(".row")
console.log(row);

//Create an Array with object
const companyMembers = [
    giveTheObject("Wyne", "Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg"),
    giveTheObject("Angela", "Carrol", "Chief Editor", "angela-caroll-chief-editor.jpg"),
    giveTheObject("Walter", "Gordon", "Office Manager", "walter-gordon-office-manager.jpg"),
    giveTheObject("Angela", "Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"),
    giveTheObject("Scott", "Estrada", "Developer", "scott-estrada-developer.jpg"),
    giveTheObject("Barbara", "Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg")
];
console.log(companyMembers);

//cycle the array for working with every elements
for (let i = 0; i < companyMembers.length; i++) {
    let thisMember = companyMembers[i];
    row.innerHTML += stampOutput(thisMember)
}


// FUNCTIONS
/**
 * Description give an object
 * @param {string} memberName the string with the member name
 * @param {string} memberSurname the string with the member surname
 * @param {string} memberRole the string with the member role
 * @param {string} memberImg the string with the member img
 * @returns {object} all the info in form of an object
 */
function giveTheObject(memberName, memberSurname, memberRole, memberImg) {
    
    const object = {
        name: memberName,
        surname : memberSurname,
        role: memberRole,
        img: memberImg
    }

    return object
}

/**
 * Description return a string with HTML elements for stamping the output
 * @param {object} member the object you want to stamp
 * @returns {string} the HTML output
 */
function stampOutput(member) {
    
    const htmlStructure = `<div class="col">
                                <div class="ms_card">
                                    <div class="ms_card-top">
                                        <img src="img/${member.img}" alt="Foto di ${member.name} ${member.surname}">
                                    </div>

                                    <div class="ms_card-bottom text-center py-2">
                                        <h2>${member.name} ${member.surname}</h2>
                                        <h3>${member.role}</h3>
                                    </div>
                                </div>
                            </div>`
    
    return htmlStructure
}