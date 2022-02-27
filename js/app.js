
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data =>displayDog(data))
}

const displayDog = allDogs => {
    console.log(allDogs);
    for(const dog of allDogs){
        console.log(dog.name);
        const dogCard = document.getElementById('dog-card');
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="${dog.image.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        dogCard.appendChild(div)
    }
}