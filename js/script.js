const messageForm = document.getElementById('messageForm');
const userMessageBox = document.getElementById('userMessage');

messageForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const name = document.querySelector('input[name="nama"]').value;
  const birthDate = document.querySelector('input[name="birth"]').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.querySelector('input[name="message"]').value;
  const userMessage = `
    <p>Nama: ${name}</p>
    <p>Tanggal Lahir: ${birthDate}</p>
    <p>Jenis Kelamin: ${gender}</p>
    <p>Pesan: ${message}</p>
  `;

  userMessageBox.innerHTML = userMessage;
});
