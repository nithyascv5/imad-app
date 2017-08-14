var button = document.getElementById('counter');
var counter=0;
button.onclick=function(){
    var request = new XMLHttpRequest();
  counter=counter+1;
  var span = document.getElementById('count');
  request.onreadystatechange = function(){
    if(request.readystate === XMLHttpRequest.DONE){
       if(request.status === 200){
          var counter = request.responseText;

  span.innerHTML = counter.toString();
       }
    }
  };
  request.open('GET','http://nithyascv5.imad.hasura.app.io/counter',true);
  request.send(null);
};
