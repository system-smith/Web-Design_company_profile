document.addEventListener('DOMContentLoaded', function() {
  const propertyForm = document.querySelector('.property-form');
  const listingsTable = document.querySelector('.listings-table tbody');

  // Add a new property
  propertyForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const propertyName = document.getElementById('property-name').value;
    const propertyLocation = document.getElementById('property-location').value;
    const propertyPrice = document.getElementById('property-price').value;
    const roomType = document.getElementById('room-type').value;

    // Create a new row in the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${propertyName}</td>
      <td>${propertyLocation}</td>
      <td>Ksh ${propertyPrice}</td>
      <td>${roomType}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;

    // Add the new row to the table
    listingsTable.appendChild(newRow);

    // Reset the form
    propertyForm.reset();
  });

  // Edit and delete functionality
  listingsTable.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
      e.target.closest('tr').remove();
    }

    if (e.target.classList.contains('edit-btn')) {
      alert('Edit functionality would go here!');
    }
  });
});
