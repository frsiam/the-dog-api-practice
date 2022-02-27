
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data =>displayDog(data))
}

const displayDog = allDogs => {
    // console.log(allDogs);
    for(const dog of allDogs){
        // console.log(dog);
        const dogCard = document.getElementById('dog-card');
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="${dog.image.url}" class="card-img-top" height='250px' alt="...">
            <div class="card-body">
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
    const newDiv = document.createElement('div')
    newDiv.classList.add('modal-dialog')
    newDiv.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
        </div>
    </div>
    `
    detailsDiv.appendChild(newDiv)
}