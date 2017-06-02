var a = [];

function GetTask(taskid) {
  if (document.getElementById(taskid).value != "") {
    var ol = document.getElementById("List");
    ol.innerHTML = "";
    var b = document.getElementById(taskid).value;
    a.push(b);
    header();
    if (a.length > 0) {
      for (var i = 0; i < a.length; i++) {

        var NewList = document.createElement("tr");
        var SecC = document.createElement("td");
        var d = new Date();
        SecC.className = 'colmns';
        SecC.appendChild(document.createTextNode(d.toDateString()));
        NewList.appendChild(SecC);
        var thirdC = document.createElement("td");
        thirdC.className = 'colmns';
        thirdC.appendChild(document.createTextNode(a[i]));
        NewList.appendChild(thirdC);
        var fourC = document.createElement("td");
        fourC.className = 'colmns';
        var buttn = document.createElement("button");

        buttn.innerHTML = "Remove";
        //   buttn.innerHTML = '<img src="images/2.png" />';
        buttn.className = 'btn';
        fourC.appendChild(buttn);
        NewList.appendChild(fourC);
        NewList.setAttribute("id", a[i]);
        ol.appendChild(NewList);


        document.getElementById(taskid).value = "";
        buttn.onclick = function () {

          this.parentNode.parentNode.parentElement.removeChild(this.parentNode.parentNode);
          a.splice(a.indexOf(this.parentNode.parentElement.id), 1);
        };
      }
    }

  }

}

function header() {
  var tble = document.getElementById("List");
  var head = document.createElement("tr");
  var sec = document.createElement("td");
  sec.className = 'temp';
  sec.innerHTML = "Date";
  var thrd = document.createElement("td");
  thrd.className = 'temp';
  thrd.innerHTML = "Tasks";
  var four = document.createElement("td");
  four.className = 'temp'
  four.innerHTML = "Option";
  head.appendChild(sec);
  head.appendChild(thrd);
  head.appendChild(four);
  tble.appendChild(head);
}


function emptyList() {

  for (var i = 0; i < a.length; i++) {
    var table = document.getElementById('List');
    table.deleteRow(1);
  }
  a.splice(0);
}
