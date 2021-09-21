function clock() { 
   let d = new Date(); 
   let hh = (d.getHours() * 30) + (d.getMinutes() / 2);
   let mm = d.getMinutes() * 6; 
   let ss = d.getSeconds() * 6; 
 // console.log(hh, mm, ss); 
 document.querySelector('.hour').style.transform = `rotate(${hh}deg)`; 
 document.querySelector('.min').style.transform = `rotate(${mm}deg)`; 
 document.querySelector('.sec').style.transform = `rotate(${ss}deg)`; 
} 
setInterval(clock, 1);

  