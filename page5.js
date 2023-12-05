var myNodelist = document.getElementsByTagName("LI");
for (var j = 0; j < myNodelist.length; j++) { 
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[j].appendChild(span); 
}

var close = document.getElementsByClassName("close");
for (var k = 0; k < close.length; k++) { 
  close[k].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
      alert("You must write something!");
  } else {
      document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  for (var m = 0; m < close.length; m++) { 
      close[m].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
      }
  }
}