// Chayathma Photography Invoice Generator JavaScript

// Service Catalog from Chayathma POS System - Updated with Actual Details
const serviceCatalog = [
    {
        category: "Wedding & Event Coverage",
        services: [
            { id: 'wedding_coverage_full', name: 'Wedding Coverage (Shoot + Function)', price: 45000, description: 'Complete wedding day photography with shoot and function coverage' },
            { id: 'wedding_coverage_shoot', name: 'Wedding Coverage (Shoot Only)', price: 35000, description: 'Wedding photography shoot coverage only' },
            { id: 'homecoming_coverage_full', name: 'Homecoming Coverage (Shoot + Function)', price: 45000, description: 'Complete homecoming ceremony with shoot and function coverage' },
            { id: 'homecoming_shoot', name: 'Homecoming Shoot', price: 35000, description: 'Homecoming photography shoot coverage only' }
        ]
    },
    {
        category: "Wedding Enlargements",
        services: [
            { id: 'wedding_12x18', name: '12 x 18 Wedding Enlargement', price: 4500, description: '12x18 inch wedding photo enlargement' },
            { id: 'wedding_16x24', name: '16 x 24 Wedding Enlargement', price: 9500, description: '16x24 inch wedding photo enlargement' },
            { id: 'wedding_20x30', name: '20 x 30 Wedding Enlargement', price: 13500, description: '20x30 inch wedding photo enlargement' }
        ]
    },
    {
        category: "Homecoming Enlargements",
        services: [
            { id: 'homecoming_12x18', name: '12 x 18 Homecoming Enlargement', price: 5000, description: '12x18 inch homecoming photo enlargement' },
            { id: 'homecoming_16x24', name: '16 x 24 Homecoming Enlargement', price: 9500, description: '16x24 inch homecoming photo enlargement' },
            { id: 'homecoming_20x30', name: '20 x 30 Homecoming Enlargement', price: 13500, description: '20x30 inch homecoming photo enlargement' }
        ]
    },
    {
        category: "Group & Family Enlargements",
        services: [
            { id: 'group_12x18', name: '12x18 Group Enlargement', price: 5000, description: '12x18 inch group photo enlargement' },
            { id: 'family_10x15', name: '10 x 15 Family Enlargement', price: 3500, description: '10x15 inch family photo enlargement' },
            { id: 'homecoming_12x18_alt', name: '12 x 18 Homecoming Enlargement', price: 5000, description: '12x18 inch homecoming photo enlargement' }
        ]
    },
    {
        category: "Magazine Albums",
        services: [
            { id: 'album_8x20_20p', name: '8 x 20 Magazine Album 20 Pages', price: 25000, description: '8x20 inch magazine album with 20 pages' },
            { id: 'album_8x20_30p', name: '8 x 20 Magazine Album 30 Pages', price: 30000, description: '8x20 inch magazine album with 30 pages' },
            { id: 'album_10x24_50p', name: '10 x 24 Magazine Album 50 pages', price: 45000, description: '10x24 inch magazine album with 50 pages' },
            { id: 'album_10x24_60p', name: '10 x 24 Magazine Album 60 Pages', price: 52000, description: '10x24 inch magazine album with 60 pages' },
            { id: 'album_12x30_50p', name: '12 x 30 Magazine Album 50 Pages', price: 58000, description: '12x30 inch magazine album with 50 pages' },
            { id: 'album_12x30_60p', name: '12 x 30 Magazine Album 60 Pages', price: 65000, description: '12x30 inch magazine album with 60 pages' },
            { id: 'album_15x24_50p', name: '15x24 Magazine Album 50 Pages', price: 75000, description: '15x24 inch magazine album with 50 pages' },
            { id: 'album_17x24_60p', name: '17x24 Magazine Album 60 Pages', price: 80000, description: '17x24 inch magazine album with 60 pages' }
        ]
    },
    {
        category: "Story Albums",
        services: [
            { id: 'family_story_8x20_30p', name: '8 x 20 Family Story Album 30 Pages', price: 20000, description: '8x20 inch family story album with 30 pages' },
            { id: 'family_story_10x24_20p', name: '10 x 24 Family Story Album 20 Pages', price: 25000, description: '10x24 inch family story album with 20 pages' }
        ]
    },
    {
        category: "Thank You Cards",
        services: [
            { id: 'thank_you_5x7', name: 'Thank you cards 5x7', price: 120, description: '5x7 inch thank you cards' },
            { id: 'thank_you_5x8', name: 'Thank you cards 5x8', price: 130, description: '5x8 inch thank you cards' },
            { id: 'thank_you_6x6', name: 'Thank you cards 6x6', price: 100, description: '6x6 inch thank you cards' },
            { id: 'thank_you_6x8', name: 'Thank you cards 6x8', price: 140, description: '6x8 inch thank you cards' }
        ]
    },
    {
        category: "Preshoot Services",
        services: [
            { id: 'preshoot_coverage', name: 'Preshoot Coverage + Edited Photos', price: 35000, description: 'Pre-wedding shoot with professional editing' },
            { id: 'engagement_shoot', name: 'Engagement Shoot & Registration Coverage', price: 50000, description: 'Engagement ceremony and registration coverage' }
        ]
    },
    {
        category: "Preshoot Albums",
        services: [
            { id: 'preshoot_8x20_30p', name: '8 x 20 Preshoot Story Album 30 Pages', price: 20000, description: '8x20 inch pre-wedding story album with 30 pages' },
            { id: 'preshoot_9x20_30p', name: '9 x 20 Preshoot Story Album 30 Pages', price: 25000, description: '9x20 inch pre-wedding story album with 30 pages' },
            { id: 'preshoot_12x16_30p', name: '12 x 16 Preshoot Story Album 30 Pages', price: 30000, description: '12x16 inch pre-wedding story album with 30 pages' }
        ]
    },
    {
        category: "Video Services",
        services: [
            { id: 'preshoot_trailer', name: 'Preshoot Trailer Video', price: 35000, description: 'Cinematic pre-wedding trailer video' },
            { id: 'wedding_trailer', name: 'Wedding Day Trailer', price: 50000, description: 'Wedding day cinematic trailer' },
            { id: 'wedding_video_trailer', name: 'Wedding Day Video + Trailer', price: 75000, description: 'Complete wedding day video with trailer' },
            { id: 'homecoming_trailer', name: 'Full Homecoming Day Trailer', price: 40000, description: 'Complete homecoming ceremony trailer' },
            { id: 'full_wedding_homecoming', name: 'Full Wedding Day + Full Homecoming Day', price: 60000, description: 'Complete wedding and homecoming video coverage' },
            { id: 'preshoot_trailer_drone', name: 'Preshoot Trailer Video + Drone', price: 50000, description: 'Pre-wedding trailer with drone footage' }
        ]
    },
    {
        category: "Plymount Enlargements",
        services: [
            { id: 'plymount_8x12', name: '8 x 12 Plymount Enlargement', price: 1500, description: '8x12 inch plymount enlargement' },
            { id: 'plymount_10x12', name: '10 x 12 Plymount Enlargement', price: 1800, description: '10x12 inch plymount enlargement' },
            { id: 'plymount_10x15', name: '10 x 15 Plymount Enlargement', price: 2000, description: '10x15 inch plymount enlargement' },
            { id: 'plymount_12x15', name: '12 x 15 Plymount Enlargement', price: 2400, description: '12x15 inch plymount enlargement' },
            { id: 'plymount_12x18', name: '12 x 18 Plymount Enlargement', price: 2750, description: '12x18 inch plymount enlargement' }
        ]
    }
];

