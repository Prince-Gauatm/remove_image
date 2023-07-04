var count=0;
function fun1(){
  if(count==0){
     var x=document.querySelector('body');
  
      x.style.background="url('https://wallpaperaccess.com/full/4958480.jpg')";
      count+=1;
  }
}
function fun2(){
  if(count!=0){
  document.querySelector('body').style.background="url('https://wallpapercave.com/wp/nsu3cSp.jpg')";
  count=0;
  }
}