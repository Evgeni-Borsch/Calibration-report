var btnSearch = document.getElementById('btn__search');
var search = document.querySelector('.about');
var table = document.querySelector('.table');

btnSearch.onclick = function () {
  if (undefined === search && null === search) {
    return;
  }
  search.style.display='block';
}

var btn = document.getElementById('btn__report');

btn.onclick = function () {
  if (undefined === table && null === table) {
    return;
  }
  table.style.display='block';
}