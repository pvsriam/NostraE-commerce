let productContainer = document.querySelector('.products-container');
let search = document.getElementById('searchbox');
let productlist = productContainer.querySelectorAll('.first');

// Add search functionality
search.addEventListener('keyup', function () {
    let enteredValue = this.value.toUpperCase();
    productlist.forEach(function (product) {
        let productName = product.querySelector('h1').textContent.toUpperCase();
        if (productName.indexOf(enteredValue) > -1) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Add filter functionality
document.addEventListener('DOMContentLoaded', function () {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            filterProducts();
        });
    });

    function filterProducts() {
        let selectedOccasions = getSelectedValues('.occasion-container');
        let selectedColors = getSelectedValues('.colors-container');
        let selectedArrivals = getSelectedValues('.arrival-container');

        productlist.forEach(function (product) {
            let productOccasion = product.getAttribute('data-occasion').toLowerCase();
            let productColor = product.getAttribute('data-color').toLowerCase();
            let productArrival = product.getAttribute('data-arrival').toLowerCase();

            let matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(productOccasion);
            let matchesColor = selectedColors.length === 0 || selectedColors.includes(productColor);
            let matchesArrival = selectedArrivals.length === 0 || selectedArrivals.includes(productArrival);

            if (matchesOccasion && matchesColor && matchesArrival) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    function getSelectedValues(containerClass) {
        return Array.from(document.querySelectorAll(containerClass + ' input[type="checkbox"]:checked'))
            .map(cb => cb.nextSibling.textContent.trim().toLowerCase());
    }
});

let closenav3 = document.getElementById('close')
let banner = document.getElementById('banner')
closenav3.addEventListener('click',function(){
    banner.style.display='none'
})


let sidenav = document.getElementById('sidenav')
let menuicon = document.getElementById('menuicon')
let closenav4 = document.getElementById('closenav')
menuicon.addEventListener('click',function()
{
    sidenav.style.left=0
})

closenav4.addEventListener('click',function()
{
    sidenav.style.left='-50%'
})