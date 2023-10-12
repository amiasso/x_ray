 var bone = document.querySelector('.img.i2');
 var ring = document.querySelector('.ring');


 document.querySelector('.body').addEventListener('mousemove',(e)=>{
      var x=e.offsetX;
      var y=e.offsetY;

     ring.style.left=x +98+"px";
     ring.style.top=y+145+"px";

      bone.style.clipPath=`circle(50px at ${x}px ${y}px)`;

})