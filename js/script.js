let copyright = document.getElementsByClassName('copyright')[0];

const currentDate = new Date();
const thisYear = currentDate.getFullYear();

// String Interpolation uses backticks [` `] NOT quotations [' ']
copyright.innerHTML = `&copy; ${thisYear} Geoffrey Spencer. All rights reserved.`;