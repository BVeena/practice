const searchBtn = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  alert(`You searched for "${searchTerm}"`);
});