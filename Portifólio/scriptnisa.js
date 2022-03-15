var btn = document.getElementById('btn')
var div = document.getElementById('apr')

btn.addEventListener('click', function(){
    if(div.style.display === 'none') {
        div.style.display = 'block'
        div.style.animationDuration = '2s'
    } else {
        div.style.display = 'none'
        div.style.animationDuration = '2s'
    }
})
