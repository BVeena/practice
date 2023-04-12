const table = document.getElementById('my-table');

table.addEventListener('click', function(event) {
  if (event.target.nodeName === 'TD') {
    alert(event.target.innerHTML);
  }
});