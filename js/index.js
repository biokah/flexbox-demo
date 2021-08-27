const demoContainer = document.getElementsByClassName('demo-container')[0];
const axisElements = document.getElementsByClassName('axis');
const dropdowns = document.getElementsByClassName('dropdown');
const button = document.getElementsByTagName('button')[0];

let element = 'one';
let property = 'none'

const init = () => {
    const dropdownElements = Array.from(dropdowns);
    dropdownElements.forEach(item => {
        item.addEventListener('change', addValue);
    })
    document.getElementById('axis-checkbox').addEventListener('change', toggleAxis);
    document.getElementById('width-range').addEventListener('input', setSize);
    document.getElementById('height-range').addEventListener('input', setSize);
    document.getElementById('element').addEventListener('change', setElement);
    document.getElementById('property').addEventListener('change', setProperty);
    button.addEventListener('click', clearAll);
}

const addValue = (e) => {
    demoContainer.style[e.target.name] = e.target.value;
    if (e.target.name === 'flexDirection') {
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
    axisElements[0].innerText = value === 'row' ? 'cross axis' : 'primary axis';
    axisElements[1].innerText = value === 'row' ? 'primary axis' : 'cross axis';
}

const clearAll = () => {
    demoContainer.removeAttribute('style');
    document.getElementById('width-range').value = 1200;
    document.getElementById('height-range').value = 800;
    document.getElementById('width-text').innerText = '1200';
    document.getElementById('height-text').innerText = '800';
    Array.from(document.getElementsByTagName('select')).forEach(item => {
        item.getElementsByTagName('option')[0].selected = 'selected';
    })
}

const setElement = (e) => {
    element = e.target.value;
    Array.from(document.getElementsByClassName('item')).forEach(item => {
        item.removeAttribute('style');
    })
    document.getElementById('property').getElementsByTagName('option')[0].selected = 'selected';
}

const setProperty = (e) => {
    property = e.target.value;
    if(e.value !== 'none') {
        document.getElementById(element).style[e.target.value] = 1
    }
}


init();