// Global Variables
let invoices = JSON.parse(localStorage.getItem('chayathma_invoices')) || [];
let serviceCounter = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    generateInvoiceNumber();
    setCurrentDate();
    updateDashboardStats();
    loadInvoicesList();
});

// Initialize application
function initializeApp() {
    console.log('🎨 Chayathma Photography Invoice Generator - Initialized');
    
    // Clear services container first and ensure it exists
    const servicesContainer = document.getElementById('servicesContainer');
    if (servicesContainer) {
        servicesContainer.innerHTML = '';
        serviceCounter = 0;
        
        // Add initial service row
        addService();
    } else {
        console.error('Services container not found!');
    }
    
    // Setup form submission
    const form = document.getElementById('invoiceForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Auto-calculate totals on input changes
    setupAutoCalculation();
}

// Tab Management
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    if (tabName === 'create') {
        document.getElementById('createInvoiceTab').classList.remove('hidden');
        document.getElementById('createTab').classList.add('active');
    } else if (tabName === 'list') {
        document.getElementById('invoiceListTab').classList.remove('hidden');
        document.getElementById('listTab').classList.add('active');
        loadInvoicesList();
    }
}

// Generate unique invoice number
function generateInvoiceNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const time = String(now.getTime()).slice(-4);
    
    const invoiceNumber = `CHY-${year}${month}${day}-${time}`;
    document.querySelector('input[name="invoiceNumber"]').value = invoiceNumber;
    return invoiceNumber;
}

// Set current date
function setCurrentDate() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('input[name="invoiceDate"]').value = today;
}

