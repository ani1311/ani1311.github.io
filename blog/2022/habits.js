var firstDay = new Date(2022, 0, 1);
var lastDay = new Date(2023, 0, 1);

var monthIdMap = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

function createTable(data) {
  var tbl = document.createElement("table");
  var tr = document.createElement("tr");

  var th = document.createElement("th");
  th.appendChild(document.createTextNode("Day"));
  tr.appendChild(th);

  var th = document.createElement("th");
  th.appendChild(document.createTextNode("Meditation"));
  tr.appendChild(th);

  var th = document.createElement("th");
  th.appendChild(document.createTextNode("Cold Shower"));
  tr.appendChild(th);

  var th = document.createElement("th");
  th.appendChild(document.createTextNode("No Phone"));
  tr.appendChild(th);

  var th = document.createElement("th");
  th.appendChild(document.createTextNode("NF"));
  tr.appendChild(th);

  tbl.appendChild(tr);

  for (const [key, value] of Object.entries(data)) {
    var tr = document.createElement("tr");

    var th = document.createElement("th");
    th.appendChild(document.createTextNode(key));
    tr.appendChild(th);

    var th = document.createElement("th");
    if(value["meditation"]){
      th.appendChild(document.createTextNode("\u2714"));
    } else {
      th.appendChild(document.createTextNode("\u2717"));
    }
    tr.appendChild(th);

    var th = document.createElement("th");
    if(value["coldShower"]){
      th.appendChild(document.createTextNode("\u2714"));
    } else {
      th.appendChild(document.createTextNode("\u2717"));
    }
    tr.appendChild(th);

    var th = document.createElement("th");
    if(value["noPhone"]){
      th.appendChild(document.createTextNode("\u2714"));
    } else {
      th.appendChild(document.createTextNode("\u2717"));
    }
    tr.appendChild(th);

    var th = document.createElement("th");
    if(value["NF"]){
      th.appendChild(document.createTextNode("\u2714"));
    } else {
      th.appendChild(document.createTextNode("\u2717"));
    }
    tr.appendChild(th);

    tbl.appendChild(tr);
  }

  return tbl;
}

fetch("habitUpdate.json")
  .then((response) => response.text())
  .then((data) => {
    var dj = JSON.parse(data);
    var habits = document.getElementById("Habits");

    for (const [key, value] of Object.entries(dj)) {
      var h1 = document.createElement("H1");
      h1.innerHTML = monthIdMap[key];
      habits.appendChild(h1);
      habits.appendChild(createTable(value));
    }
  });

// <tr>
//                         <td>1</td>
//                         <td>O</td>
//                         <td>O</td>
//                         <td>O</td>
//                         <td>O</td>
//                     </tr>
//
