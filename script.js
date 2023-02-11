
setInterval(function() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let d = a.getDate();
  let monthname = a.toLocaleString('default',{month: 'long'});
  let year = a.getFullYear();
  if(h<10){
    document.getElementById("hours").innerHTML = "0"+h;
  }
  else{
  document.getElementById("hours").innerHTML = h;
  }
  if(m<10){
    document.getElementById("minutes").innerHTML = "0" + m;
  }
  else{
    document.getElementById("minutes").innerHTML = m;
  }
  if(s<10){
    document.getElementById("seconds").innerHTML = "0"+s;
  }
  else{
    document.getElementById("seconds").innerHTML = s;
  }
  document.getElementById("date").innerHTML = d + "/" + monthname +"/"+ year;
  
}, 1000);

