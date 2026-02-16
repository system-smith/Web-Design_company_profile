// Dashboard Navigation Script

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
  const contentSections = document.querySelectorAll('.content-section');
  const sidebar = document.querySelector('.sidebar');
  const dashboardContainer = document.querySelector('.dashboard-container');

  // Navigation click handler
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target section ID
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Hide all sections
        contentSections.forEach(section => {
          section.style.display = 'none';
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Show target section
        targetSection.style.display = 'block';
        
        // Hide sidebar on mobile to avoid obstruction
        if (window.innerWidth <= 1024) {
          if (sidebar) {
            sidebar.classList.add('collapsed');
          }
          if (dashboardContainer) {
            dashboardContainer.classList.add('sidebar-hidden');
          }
        }
        
        // Scroll to section
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  });

  // Show first section by default (overview)
  const firstSection = document.getElementById('overview');
  if (firstSection) {
    firstSection.style.display = 'block';
  }
  
  // Hide other sections
  contentSections.forEach((section, index) => {
    if (section.id !== 'overview') {
      section.style.display = 'none';
    }
  });

  // Toggle sidebar button (if exists)
  const toggleBtn = document.querySelector('.sidebar-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      if (sidebar) {
        sidebar.classList.toggle('collapsed');
      }
      if (dashboardContainer) {
        dashboardContainer.classList.toggle('sidebar-hidden');
      }
    });
  }

  // Message item click handler
  const messageItems = document.querySelectorAll('.message-item');
  messageItems.forEach(item => {
    item.addEventListener('click', function() {
      messageItems.forEach(m => m.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Form submission handlers
  const forms = document.querySelectorAll('.settings-form, .preferences-form, .contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Your changes have been saved successfully!');
      // Restore sidebar after form submission
      if (sidebar) {
        sidebar.classList.remove('collapsed');
      }
      if (dashboardContainer) {
        dashboardContainer.classList.remove('sidebar-hidden');
      }
    });
  });

  // Unsave property functionality
  const unsaveButtons = document.querySelectorAll('.btn-small.unsave');
  unsaveButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm('Are you sure you want to unsave this property?')) {
        this.closest('.saved-property').remove();
        alert('Property removed from saved items');
      }
    });
  });

  // Withdraw application functionality
  const withdrawButtons = document.querySelectorAll('.btn-small.withdraw');
  withdrawButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm('Are you sure you want to withdraw your application?')) {
        this.closest('.application-item').remove();
        alert('Application withdrawn');
      }
    });
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      if (sidebar) {
        sidebar.classList.remove('collapsed');
      }
      if (dashboardContainer) {
        dashboardContainer.classList.remove('sidebar-hidden');
      }
    }
  });
});
