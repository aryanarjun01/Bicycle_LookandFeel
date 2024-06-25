document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bicycleForm');
    const tableBody = document.querySelector('#bicycleTable tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const bicycleName = document.getElementById('bicycleName').value;
        const bicycleType = document.getElementById('bicycleType').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bicycleName}</td>
            <td>${bicycleType}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
        form.reset();
    });

    tableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.parentElement.remove();
        }
        
        if (event.target.classList.contains('edit')) {
            const row = event.target.parentElement.parentElement;
            const name = row.children[0].textContent;
            const type = row.children[1].textContent;
            document.getElementById('bicycleName').value = name;
            document.getElementById('bicycleType').value = type;
            row.remove();
        }
    });
});
