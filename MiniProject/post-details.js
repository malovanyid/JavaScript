function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}
function displayPostDetails(post) {
    const postDetailsContainer = document.getElementById('post-details');
    postDetailsContainer.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>`;
}
function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const commentCard = document.createElement('div');
        commentCard.className = 'comment-card';
        commentCard.innerHTML = `
                    <h4>${comment.name}</h4>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p>${comment.body}</p>`;
        commentsContainer.appendChild(commentCard);
    });
}
const queryParams = getQueryParams();
const postId = queryParams.postId;
if (postId) {
    // Fetch post details
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            displayPostDetails(post);
            // Fetch comments for the post
            return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        })
        .then(response => response.json())
        .then(comments => {
            displayComments(comments);
        })
        .catch(error => console.error('Error fetching post or comments:', error));
}
else {document.getElementById('post-details').innerText = 'Post ID is missing in the URL';}