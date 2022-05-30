// console.log('click')
const serachPhone = () => {
    const serachfield = document.getElementById('serach-field');
    const searchText = serachfield.value;
    console.log(searchText);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))

}

const displaySearchResult = (phonesArray) => {
    console.log(phonesArray);/* (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] */

    const searchResult = document.getElementById('serach-result')
    searchResult.textContent = '';

    for (const phone of phonesArray.slice(0, 20)) {
        console.log(phone);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name:${phone.phone_name}</h5>
                <h5 >Brand:${phone.brand}</h5>
            </div>
            
            <button onClick="phoneDetail('${phone.slug}')" class="btn btn-success">Details</button>
            
        </div>
        `;
        searchResult.appendChild(div)

    }

}

const phoneDetail = (phoneId) => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data))

}

const displayPhoneDetail = (detail) => {
    console.log(detail);
    const singlePhoneDetail = document.getElementById('phone-details');
    singlePhoneDetail.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${detail.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title"><b>Name:</b>${detail.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Release Date:</b> ${detail.releaseDate}</li>
        <li class="list-group-item"><b>Memory:</b>${detail.mainFeatures.memory}</li>
        <li class="list-group-item"> <b>Storage:</b>${detail.mainFeatures.storage}</li>
    </ul>
    
    `;
    singlePhoneDetail.appendChild(div)
}
