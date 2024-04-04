document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
  const fullname = document.getElementById('fullname');
  const mail = document.getElementById('mail');
  const phone = document.getElementById('phone');
  const selectOption = document.getElementById('selectOption');
  const message = document.getElementById('message');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Clicked');

      let ebody = `
      <br>Name: <br>${fullname.value}
      <br>
      <br>Email: <br>${mail.value}
      <br>
      <br>phone: <br>${phone.value}
      <br>
      <br>Insurance type: <br>${selectOption.value}
      <br>
      <br>${message.value}
      <br>
      `;

      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "mattiesswebdev@gmail.com",
          Password : "54561EB8690093B5D6B0D8DF822D87ABD3A1",
          To : 'mattiesswebdev@gmail.com',
          From : "mattiesswebdev@gmail.com",
          Subject : "New quotation notification",
          Body : ebody
      }).then(
        message => alert("Quotation sent and recieved successfully")
      );
  });
});


// 54561EB8690093B5D6B0D8DF822D87ABD3A1

