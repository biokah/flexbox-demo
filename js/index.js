const demoContainer = document.getElementsByClassName('demo-container')[0]

const init = () => {
    console.log(demoContainer)
    const dropdowns = document.getElementsByClassName('dropdown');
    const dropdownElements = Array.from(dropdowns)
    dropdownElements.forEach(item => {
        item.addEventListener('change', addValue)
    })
}

const addValue = (e) => {
    demoContainer.style[e.target.name] = e.target.value;
    console.log('change', e.target.value, e.target.name)
}

init();