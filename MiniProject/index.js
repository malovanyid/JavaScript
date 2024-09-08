fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userContainer = document.getElementById('user-container');
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                    <p>id: ${user.id} ${user.name}</p>
                    <a href="user-details.html?id=${user.id}">View Details</a>`;
            userContainer.appendChild(userCard);
        });
    })
    .catch(error => console.error('Error fetching users:', error));