// Add new service row
function addService() {
    serviceCounter++;
    const container = document.getElementById('servicesContainer');
    
    if (!container) {
        console.error('Services container not found!');
        return;
    }
    
    const serviceDiv = document.createElement('div');
    serviceDiv.className = 'service-row flex flex-wrap gap-4 items-end p-4 bg-white/5 rounded-lg border border-white/10';
    serviceDiv.setAttribute('data-service-id', serviceCounter);
    
    serviceDiv.innerHTML = `
        <div class="flex-1 min-w-[300px]">
            <label class="block text-sm font-medium mb-2 text-gray-300">
                <i class="fas fa-camera mr-2"></i>Service/Item Description
            </label>
            <input type="text" 
                   name="serviceDescription_${serviceCounter}" 
                   placeholder="e.g., Wedding Photography, Album Design, Homecoming Coverage"
                   class="form-input w-full"
                   oninput="calculateTotal()">
        </div>
        <div class="w-40">
            <label class="block text-sm font-medium mb-2 text-gray-300">
                <i class="fas fa-money-bill mr-2"></i>Amount (LKR)
            </label>
            <input type="number" 
                   name="serviceAmount_${serviceCounter}" 
                   placeholder="0.00"
                   class="form-input w-full"
                   min="0" 
                   step="0.01"
                   oninput="calculateTotal()">
        </div>
        <div class="flex items-end">
            <button type="button" 
                    onclick="removeService(${serviceCounter})"
                    class="btn-danger px-3 py-2 mb-0"
                    title="Remove this service">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    container.appendChild(serviceDiv);
    console.log(`Added service row #${serviceCounter}`);
}

