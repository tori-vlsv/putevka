import noUiSlider from 'nouislider';

function searchSidebarCost() {
  const slider = document.getElementById('search-sidebar-cost__slider');
  const parent = document.querySelector('.search-sidebar-cost');
  const filterInputs = parent.querySelectorAll('.search-sidebar__value input');
  
  noUiSlider.create(slider, {
    start: [500, 11000],
    connect: true,
    step: 100,
    range: {
      'min': 0,
      'max': 20000
    },
  
    // make numbers whole
    format: {
      to: value => value,
      from: value => value
    }
  });
  
  // bind inputs with noUiSlider 
  slider.noUiSlider.on('update', (values, handle) => { 
    filterInputs[handle].value = values[handle]; 
  });
  
  filterInputs.forEach((input, indexInput) => { 
    input.addEventListener('change', () => {
      slider.noUiSlider.setHandle(indexInput, input.value);
    })
  });
   
}
searchSidebarCost();
