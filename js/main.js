'use strict'

const teamMember = [
    {
        firstName: "Wayne",
        lastName: "Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        firstName: "Walter",
        lastName: "Gordon",
        role: "Founder & CEO",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        firstName: "Scott",
        lastName: "Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        firstName: "Barbara",
        lastName: "Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    }
]

for (let i = 0; i < teamMember.length; i++) {
    const member = teamMember[i];

    console.log(`Team Member #${i + 1}\n\n- Name: ${member.firstName}\n- Surname: ${member.lastName}\n- Role: ${member.role}`);

    document.querySelector(".row").innerHTML +=
        `
        <div class="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center px-3">
            <div class="card w-100" style="width: 18rem;">
                <img src="img/${member.img}" class="card-img-top" alt="Img">
                <div class="card-body text-center">
                    <strong class="card-text">${member.firstName} ${member.lastName}</strong>
                    <div class="card-text">${member.role}</div>
                </div>
            </div>
        </div>
        `
}