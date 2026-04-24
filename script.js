const scriptURL = 'https://script.google.com/macros/s/AKfycby8_CnJ6NzOtA2tovaCKzP7K3Erf0kcu5mEM71w4T_NQkWOHzaJm3FS6jwY9P2WsSbH1A/exec';
const form = document.getElementById('promoForm');
const btnSubmit = document.getElementById('btnSubmit');

form.addEventListener('submit', e => {
    e.preventDefault();
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = "Mengirim...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors'})
    .then(() => {
        alert("Berhasil! Cek WhatsApp Anda.");
        form.reset();
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = "DAPATKAN SEKARANG";
    })
    .catch(error => {
        alert("Error!");
        btnSubmit.disabled = false;
    });
});