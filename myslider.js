var images = ['saka.jpeg', 'saka2.jpeg','saka3.jpeg', 'saka4.jpeg', 'saka5.jpeg', 'saka6.jpeg', 'saka7.jpeg', 'saka8.jpeg', 'saka9.jpeg', 'saka10.jpeg'];
var num = 0;

function next(){
   var slider = document.getElementById('img-slider');
   num++;
   if(num >= images.length){
      num = 0;
   }slider.src = images[num];
}
function prev(){
   var slider = document.getElementById('img-slider');
   num--;
   if(num < 0){
      num = images.length -1;
   }slider.src = images[num];

}