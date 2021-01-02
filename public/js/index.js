const toggleBtn = document.getElementById("toggler-icon-modal");
const modal = document.getElementById("myModal");
const modalDialog = document.getElementById("myModalDialog")

toggleBtn.addEventListener('click', () => {
  modal.classList.add("modal-show");
  modalDialog.classList.add("modal-dialog-show");
})

modal.addEventListener('click', (e) => {
  if(e.target == modal){
    modalDialog.classList.remove("modal-dialog-show");
    modal.classList.remove("modal-show");
  }
});

new Glider(document.querySelector('.glider'), {
  slidesToShow: 2.5,
  dots: '#dots',
  draggable: true
});



// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]);

  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
                'width':400,
                'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

















// const today = new Date();
// const username = 'username';
// const modal = document.getElementById("myModal");
// const modalBtn = document.getElementById("modalBtn");
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// //Ordinal Date (1st/2nd/3rd/..th)
// const getOrdinalDate = date => date+(31==date||21==date||1==date?"st":22==date||2==date?"nd":23==date||3==date?"rd":"th");

// //name of the month(january/february/march...)
// const getMonthName = (monthName, monthArr) => monthArr[monthName];



// function checkModal (e) {
//   if(e.target == modal )
//     modal.style.display = "none";

//   else {
//     modal.style.display ="block";
//     document.getElementById("mySidenav").style.width = "250px";
  
//   }
// }
