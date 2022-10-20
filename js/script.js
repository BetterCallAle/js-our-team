// Extract DOM elements
const div = document.querySelector("div")

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
    div.innerHTML += `<h2>Nome e Cognome: ${thisMember.name} ${thisMember.surname} </h2>
                      <h2>Ruolo: ${thisMember.role}</h2>
                      <img src="img/${thisMember.img}" alt="Foto di ${thisMember.name} ${thisMember.surname}">`
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