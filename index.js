document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:3000/api/data')
    .then(response => response.json())
    .then(data => {
        
        const userData = data.map(user => `
            <tr>
            <td>${user.id}</td>
            <td>${user.title}</td>
            <td>${user.price}</td>
            <td>${user.discountPercentage}</td>
            <td>${user.rating}</td>
            <td>${user.stock}</td>
            </tr>
        `).join('' );

        document.getElementById('json-data-holder').innerHTML = userData;
    })
});