// Show service catalog modal
function showServiceCatalog() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    };
    
    modal.innerHTML = `
        <div class="bg-dark-card rounded-xl p-6 max-w-5xl w-full max-h-[85vh] overflow-y-auto border border-white/10">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-chayathma-blue">
                    <i class="fas fa-camera mr-3"></i>Chayathma Photography Service Catalog
                </h2>
                <button onclick="document.body.removeChild(this.closest('.fixed'))" 
                        class="text-gray-400 hover:text-white">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="text-sm text-gray-400 mb-4">
                <i class="fas fa-info-circle mr-2"></i>
                Click any service to select it for your invoice
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                ${serviceCatalog.map(category => `
                    <div class="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h3 class="text-lg font-semibold text-chayathma-green mb-4">
                            <i class="fas fa-folder mr-2"></i>${category.category}
                        </h3>
                        <div class="space-y-3">
                            ${category.services.map(service => `
                                <div class="service-card bg-white/5 rounded-lg p-3 border border-white/5 hover:border-chayathma-blue/50 cursor-pointer transition-all duration-200" 
                                     onclick="toggleServiceSelection(this, '${service.name}', ${service.price}, '${service.description}')">
                                    <div class="flex justify-between items-start mb-2">
                                        <h4 class="font-medium text-white text-sm">${service.name}</h4>
                                        <span class="text-chayathma-green font-bold text-sm">LKR ${service.price.toLocaleString()}</span>
                                    </div>
                                    <p class="text-xs text-gray-400">${service.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-6 text-center">
                <button onclick="addSelectedServicesToInvoice()" 
                        class="btn-primary mr-4">
                    <i class="fas fa-plus mr-2"></i>Add Selected Services
                </button>
                <button onclick="document.body.removeChild(this.closest('.fixed'))" 
                        class="btn-secondary">
                    <i class="fas fa-times mr-2"></i>Close Catalog
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Track selected services
let selectedServices = [];

// Categories that require quantity selection
const quantityRequiredCategories = [
    'Wedding Enlargements',
    'Group & Family Enlargements', 
    'Magazine Albums',
    'Story Albums',
    'Thank You Cards',
    'Preshoot Albums',
    'Plymount Enlargements'
];

// Toggle service selection
function toggleServiceSelection(element, name, price, description) {
    const serviceId = `${name}_${price}`;
    const existingIndex = selectedServices.findIndex(s => s.id === serviceId);
    
    if (existingIndex > -1) {
        // Deselect service
        selectedServices.splice(existingIndex, 1);
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        element.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        element.style.transform = 'scale(1)';
    } else {
        // Check if this service category requires quantity selection
        const serviceCategory = getServiceCategory(name);
        if (quantityRequiredCategories.includes(serviceCategory)) {
            showQuantityPopup(element, name, price, description, serviceCategory);
        } else {
            // Select service with default quantity of 1
            selectServiceWithQuantity(element, name, price, description, 1);
        }
    }
}

// Get service category by service name
function getServiceCategory(serviceName) {
    for (const category of serviceCatalog) {
        const foundService = category.services.find(service => service.name === serviceName);
        if (foundService) {
            return category.category;
        }
    }
    return null;
}

// Select service with specified quantity
function selectServiceWithQuantity(element, name, price, description, quantity) {
    const serviceId = `${name}_${price}_${quantity}`;
    selectedServices.push({ id: serviceId, name, price, description, quantity });
    element.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
    element.style.borderColor = '#10B981';
    element.style.borderWidth = '2px';
    element.style.transform = 'scale(1.02)';
    
    // Add quantity indicator
    let quantityBadge = element.querySelector('.quantity-badge');
    if (!quantityBadge) {
        quantityBadge = document.createElement('div');
        quantityBadge.className = 'quantity-badge';
        quantityBadge.style.cssText = `
            position: absolute;
            top: -8px;
            right: -8px;
            background: #10B981;
            color: white;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            z-index: 10;
        `;
        element.style.position = 'relative';
        element.appendChild(quantityBadge);
    }
    quantityBadge.textContent = quantity;
}

// Show quantity selection popup
function showQuantityPopup(element, name, price, description, category) {
    const popup = document.createElement('div');
    popup.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4';
    popup.id = 'quantityPopup'; // Add unique ID
    popup.onclick = (e) => {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    };
    
    // Store element reference globally for access
    window.currentQuantityElement = element;
    
    popup.innerHTML = `
        <div class="bg-dark-card rounded-xl p-6 max-w-md w-full border border-white/10 animate-scale-in">
            <div class="text-center mb-6">
                <div class="bg-chayathma-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-copy text-chayathma-blue text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Select Quantity</h3>
                <p class="text-gray-400 text-sm mb-1">${name}</p>
                <p class="text-chayathma-green font-bold">LKR ${price.toLocaleString()} each</p>
            </div>
            
            <div class="mb-6">
                <label class="block text-sm font-medium mb-3 text-gray-300">
                    <i class="fas fa-hashtag mr-2"></i>How many copies do you need?
                </label>
                <div class="flex items-center justify-center space-x-4">
                    <button onclick="adjustQuantity(-1)" class="bg-gray-600 hover:bg-gray-500 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" id="quantityInput" value="1" min="1" max="99" 
                           class="bg-white/10 border border-white/20 text-white text-center w-20 h-10 rounded-lg font-bold text-lg" 
                           oninput="updateTotal()">
                    <button onclick="adjustQuantity(1)" class="bg-gray-600 hover:bg-gray-500 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4 mb-6 border border-white/10">
                <div class="flex justify-between items-center">
                    <span class="text-gray-300">Total Amount:</span>
                    <span id="totalAmount" class="text-chayathma-green font-bold text-lg">LKR ${price.toLocaleString()}</span>
                </div>
            </div>
            
            <div class="flex space-x-3">
                <button onclick="closeQuantityPopup()" 
                        class="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    <i class="fas fa-times mr-2"></i>Cancel
                </button>
                <button onclick="confirmQuantitySelection('${name.replace(/'/g, "\\'").replace(/"/g, '\\"')}', ${price}, '${description.replace(/'/g, "\\'").replace(/"/g, '\\"')}')" 
                        class="flex-1 bg-chayathma-blue hover:bg-chayathma-blue/80 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    <i class="fas fa-check mr-2"></i>Confirm
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
}

// Quantity popup helper functions
function adjustQuantity(change) {
    const input = document.getElementById('quantityInput');
    const currentValue = parseInt(input.value) || 1;
    const newValue = Math.max(1, Math.min(99, currentValue + change));
    input.value = newValue;
    updateTotal();
}

function updateTotal() {
    const quantityInput = document.getElementById('quantityInput');
    const totalAmountElement = document.getElementById('totalAmount');
    
    if (!quantityInput || !totalAmountElement) return;
    
    const quantity = parseInt(quantityInput.value) || 1;
    
    // Get price from the popup text
    const popup = document.querySelector('.fixed');
    if (!popup) return;
    
    const priceElement = popup.querySelector('.text-chayathma-green');
    if (!priceElement) return;
    
    const priceText = priceElement.textContent;
    const price = parseInt(priceText.replace(/[^0-9]/g, ''));
    
    if (!isNaN(price)) {
        const total = price * quantity;
        totalAmountElement.textContent = `LKR ${total.toLocaleString()}`;
    }
}

// Close quantity popup
function closeQuantityPopup() {
    const popup = document.getElementById('quantityPopup');
    if (popup) {
        document.body.removeChild(popup);
    }
    // Clear the global reference
    window.currentQuantityElement = null;
}

function confirmQuantitySelection(name, price, description) {
    const quantity = parseInt(document.getElementById('quantityInput').value) || 1;
    const element = window.currentQuantityElement;
    
    // Close popup immediately
    closeQuantityPopup();
    
    // Then select the service
    if (element) {
        selectServiceWithQuantity(element, name, price, description, quantity);
    }
}

// Add selected services to invoice
function addSelectedServicesToInvoice() {
    if (selectedServices.length === 0) {
        showError('Please select at least one service');
        return;
    }
    
    const serviceCount = selectedServices.length;
    
    selectedServices.forEach(service => {
        addServiceFromCatalog(service.name, service.price, service.description, service.quantity || 1);
    });
    
    // Clear selections
    selectedServices = [];
    
    // Close modal
    const modal = document.querySelector('.fixed');
    if (modal) {
        document.body.removeChild(modal);
    }
    
    showSuccess(`Added ${serviceCount} service(s) to invoice`);
}

// Add service from catalog to invoice
function addServiceFromCatalog(name, price, description, quantity = 1) {
    // Add a new service row first
    addService();
    
    // Get the most recent service row
    const currentServiceId = serviceCounter;
    
    // Populate the fields
    const descriptionInput = document.querySelector(`input[name="serviceDescription_${currentServiceId}"]`);
    const amountInput = document.querySelector(`input[name="serviceAmount_${currentServiceId}"]`);
    
    if (descriptionInput && amountInput) {
        const totalPrice = price * quantity;
        const serviceDescription = quantity > 1 ? `${name} (${quantity} copies) - ${description}` : `${name} - ${description}`;
        
        descriptionInput.value = serviceDescription;
        amountInput.value = totalPrice;
        calculateTotal();
        
        // Add visual feedback
        const serviceRow = document.querySelector(`[data-service-id="${currentServiceId}"]`);
        if (serviceRow) {
            serviceRow.style.borderColor = '#10B981';
            serviceRow.style.borderWidth = '2px';
            setTimeout(() => {
                serviceRow.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                serviceRow.style.borderWidth = '1px';
            }, 2000);
        }
        
        // Show success message
        const successMessage = quantity > 1 
            ? `Added ${quantity}x ${name} - LKR ${totalPrice.toLocaleString()}`
            : `Added ${name} - LKR ${totalPrice.toLocaleString()}`;
        showSuccess(successMessage);
        
        // Scroll to the newly added service row
        serviceRow?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Remove service row
function removeService(serviceId) {
    const serviceRow = document.querySelector(`[data-service-id="${serviceId}"]`);
    if (serviceRow) {
        serviceRow.remove();
        calculateTotal();
    }
}

// Setup auto-calculation for form inputs
function setupAutoCalculation() {
    const form = document.getElementById('invoiceForm');
    form.addEventListener('input', calculateTotal);
    form.addEventListener('change', calculateTotal);
}

// Calculate invoice totals
function calculateTotal() {
    let subtotal = 0;
    
    // Calculate subtotal from services
    const serviceInputs = document.querySelectorAll('input[name^="serviceAmount_"]');
    serviceInputs.forEach(input => {
        const amount = parseFloat(input.value) || 0;
        subtotal += amount;
    });
    
    // Get additional charges
    const transportCharges = parseFloat(document.querySelector('input[name="transportCharges"]').value) || 0;
    const discountType = document.querySelector('select[name="discountType"]').value;
    const discountValue = parseFloat(document.querySelector('input[name="discount"]').value) || 0;
    
    // Calculate discount amount
    let discountAmount = 0;
    if (discountValue > 0) {
        if (discountType === 'percentage') {
            discountAmount = (subtotal * discountValue) / 100;
        } else {
            discountAmount = discountValue;
        }
    }
    
    // Calculate total
    const total = subtotal + transportCharges - discountAmount;
    
    // Update display
    document.getElementById('subtotalAmount').textContent = `LKR ${subtotal.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    document.getElementById('totalAmount').textContent = `LKR ${total.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    
    // Show/hide transport charges row
    const transportRow = document.getElementById('transportRow');
    if (transportCharges > 0) {
        transportRow.style.display = 'flex';
        document.getElementById('transportAmount').textContent = `LKR ${transportCharges.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    } else {
        transportRow.style.display = 'none';
    }
    
    // Show/hide discount row
    const discountRow = document.getElementById('discountRow');
    if (discountAmount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discountAmount').textContent = `- LKR ${discountAmount.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    } else {
        discountRow.style.display = 'none';
    }
    
    return { subtotal, transportCharges, discountAmount, total };
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const invoice = createInvoiceObject(formData);
    
    // Validate required fields
    if (!invoice.brideName || !invoice.groomName) {
        showError('Please enter both Bride\'s Name and Groom\'s Name');
        return;
    }
    
    if (invoice.services.length === 0) {
        showError('Please add at least one service or item');
        return;
    }
    
    // Save invoice
    saveInvoice(invoice);
    
    // Generate and download invoice
    generateInvoiceHTML(invoice);
    
    // Reset form
    resetForm();
    
    // Show success message
    showSuccess('Invoice created successfully!');
    
    // Update dashboard
    updateDashboardStats();
}

// Create invoice object from form data
function createInvoiceObject(formData) {
    const totals = calculateTotal();
    
    // Collect services
    const services = [];
    const serviceInputs = document.querySelectorAll('input[name^="serviceDescription_"]');
    serviceInputs.forEach(input => {
        const serviceId = input.name.split('_')[1];
        const description = input.value.trim();
        const amount = parseFloat(document.querySelector(`input[name="serviceAmount_${serviceId}"]`).value) || 0;
        
        if (description && amount > 0) {
            services.push({ description, amount });
        }
    });
    
    return {
        id: Date.now(),
        invoiceNumber: formData.get('invoiceNumber'),
        invoiceDate: formData.get('invoiceDate'),
        brideName: formData.get('brideName'),
        groomName: formData.get('groomName'),
        clientEmail: formData.get('clientEmail'),
        clientPhone: formData.get('clientPhone'),
        clientAddress: formData.get('clientAddress'),
        weddingDate: formData.get('weddingDate'),
        weddingVenue: formData.get('weddingVenue'),
        homecomingDate: formData.get('homecomingDate'),
        homecomingVenue: formData.get('homecomingVenue'),
        services: services,
        transportCharges: totals.transportCharges,
        discountType: formData.get('discountType'),
        discount: parseFloat(formData.get('discount')) || 0,
        discountAmount: totals.discountAmount,
        subtotal: totals.subtotal,
        total: totals.total,
        notes: formData.get('notes'),
        status: 'Pending',
        createdAt: new Date().toISOString()
    };
}

// Save invoice to localStorage
function saveInvoice(invoice) {
    invoices.push(invoice);
    localStorage.setItem('chayathma_invoices', JSON.stringify(invoices));
}

// Generate HTML invoice for download/print
function generateInvoiceHTML(invoice) {
    const html = `<!DOCTYPE html>
<html>
<head>
    <title>Invoice ${invoice.invoiceNumber}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 15px; background: white; font-size: 14px; color: #333; }
        .invoice-container { max-width: 800px; margin: 0 auto; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #4a90e2; padding-bottom: 15px; }
        .logo-section { display: flex; align-items: center; }
        .company-info { text-align: left; }
        .company-name { font-size: 24px; font-weight: bold; color: #4a90e2; margin: 0; }
        .company-tagline { font-size: 14px; color: #666; margin: 0; }
        .invoice-title { font-size: 28px; color: #4a90e2; margin: 15px 0; }
        .billing-section { display: flex; justify-content: space-between; margin: 20px 0; }
        .billing-info { flex: 1; margin-right: 20px; }
        .billing-info h4 { color: #4a90e2; margin-bottom: 8px; font-size: 14px; }
        .wedding-details { margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px; }
        .wedding-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .wedding-item { flex: 1; margin-right: 15px; }
        .services-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .services-table th, .services-table td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        .services-table th { background-color: #f5f5f5; color: #4a90e2; font-weight: bold; }
        .total-section { margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px; }
        .total-row { display: flex; justify-content: space-between; margin-bottom: 8px; padding: 5px 0; }
        .total-row.final { border-top: 2px solid #4a90e2; margin-top: 10px; padding-top: 10px; font-weight: bold; font-size: 16px; color: #4a90e2; }
        .notes { margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #4a90e2; }
        .footer { margin-top: 25px; text-align: center; color: #666; font-size: 11px; }
        @media print { 
            body { margin: 0; padding: 10px; font-size: 12px; } 
        }
    </style>
</head>
<body>
    <div class="invoice-container">
        <div class="header">
            <div class="logo-section">
                <div class="company-info">
                    <div class="company-name">CHAYATHMA PHOTOGRAPHY</div>
                    <div class="company-tagline">Professional Photography Services</div>
                    <div style="font-size: 12px; color: #666; margin-top: 5px;">
                        Email: chayathma@gmail.com | Phone: +94 76 30 40 134
                    </div>
                </div>
            </div>
            <div class="invoice-title">INVOICE</div>
        </div>
        
        <div class="billing-section">
            <div class="billing-info">
                <h4>Wedding Couple:</h4>
                <strong>Bride:</strong> ${invoice.brideName}<br>
                <strong>Groom:</strong> ${invoice.groomName}<br>
                ${invoice.clientEmail ? `<strong>Email:</strong> ${invoice.clientEmail}<br>` : ''}
                ${invoice.clientPhone ? `<strong>Phone:</strong> ${invoice.clientPhone}<br>` : ''}
                ${invoice.clientAddress ? `<strong>Address:</strong> ${invoice.clientAddress}` : ''}
            </div>
            <div class="billing-info">
                <h4>Invoice Details:</h4>
                <strong>Invoice #:</strong> ${invoice.invoiceNumber}<br>
                <strong>Date:</strong> ${formatDate(invoice.invoiceDate)}<br>
            </div>
        </div>
        
        ${(invoice.weddingDate || invoice.weddingVenue || invoice.homecomingDate || invoice.homecomingVenue) ? `
        <div class="wedding-details">
            <h4>Event Details:</h4>
            ${(invoice.weddingDate || invoice.weddingVenue) ? `
            <div class="wedding-row">
                <div class="wedding-item">
                    <strong>Wedding Date:</strong> ${invoice.weddingDate ? formatDate(invoice.weddingDate) : 'TBD'}
                </div>
                <div class="wedding-item">
                    <strong>Wedding Venue:</strong> ${invoice.weddingVenue || 'TBD'}
                </div>
            </div>` : ''}
            ${(invoice.homecomingDate || invoice.homecomingVenue) ? `
            <div class="wedding-row">
                <div class="wedding-item">
                    <strong>Homecoming Date:</strong> ${invoice.homecomingDate ? formatDate(invoice.homecomingDate) : 'TBD'}
                </div>
                <div class="wedding-item">
                    <strong>Homecoming Venue:</strong> ${invoice.homecomingVenue || 'TBD'}
                </div>
            </div>` : ''}
        </div>` : ''}
        
        <div style="margin: 30px 0;">
            <h4 style="color: #4a90e2; margin-bottom: 20px;">Services & Items Included</h4>
            <table class="services-table">
                <thead>
                    <tr>
                        <th>Service/Item Description</th>
                        <th style="text-align: right;">Amount (LKR)</th>
                    </tr>
                </thead>
                <tbody>
                    ${invoice.services.map(service => `
                        <tr>
                            <td>${service.description}</td>
                            <td style="text-align: right;">${service.amount.toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div class="total-section">
            <h4 style="color: #4a90e2; margin-bottom: 20px;">Invoice Summary</h4>
            <div class="total-row">
                <span>Services Total:</span>
                <span>LKR ${invoice.subtotal.toLocaleString()}</span>
            </div>
            ${invoice.transportCharges > 0 ? `
            <div class="total-row">
                <span>Transport Charges:</span>
                <span>LKR ${invoice.transportCharges.toLocaleString()}</span>
            </div>` : ''}
            ${invoice.discountAmount > 0 ? `
            <div class="total-row">
                <span>Discount ${invoice.discountType === 'percentage' ? `(${invoice.discount}%)` : ''}:</span>
                <span>- LKR ${invoice.discountAmount.toLocaleString()}</span>
            </div>` : ''}
            <div class="total-row final">
                <span>Total Amount:</span>
                <span>LKR ${invoice.total.toLocaleString()}</span>
            </div>
        </div>
        
        ${invoice.notes ? `
        <div class="notes">
            <h4>Notes:</h4>
            <p>${invoice.notes}</p>
        </div>` : ''}
        
        <div class="footer">
            Thank you for choosing Chayathma Photography!<br>
            For questions about this invoice, please contact us at chayathma@gmail.com
        </div>
    </div>
</body>
</html>`;

    // Create and download the HTML file
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const filename = `${invoice.brideName}_${invoice.groomName}_Invoice_${invoice.invoiceNumber}`.replace(/[^a-zA-Z0-9]/g, '_');
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${filename}.html`;
    downloadLink.style.display = 'none';
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    URL.revokeObjectURL(url);
    
    // Also open print dialog
    const printWindow = window.open('', '_blank');
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.document.title = filename;
    
    printWindow.onload = () => {
        setTimeout(() => {
            printWindow.print();
        }, 1000);
    };
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Reset form
function resetForm() {
    document.getElementById('invoiceForm').reset();
    
    // Clear services container and add one service row
    document.getElementById('servicesContainer').innerHTML = '';
    serviceCounter = 0;
    addService();
    
    // Reset generated fields
    generateInvoiceNumber();
    setCurrentDate();
    calculateTotal();
}

// Update dashboard statistics
function updateDashboardStats() {
    const totalInvoices = invoices.length;
    const paidInvoices = invoices.filter(inv => inv.status === 'Paid').length;
    const pendingInvoices = totalInvoices - paidInvoices;
    const totalRevenue = invoices.reduce((sum, inv) => sum + inv.total, 0);
    
    document.getElementById('totalInvoices').textContent = totalInvoices;
    document.getElementById('paidInvoices').textContent = paidInvoices;
    document.getElementById('pendingInvoices').textContent = pendingInvoices;
    document.getElementById('totalRevenue').textContent = `LKR ${totalRevenue.toLocaleString()}`;
}

// Load invoices list
function loadInvoicesList() {
    const tbody = document.getElementById('invoicesTableBody');
    
    if (invoices.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-12 text-gray-400">
                    <i class="fas fa-clipboard-list text-4xl mb-4 opacity-30"></i>
                    <p>No invoices created yet</p>
                    <p class="text-sm">Create your first invoice to get started</p>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = invoices.map(invoice => `
        <tr>
            <td class="font-semibold text-chayathma-blue">${invoice.invoiceNumber}</td>
            <td>${formatDate(invoice.invoiceDate)}</td>
            <td>${invoice.brideName} & ${invoice.groomName}</td>
            <td class="font-semibold text-chayathma-green">LKR ${invoice.total.toLocaleString()}</td>
            <td>
                <span class="status-badge ${invoice.status === 'Paid' ? 'status-paid' : 'status-pending'}">
                    ${invoice.status}
                </span>
            </td>
            <td>
                <div class="flex space-x-2">
                    <button onclick="toggleInvoiceStatus(${invoice.id})" class="btn-secondary">
                        <i class="fas fa-${invoice.status === 'Paid' ? 'undo' : 'check'}"></i>
                    </button>
                    <button onclick="downloadInvoice(${invoice.id})" class="btn-secondary">
                        <i class="fas fa-download"></i>
                    </button>
                    <button onclick="deleteInvoice(${invoice.id})" class="btn-danger">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Toggle invoice status
function toggleInvoiceStatus(invoiceId) {
    const invoice = invoices.find(inv => inv.id === invoiceId);
    if (invoice) {
        invoice.status = invoice.status === 'Paid' ? 'Pending' : 'Paid';
        localStorage.setItem('chayathma_invoices', JSON.stringify(invoices));
        updateDashboardStats();
        loadInvoicesList();
        showSuccess(`Invoice status updated to ${invoice.status}`);
    }
}

// Download existing invoice
function downloadInvoice(invoiceId) {
    const invoice = invoices.find(inv => inv.id === invoiceId);
    if (invoice) {
        generateInvoiceHTML(invoice);
    }
}

// Delete invoice
function deleteInvoice(invoiceId) {
    if (confirm('Are you sure you want to delete this invoice? This action cannot be undone.')) {
        invoices = invoices.filter(inv => inv.id !== invoiceId);
        localStorage.setItem('chayathma_invoices', JSON.stringify(invoices));
        updateDashboardStats();
        loadInvoicesList();
        showSuccess('Invoice deleted successfully');
    }
}

// Search invoices
function searchInvoices() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredInvoices = invoices.filter(invoice => 
        invoice.invoiceNumber.toLowerCase().includes(searchTerm) ||
        invoice.brideName.toLowerCase().includes(searchTerm) ||
        invoice.groomName.toLowerCase().includes(searchTerm) ||
        invoice.total.toString().includes(searchTerm)
    );
    
    const tbody = document.getElementById('invoicesTableBody');
    
    if (filteredInvoices.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-12 text-gray-400">
                    <i class="fas fa-search text-4xl mb-4 opacity-30"></i>
                    <p>No invoices found matching "${searchTerm}"</p>
                    <p class="text-sm">Try different search terms</p>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = filteredInvoices.map(invoice => `
        <tr>
            <td class="font-semibold text-chayathma-blue">${invoice.invoiceNumber}</td>
            <td>${formatDate(invoice.invoiceDate)}</td>
            <td>${invoice.brideName} & ${invoice.groomName}</td>
            <td class="font-semibold text-chayathma-green">LKR ${invoice.total.toLocaleString()}</td>
            <td>
                <span class="status-badge ${invoice.status === 'Paid' ? 'status-paid' : 'status-pending'}">
                    ${invoice.status}
                </span>
            </td>
            <td>
                <div class="flex space-x-2">
                    <button onclick="toggleInvoiceStatus(${invoice.id})" class="btn-secondary">
                        <i class="fas fa-${invoice.status === 'Paid' ? 'undo' : 'check'}"></i>
                    </button>
                    <button onclick="downloadInvoice(${invoice.id})" class="btn-secondary">
                        <i class="fas fa-download"></i>
                    </button>
                    <button onclick="deleteInvoice(${invoice.id})" class="btn-danger">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Clear all data
function clearAllData() {
    if (confirm('Are you sure you want to delete ALL invoices? This action cannot be undone.')) {
        invoices = [];
        localStorage.removeItem('chayathma_invoices');
        updateDashboardStats();
        loadInvoicesList();
        showSuccess('All invoices cleared successfully');
    }
}

// Show success message
function showSuccess(message) {
    const successEl = document.getElementById('successMessage');
    const textEl = document.getElementById('successText');
    
    textEl.textContent = message;
    successEl.classList.remove('translate-x-full');
    successEl.classList.add('message-enter');
    
    setTimeout(() => {
        successEl.classList.add('translate-x-full');
        successEl.classList.remove('message-enter');
    }, 3000);
}

// Show error message
function showError(message) {
    const errorEl = document.getElementById('errorMessage');
    const textEl = document.getElementById('errorText');
    
    textEl.textContent = message;
    errorEl.classList.remove('translate-x-full');
    errorEl.classList.add('message-enter');
    
    setTimeout(() => {
        errorEl.classList.add('translate-x-full');
        errorEl.classList.remove('message-enter');
    }, 4000);
}

// Export functions for global access
window.showTab = showTab;
window.addService = addService;
window.addServiceFromCatalog = addServiceFromCatalog;
window.toggleServiceSelection = toggleServiceSelection;
window.selectServiceWithQuantity = selectServiceWithQuantity;
window.showQuantityPopup = showQuantityPopup;
window.closeQuantityPopup = closeQuantityPopup;
window.adjustQuantity = adjustQuantity;
window.updateTotal = updateTotal;
window.confirmQuantitySelection = confirmQuantitySelection;
window.addSelectedServicesToInvoice = addSelectedServicesToInvoice;
window.removeService = removeService;
window.calculateTotal = calculateTotal;
window.showServiceCatalog = showServiceCatalog;
window.toggleInvoiceStatus = toggleInvoiceStatus;
window.downloadInvoice = downloadInvoice;
window.deleteInvoice = deleteInvoice;
window.searchInvoices = searchInvoices;
window.clearAllData = clearAllData;