async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsArray = await response.json();
        displayPosts(postsArray);
    } catch (error) {
        console.error(error);
    }
}

function displayPosts(postsArray) {
    const postList = document.querySelector('#post-list');
    if (!postList) return;

    postsArray.forEach(function (post) {
        const listItem = document.createElement('li');
        const titleHeading = document.createElement('h1');
        const bodyParagraph = document.createElement('p');

        titleHeading.textContent = post.title;
        bodyParagraph.textContent = post.body;

        listItem.append(titleHeading, bodyParagraph);
        postList.appendChild(listItem);
    });
}

fetchData();