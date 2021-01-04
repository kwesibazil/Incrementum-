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

google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Goal', { role: "style" }],
    ['Sun',  5, 'color: #1D3D59; opacity: 0.8'],
    ['Mon',  7, 'color: #1D3D59; opacity: 0.8'],
    ['Tues', 15, 'color:#1D3D59; opacity: 0.8'],
    ['Wed',  5, 'color: #1D3D59; opacity: 0.8'],
    ['Thur', 2, 'color: #1D3D59; opacity: 0.8'],
    ['Fri',  10, 'color:#1D3D59; opacity: 0.8'],
    ['Sat',  5, 'color: #1D3D59; opacity: 0.8']
  ]);

  var options = {
    bar: {groupWidth: "70%"},
    chartArea:{
      // left:5,
      top: 15,
      bottom: 16,
      right: 5,
      width: '90%'
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
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
