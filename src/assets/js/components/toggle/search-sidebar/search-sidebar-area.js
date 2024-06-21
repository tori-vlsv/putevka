import noUiSlider from 'nouislider';

function searchSidebarArea() {
  const slider = document.getElementById('search-sidebar-area__slider');
  const parent = document.querySelector('.search-sidebar-area');
  if(!parent) return;
  const filterInputs = parent.querySelectorAll('.search-sidebar__value input');
  
  noUiSlider.create(slider, {
    start: [0, 500],
    behaviour: 'tap',
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 500
    },
  
    // make numbers whole
    format: {
      to: value => value,
      from: value => value
    }
  });
  
  // bind inputs with noUiSlider 
  slider.noUiSlider.on('update', (values, handle) => { 
    filterInputs[handle].value = values[handle].toFixed(2); 
  });
  
  filterInputs.forEach((input, indexInput) => { 
    input.addEventListener('change', () => {
      slider.noUiSlider.setHandle(indexInput, input.value);
    })
  });

};
searchSidebarArea();