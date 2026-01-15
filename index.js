// Write your code here!
async function fetchData() {
    try {
        const rawData = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await rawData.json();
        displayPosts(data);
    } catch (error) {
        console.error(error);
    }
}

function displayPosts(data) {
    const container = document.querySelector('#post-list');
    if (!container) return;

    data.forEach(function (item) {
        const elementLi = document.createElement('li');
        const elementHi = document.createElement('h1');
        const elementP = document.createElement('p');

        elementHi.textContent = item.title;
        elementP.textContent = item.body;

        elementLi.append(elementHi, elementP);
        container.appendChild(elementLi);
    });
}

fetchData();
