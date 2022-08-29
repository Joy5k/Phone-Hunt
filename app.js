const loadPhone = (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data=>displayPhone(data.data))
}
const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.innerHTML = '';
    phones= phones.slice(0, 9);
    phones.forEach(phone => {
        
        console.log(phone);
        const createDiv = document.createElement('div');
        createDiv.classList.add('cardItem')
        createDiv.innerHTML = `
        <figure class="px-1 pt-1">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
        `;
        
        phoneContainer.appendChild(createDiv);
       

    })
}

document.getElementById('search-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    const getInputText = inputText.value;
    loadPhone(getInputText);
});

loadPhone('oppo');
