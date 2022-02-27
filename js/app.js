
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data =>displayDog(data))
}

const displayDog = dogs => {
    // console.log(allDogs);
    const dogCard = document.getElementById('dog-card');
    const allDogs = dogs.slice(0,12)
    for(const dog of allDogs){
        console.log(dog);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100 border-info bg-dark">
            <img src="${dog.image.url}" class="p-3 card-img-top bg-danger" height='250px' alt="...">
            <div class="card-body bg-dark text-white mb-2 mx-2">
                <h5 class="card-title">${dog.name}</h5>
                <p class="card-text">${dog.temperament}</p>
            </div>
            <div class='text-center mb-3'>
                <button onclick="getTheUrl(${dog.id})" type="button" class="btn btn-primary py-2 px-5"   data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                See Details
                </button>
            </div>
        </div>
        `
        dogCard.appendChild(div)
    }
}

const getTheUrl = dogId => {
    console.log(dogId)
    const url = `https://api.thedogapi.com/v1/breeds/${dogId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))
}

const showDetails = singleDog => {
    console.log(singleDog)
    const detailsDiv = document.getElementById('staticBackdrop')
    document.getElementById('staticBackdrop').textContent = ''
    const newDiv = document.createElement('div')
    newDiv.classList.add('modal-dialog')
    newDiv.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title" id="staticBackdropLabel">Details about "${singleDog.name}"</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul>
            <li><b class="text-primary">Type : </b>${singleDog.bred_for}</li>
            <li><b class="text-primary">Origin : </b>${singleDog.origin}</li>
            <li><b class="text-primary">Life Span : </b>${singleDog.life_span}</li>
            <li><b class="text-primary">Origin : </b>${singleDog.origin}</li>
            <li><b class="text-primary">Breed Group : </b>${singleDog.breed_group}</li>
            <li><b class="text-primary">Height : </b><strong>${singleDog.height.imperial}</strong></li>
            <li><b class="text-primary">Weight : </b>${singleDog.weight.imperial}</li>
            <li><b class="text-primary">Description : </b>${singleDog.temperament}</li>
        </ul>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
    `
    detailsDiv.appendChild(newDiv)
}