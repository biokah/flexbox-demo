const demoContainer = document.getElementsByClassName('demo-container')[0];
const axisElements = document.getElementsByClassName('axis');
const dropdowns = document.getElementsByClassName('dropdown');

const init = () => {
    const dropdownElements = Array.from(dropdowns);
    dropdownElements.forEach(item => {
        item.addEventListener('change', addValue);
    })
    document.getElementById('axis-checkbox').addEventListener('change', toggleAxis);
    document.getElementById('width-range').addEventListener('input', setSize)
    document.getElementById('height-range').addEventListener('input', setSize)
}

const addValue = (e) => {
    demoContainer.style[e.target.name] = e.target.value;
    if(e.target.name === 'flexDirection') {
        setAxis(e.target.value);
    }
    
}

const setSize = (e) => {
    document.getElementById(`${e.target.name}-text`).innerText = e.target.value;
    console.log(e.target.name, e.target.value)
    demoContainer.style[e.target.name] = `${e.target.value * .666}px`
}

const toggleAxis = (e) => {
    Array.from(axisElements).forEach(item => {
        item.classList.toggle('hidden');
    })
    demoContainer.classList.toggle('hidden');
}

const setAxis = (value) => {
    axisElements[0].innerText = value === 'row' ? 'cross axis' : 'primary axis'
    axisElements[1].innerText = value === 'row' ? 'primary axis' : 'cross axis'
}


init();