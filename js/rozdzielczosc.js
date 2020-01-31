let div = document.createElement('div')
div.style.background = 'white'
document.querySelector('#ikony').appendChild(div)
const pokazRozdzielczosc = () => {
    div.innerText = document.documentElement.clientWidth + ' x ' + document.documentElement.clientHeight
}
//window.addEventListener("resize", pokazRozdzielczosc)

