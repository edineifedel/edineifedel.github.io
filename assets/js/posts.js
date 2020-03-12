window.addEventListener('load', () => { 
    let elem = document.querySelector('.post-grid');
    let iso = new Isotope(elem, { 
        layoutMode: 'packery',
        itemSelector: '.grid-item'
    });

    // initial arrange
    iso.arrange({filter: '.tech'});

    // bind action filter to buttons 
    let buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(btn => btn.addEventListener('click', (event) => { 
        let btn = event.target; 
        let filterValue = btn.getAttribute('data-filter'); 
        iso.arrange({filter: filterValue}); 
        
        // change button selected
        let selected = document.querySelector('.filter-button.btn-primary');
        if (selected !== null) {
            selected.classList.remove('btn-primary');
            selected.classList.add('btn-secondary');
        }
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');
    }));
});