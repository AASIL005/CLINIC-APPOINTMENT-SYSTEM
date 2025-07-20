document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const data = `Name: ${name}\nDate: ${date}`;

  fetch('http://localhost:3000/save', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: data
  })
  .then(response => response.text())
  .then(result => {
    alert(result);
  })
  .catch(err => {
    alert("Failed to fetch: " + err.message);
  });
});
