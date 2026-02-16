// js/propertyManager.js

// 1. SAVE PROPERTY FUNCTION
function saveProperty(event) {
    event.preventDefault();

    const newProperty = {
        id: Date.now(), // Unique ID for deleting later
        name: document.getElementById('propName').value,
        location: document.getElementById('propLocation').value,
        price: document.getElementById('propPrice').value,
        image: document.getElementById('propImage').value || '../../images/room-1.jpg',
        landlord: document.querySelector('.user-profile h3').innerText // Links property to specific landlord
    };

    let listings = JSON.parse(localStorage.getItem('myProperties')) || [];
    listings.push(newProperty);
    localStorage.setItem('myProperties', JSON.stringify(listings));

    alert("Property added successfully!");
    window.location.href = "dashboards/landlord/index.html";
}

// 2. DELETE PROPERTY FUNCTION
function deleteProperty(propertyId) {
    if (confirm("Are you sure you want to remove this listing?")) {
        let listings = JSON.parse(localStorage.getItem('myProperties')) || [];
        listings = listings.filter(prop => prop.id !== propertyId);
        localStorage.setItem('myProperties', JSON.stringify(listings));
        location.reload();
    }
}

// 3. LOAD PROPERTIES FOR LANDLORD VIEW
function loadLandlordProperties() {
    const container = document.querySelector('.properties-list');
    if (!container) return;

    const currentLandlord = document.querySelector('.user-profile h3').innerText;
    const listings = JSON.parse(localStorage.getItem('myProperties')) || [];
    
    // Only show properties belonging to THIS landlord
    const myItems = listings.filter(p => p.landlord === currentLandlord);

    if (myItems.length > 0) {
        container.innerHTML = ''; // Clear existing hardcoded items
        myItems.forEach(prop => {
            container.innerHTML += `
                <div class="property-item">
                    <img src="${prop.image}" class="property-thumbnail">
                    <div class="property-details">
                        <h4>${prop.name}</h4>
                        <p>${prop.location} - Ksh ${prop.price}</p>
                    </div>
                    <div class="property-actions">
                        <button onclick="deleteProperty(${prop.id})" class="btn-small btn-delete">Delete</button>
                    </div>
                </div>`;
        });
    }
}