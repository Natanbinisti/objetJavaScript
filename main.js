

const etudiants = [
    {
        name : "pierre",
        age : 19,
        platPrefere : "pizza",
        booleenPrefere : true,
        github: "Pierrot69280"
    },
    {
        name : "Mei",
        age : 17,
        platPrefere : "boeuf bourguignon",
        booleenPrefere : false,
        github: "MeyDetour"
    },
    {
        name : "Natan",
        age : 19,
        platPrefere : "pates à la bolognaise",
        booleenPrefere : false,
        github: "natanbinisti"
    },
    {
        name : "Malakaya",
        age : 21,
        platPrefere : "pates à la carbonara",
        booleenPrefere : true,
        github: "MalakayaLvg"
    },
    {
        name : "Raphaël",
        age : 19,
        platPrefere : "paella",
        booleenPrefere : true,
        github: "raphaelmoynat"
    }
]

const divEtudiants = document.querySelector('.etudiants')

function cartePourEtudiant(student)
{

    let cardTemplate = `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${student.name}</h5>
    <p class="card-text">Age : ${student.age}</p>
    <p class="card-text">Age : ${student.github}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`

    return cardTemplate

}

etudiants.forEach((etudiant)=>{
    divEtudiants.innerHTML += cartePourEtudiant(etudiant)
})

const blagueDeChuck = document.querySelector('.chuckNorris')
fetch("https://api.chucknorris.io/jokes/random")
    .then(response=>response.json())
    .then((data)=>{
        blagueDeChuck.innerHTML = data.value
    })
