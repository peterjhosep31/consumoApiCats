const generateCart = document.getElementById('btn-genarate-cart');
generateCart.addEventListener('click', requestFetch);

const bodyView = document.querySelector('body');

function cartGenerate(cartCat) {
    console.log(cartCat);
    const containerCart = document.createElement('div');
    containerCart.classList.add('container-cart');
    const imgCart = document.createElement('img');
    imgCart.classList.add('img-cart');
    imgCart.src = cartCat[0].url;
    imgCart.alt = cartCat[0].id;

    bodyView.appendChild(containerCart);
    containerCart.appendChild(imgCart);

}

function requestFetch() {
    const methodConsult = { method: 'GET' };
    const URL = 'https://api.thecatapi.com/v1/images/search';

    fetch(URL, methodConsult)
        .then(response => response.json())
        .then(response => cartGenerate(response))
        .catch(err => console.error(err));
}