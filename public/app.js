const btn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');

btn.addEventListener('click', generate);

function generate() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*";

  let password = '';
  


  for (let i = 0; i < 25; i++) {
    let generate = letters[Math.floor(Math.random() * 62)];

    password += generate;
  }

  // document.querySelector('p').innerHTML = password;
  document.querySelector('input').value = password;
}

copyBtn.addEventListener("click", copyPassword);

function copyPassword() {
  let copyText = document.querySelector('input');


  copyText.select();
  copyText.setSelectionRange(0, 99999);


  document.execCommand('copy');

  alert("Copied Password: " + copyText.value);
}