
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data =>displayDog(data))
}

const displayDog = allDogs => {
    console.log(allDogs);
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
                <button onclick="showDetails(${dog.id})" class='btn btn-primary py-2 px-5'>See Details</button>
            </div>
        </div>
        `
        dogCard.appendChild(div)
    }
}

const showDetails = dogId => {
    console.log(dogId)
    const url = `https://api.thedogapi.com/v1/breeds/${dogId}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}