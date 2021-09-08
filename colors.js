function setColor(color){
  //var alist=document.querySelectorAll('a');
  //var i=0;
  //while(i <alist.length){
  //  alist[i].style.color=color;
  //  i+=1;
  //}
  $('a').css('color', color); //jquery 를 사용.
}
var Body ={
  setColor:function(color){
  //  document.querySelector('body').style.color=color;
  $('body').css('color', color);
  },
  setBackgroundColor:function(color){
  //  document.querySelector('body').style.backgroundColor=color;
  $('body').css('color', color);
  }
}
function nightDayHandler(self){
  var target=document.querySelector('body')
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';

    setColor('powderblue');
    }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';

    setColor('black');
    }
  }
