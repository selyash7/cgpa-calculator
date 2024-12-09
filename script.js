let count = 0;

function addField() {
  count++;
  const inputFields = document.getElementById('input-fields');
  const field = document.createElement('div');
  field.innerHTML = `
    Subject ${count}: 
    <input type="number" placeholder="Grade Point (e.g., 10)" id="gp${count}" required>
    <input type="number" placeholder="Credits (e.g., 3)" id="credits${count}" required>
  `;
  inputFields.appendChild(field);
}

function calculateCGPA() {
  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 1; i <= count; i++) {
    const gp = parseFloat(document.getElementById(`gp${i}`).value);
    const credits = parseFloat(document.getElementById(`credits${i}`).value);

    if (!isNaN(gp) && !isNaN(credits)) {
      totalPoints += gp * credits;
      totalCredits += credits;
    }
  }

  const cgpa = totalPoints / totalCredits || 0;
  document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
