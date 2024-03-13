//alert("The Insurance Broker provides high security for its valued clients click okay to proceed")

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "buckmarley16@gmail.com",
        Password : "Suuwhoopbanger/1501",
        To : "buckmarley16@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}