// Load header and footer components
document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    initializeSearch();
    loadTools();
});

async function loadComponents() {
    try {
        // Load header
        const headerResponse = await fetch('/components/header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;

        // Load footer
        const footerResponse = await fetch('/components/footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;

        // Initialize Bootstrap components
        initializeBootstrapComponents();
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

function initializeBootstrapComponents() {
    // Initialize all dropdowns
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
    const dropdownList = [...dropdownElementList].map(dropdownToggleEl => {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('toolSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterTools(searchTerm);
        });
    }
}

function filterTools(searchTerm) {
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function loadTools() {
    const toolsContainer = document.getElementById('toolsContainer');
    if (!toolsContainer) return;

    // Load tools data from tools-data.js
    if (typeof toolsData !== 'undefined') {
        toolsData.forEach(tool => {
            const toolCard = createToolCard(tool);
            toolsContainer.appendChild(toolCard);
        });
    }
}

function createToolCard(tool) {
    const div = document.createElement('div');
    div.className = 'col-md-4 col-lg-3 mb-4';
    div.innerHTML = `
        <div class="tool-card">
            <div class="card-body">
                <h5 class="card-title">
                    <i class="${tool.icon}"></i>
                    ${tool.name}
                </h5>
                <p class="card-text">${tool.description}</p>
                <a href="${tool.url}" class="btn btn-primary btn-sm">Use Tool</a>
            </div>
        </div>
    `;
    return div;
}

// Handle category filtering
document.querySelectorAll('#toolsCategories .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('href').replace('#', '');
        filterByCategory(category);
    });
});

function filterByCategory(category) {
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
} 