const imgs = ['Rub.png', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'];         
 let img1 = document.getElementById('img1')
 let img2 = document.getElementById('img2')
 let img3 = document.getElementById('img3')

 img1.onclick = f1
 img2.onclick = f2
 img3.onclick = f3 



 
 function f1() {
    img1.setAttribute('src', '2.jpg')
    setTimeout(fback, 3000)
}
function fback(){
    img1.setAttribute('src', '1.jpg')
}
function f2() {
    img2.setAttribute('src', '3.jpg')
    setTimeout(gback, 3000)
}
function gback(){
    img2.setAttribute('src', '1.jpg')
}
function f3() {
    img3.setAttribute('src', '4.jpg')
    setTimeout(aback, 3000)
}
function aback(){
    img3.setAttribute('src', '1.jpg')
}