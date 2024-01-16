window.onload= function(){
   var r = document.querySelector(':root');
   var rs = getComputedStyle(r);
   r.style.setProperty('--shake','52px');
   r.style.setProperty('--shake2','48px');
   //document.write(rs.getPropertyValue('--shake'));
   var x=document.getElementById("yoyo");
   setTimeout(function(){      
      string="ease-out";
      x.style.animationTimingFunction="ease-out";
      setInterval(function(){
         if(string=="ease-in")
         {string="ease-out";}
         else
         {string="ease-in";  }
         x.style.animationTimingFunction=string;
      },2000);
   },1000); 
  };

 function grabbing() {
   document.getElementById('whole').style.cursor = "grabbing";

}
function grab(){
   document.getElementById("whole").style.cursor = "grab";
}