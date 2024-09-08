function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}
function displayUserDetails(user) {
    const userDetailsContainer = document.getElementById('user-details');
    userDetailsContainer.innerHTML = `
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>`;
}
function loadUserPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = '';
            posts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                postCard.innerHTML = `
                            <h3>${post.title}</h3>
                            <a href="post-details.html?postId=${post.id}">View Post Details</a>`;
                postsContainer.appendChild(postCard);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}
const queryParams = getQueryParams();
const userId = queryParams.id;

if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            displayUserDetails(user);
            document.getElementById('load-posts-btn').addEventListener('click', () => {
                loadUserPosts(userId);
            });
        })
        .catch(error => console.error('Error fetching user details:', error));}
else {document.getElementById('user-details').innerText = 'User ID is missing in the URL';}