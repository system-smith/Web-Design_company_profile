// js/components.js

function injectPropertyModal() {
    const modalHTML = `
    <div id="propertyModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Add New Property</h3>
          <span class="close-modal">&times;</span>
        </div>
        <form id="addPropertyForm">
          <div class="form-group">
            <label>Property Name</label>
            <input type="text" id="propName" placeholder="e.g. Stretford" required>
          </div>
          <div class="form-group">
            <label>Location</label>
            <input type="text" id="propLocation" placeholder="e.g. Mabs or Stage" required>
          </div>
          <div class="form-group">
            <label>Price (Ksh/Month)</label>
            <input type="number" id="propPrice" placeholder="12000" required>
          </div>
          <div class="form-group">
            <label>Property Image URL</label>
            <input type="text" id="propImage" placeholder="Paste image link here">
          </div>
          <button type="submit" class="btn-primary">Save Property</button>
        </form>
      </div>
    </div>`;

    // Add the HTML to the very end of the body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add logic to make the 'X' button close the modal
    document.querySelector('.close-modal').onclick = function() {
        document.getElementById('propertyModal').style.display = 'none';
    };
}

// Run this as soon as the file is linked
injectPropertyModal();