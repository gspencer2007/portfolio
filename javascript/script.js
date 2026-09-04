/*
While it’s important to know what global scope is,
it’s best practice to not define variables in the global scope.
*/

function updateCopyright() {
  const copyright = document.getElementsByClassName("copyright")[0];

  const currentDate = new Date();
  const thisYear = currentDate.getFullYear();

  copyright.innerHTML = `&copy; <time>${thisYear}</time> Geoffrey Spencer. All rights reserved.`;
}

updateCopyright();
