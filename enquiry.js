const form = document.querySelector('form');
const fullName = document.getElementById("fullname");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const message = document.getElementById("msg");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${mail.value}<br>
    Contact No.: ${phone.value}<br> Message ${msg.value}`;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "buckmarley16@gmail.com",
        Password : "C49D24A062C589A51389B26262FBBFA0F91D",
        To : 'buckmarley16@gmail.com',
        From : document.getElementById("mail").value,
        Subject : "New enquiry notification",
        Body : bodyMessage
    }).then(
        message => {
          if (message == "OK")
              Swal.fire({
                  title: "Sumbitted!",
                  text: "Your quote has been sent!",
                  icon: "success"
              });

        }
    );
}

form.addEventListener("submit", (form) => {
    form.preventDefault();

  sendEmail();

});