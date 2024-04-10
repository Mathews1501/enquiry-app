document.addEventListener('DOMContentLoaded', function() {
  
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
          Username : "david@theinsurancebroker.org",
          Password : "587FA3993986616DB2774CF777AD46D7C363",
          To : 'david@theinsurancebroker.org',
          From : "david@theinsurancebroker.org",
          Subject : "New quotation notification",
          Body : ebody
      }).then(
        message => {
          if (message == "OK"){
            Swal.fire({
              title: "Submitted successfully!",
              text: "The insurance broker has received your quotation",
              icon: "success"
            });
            // reset to default after i submit my quote
            message.value ="";
            fullname.value = "";
            mail.value = "";
            phone.value = "";
            
          }
        }
      );
  });
});




// 587FA3993986616DB2774CF777AD46D7C363

