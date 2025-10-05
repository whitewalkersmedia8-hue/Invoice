// Chayathma Photography Invoice Generator JavaScript

// Service Catalog from Chayathma POS System
const serviceCatalog = [
    {
        category: "Events",
        services: [
            { id: 'wedding_coverage', name: 'Wedding Coverage', price: 45000, description: 'Complete wedding day photography coverage' },
            { id: 'homecoming', name: 'Homecoming', price: 80000, description: 'Traditional homecoming ceremony coverage' },
            { id: 'engagement_session', name: 'Engagement Photography', price: 25000, description: 'Professional engagement photo session' },
            { id: 'pre_wedding', name: 'Pre-Wedding Shoot', price: 35000, description: 'Pre-wedding photography session' },
            { id: 'reception', name: 'Reception Coverage', price: 30000, description: 'Wedding reception photography' },
            { id: 'poruwa_ceremony', name: 'Poruwa Ceremony', price: 40000, description: 'Traditional Poruwa ceremony photography' }
        ]
    },
    {
        category: "Albums",
        services: [
            { id: 'album_17x24', name: '17x24 Magazine Album', price: 80000, description: 'Premium large format magazine album' },
            { id: 'album_12x18', name: '12x18 Magazine Album', price: 40000, description: 'Standard magazine album' },
            { id: 'album_10x15', name: '10x15 Standard Album', price: 25000, description: 'Classic wedding album' },
            { id: 'story_album', name: 'Story Album', price: 15000, description: 'Narrative style photo album' },
            { id: 'coffee_table_book', name: 'Coffee Table Book', price: 60000, description: 'Luxury coffee table book' },
            { id: 'parent_album', name: 'Parent Album (8x10)', price: 30000, description: 'Compact album for parents' }
        ]
    },
    {
        category: "Video Services",
        services: [
            { id: 'video_editing', name: 'Video Editing', price: 25000, description: 'Professional video editing service' },
            { id: 'drone_video', name: 'Drone Video', price: 15000, description: 'Aerial drone videography' },
            { id: 'highlight_reel', name: 'Wedding Highlight Reel', price: 20000, description: 'Cinematic wedding highlight video' },
            { id: 'full_ceremony', name: 'Full Ceremony Recording', price: 35000, description: 'Complete ceremony documentation' },
            { id: 'pre_wedding_video', name: 'Pre-Wedding Video', price: 30000, description: 'Pre-wedding cinematic video' }
        ]
    },
    {
        category: "Photography",
        services: [
            { id: 'preshoot', name: 'Preshoot', price: 7500, description: 'Pre-wedding photography session' },
            { id: 'portrait_session', name: 'Portrait Session', price: 12000, description: 'Professional portrait photography' },
            { id: 'family_portrait', name: 'Family Portrait', price: 15000, description: 'Family photography session' },
            { id: 'maternity_shoot', name: 'Maternity Photography', price: 18000, description: 'Maternity photo session' },
            { id: 'newborn_session', name: 'Newborn Photography', price: 20000, description: 'Newborn baby photography' },
            { id: 'outdoor_session', name: 'Outdoor Photography Session', price: 16000, description: 'Outdoor location photography' }
        ]
    },
    {
        category: "Printing",
        services: [
            { id: 'enlargement_5x7', name: '5x7 Enlargement', price: 60, description: '5x7 inch photo enlargement' },
            { id: 'enlargement_8x10', name: '8x10 Enlargement', price: 120, description: '8x10 inch photo enlargement' },
            { id: 'enlargement_8x12', name: '8x12 Enlargement', price: 150, description: '8x12 inch photo enlargement' },
            { id: 'enlargement_11x14', name: '11x14 Enlargement', price: 250, description: '11x14 inch photo enlargement' },
            { id: 'enlargement_16x20', name: '16x20 Enlargement', price: 450, description: '16x20 inch photo enlargement' },
            { id: 'canvas_print', name: 'Canvas Print', price: 3500, description: 'High-quality canvas print' },
            { id: 'metal_print', name: 'Metal Print', price: 4000, description: 'Modern metal print' },
            { id: 'framed_print', name: 'Framed Print', price: 2500, description: 'Professional framed print' }
        ]
    },
    {
        category: "Cards & Stationery",
        services: [
            { id: 'thank_you_cards', name: 'Thank You Cards', price: 120, description: 'Wedding thank you cards' },
            { id: 'save_the_date', name: 'Save the Date Cards', price: 150, description: 'Save the date announcement cards' },
            { id: 'invitation_cards', name: 'Wedding Invitation Cards', price: 200, description: 'Custom wedding invitation cards' },
            { id: 'photo_cards', name: 'Photo Cards', price: 100, description: 'Personalized photo cards' },
            { id: 'calendar', name: 'Photo Calendar', price: 800, description: 'Custom photo calendar' }
        ]
    },
    {
        category: "Other Services",
        services: [
            { id: 'travel_charges', name: 'Travel Charges', price: 5000, description: 'Transportation and travel expenses' },
            { id: 'editing_service', name: 'Photo Editing Service', price: 500, description: 'Professional photo editing' },
            { id: 'digital_gallery', name: 'Digital Gallery Setup', price: 3000, description: 'Online digital photo gallery' },
            { id: 'slideshow', name: 'Wedding Slideshow', price: 8000, description: 'Wedding photo slideshow presentation' },
            { id: 'backup_service', name: 'Photo Backup Service', price: 2000, description: 'Professional photo backup service' },
            { id: 'rush_delivery', name: 'Rush Delivery (24-48 hours)', price: 10000, description: 'Express delivery service' }
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
        <div class="flex-1 min-w-[200px]">
            <label class="block text-sm font-medium mb-2 text-gray-300">
                <i class="fas fa-list mr-2"></i>Quick Select Service
            </label>
            <select name="quickService_${serviceCounter}" 
                    class="form-input w-full mb-2"
                    onchange="populateServiceFromCatalog(${serviceCounter}, this.value)">
                <option value="">Choose from catalog...</option>
                ${generateServiceCatalogOptions()}
            </select>
        </div>
        <div class="flex-1 min-w-[250px]">
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

// Generate service catalog options for dropdown
function generateServiceCatalogOptions() {
    let options = '';
    serviceCatalog.forEach(category => {
        options += `<optgroup label="${category.category}">`;
        category.services.forEach(service => {
            options += `<option value="${service.name}|${service.price}|${service.description}">
                ${service.name} - LKR ${service.price.toLocaleString()}
            </option>`;
        });
        options += '</optgroup>';
    });
    return options;
}

// Populate service details from catalog
function populateServiceFromCatalog(serviceId, value) {
    if (!value) return;
    
    const [name, price, description] = value.split('|');
    
    const descriptionInput = document.querySelector(`input[name="serviceDescription_${serviceId}"]`);
    const amountInput = document.querySelector(`input[name="serviceAmount_${serviceId}"]`);
    
    if (descriptionInput && amountInput) {
        descriptionInput.value = `${name} - ${description}`;
        amountInput.value = price;
        calculateTotal();
        
        // Add visual feedback
        const serviceRow = document.querySelector(`[data-service-id="${serviceId}"]`);
        if (serviceRow) {
            serviceRow.style.borderColor = '#10B981';
            serviceRow.style.borderWidth = '2px';
            setTimeout(() => {
                serviceRow.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                serviceRow.style.borderWidth = '1px';
            }, 2000);
        }
        
        // Show success message
        showSuccess(`Added ${name} - LKR ${parseInt(price).toLocaleString()}`);
        console.log(`Added service: ${name} - LKR ${parseInt(price).toLocaleString()}`);
    }
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
        <div class="bg-dark-card rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-white/10">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-chayathma-blue">
                    <i class="fas fa-camera mr-3"></i>Chayathma Photography Service Catalog
                </h2>
                <button onclick="document.body.removeChild(this.closest('.fixed'))" 
                        class="text-gray-400 hover:text-white">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${serviceCatalog.map(category => `
                    <div class="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h3 class="text-lg font-semibold text-chayathma-green mb-4">
                            ${category.category}
                        </h3>
                        <div class="space-y-3">
                            ${category.services.map(service => `
                                <div class="bg-white/5 rounded-lg p-3 border border-white/5">
                                    <div class="flex justify-between items-start mb-2">
                                        <h4 class="font-medium text-white">${service.name}</h4>
                                        <span class="text-chayathma-green font-bold">LKR ${service.price.toLocaleString()}</span>
                                    </div>
                                    <p class="text-sm text-gray-400">${service.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-6 text-center">
                <button onclick="document.body.removeChild(this.closest('.fixed'))" 
                        class="btn-primary">
                    <i class="fas fa-check mr-2"></i>Close Catalog
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Add popular service directly
function addPopularService(name, price, description) {
    // Add a new service row first
    addService();
    
    // Get the most recent service row
    const currentServiceId = serviceCounter;
    
    // Populate the fields
    const descriptionInput = document.querySelector(`input[name="serviceDescription_${currentServiceId}"]`);
    const amountInput = document.querySelector(`input[name="serviceAmount_${currentServiceId}"]`);
    
    if (descriptionInput && amountInput) {
        descriptionInput.value = `${name} - ${description}`;
        amountInput.value = price;
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
        showSuccess(`Added ${name} - LKR ${parseInt(price).toLocaleString()}`);
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
window.addPopularService = addPopularService;
window.removeService = removeService;
window.calculateTotal = calculateTotal;
window.populateServiceFromCatalog = populateServiceFromCatalog;
window.showServiceCatalog = showServiceCatalog;
window.toggleInvoiceStatus = toggleInvoiceStatus;
window.downloadInvoice = downloadInvoice;
window.deleteInvoice = deleteInvoice;
window.searchInvoices = searchInvoices;
window.clearAllData = clearAllData;