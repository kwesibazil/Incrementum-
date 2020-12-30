const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
const username = 'username';


//Ordinal Date (1st/2nd/3rd/..th)
const getOrdinalDate = date => date+(31==date||21==date||1==date?"st":22==date||2==date?"nd":23==date||3==date?"rd":"th");

//name of the month(january/february/march...)
const getMonthName = (monthName, monthArr) => monthArr[monthName];

document.getElementById('current-date').textContent = `Today, ${getOrdinalDate(today.getDate())} ${getMonthName(today.getMonth(), months)} ${today.getFullYear()} `;

document.getElementById('current-username').innerHTML = `${username}`;


