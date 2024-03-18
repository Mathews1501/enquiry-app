const fullname = document.getElementById('fullname');
const mail = document.getElementById('mail');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('enquiry-app')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Clicked');

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mattiesswebdev@gmail.com",
        Password : "54561EB8690093B5D6B0D8DF822D87ABD3A1",
        To : 'mattiesswebdev@gmail.com',
        From : "mattiesswebdev@gmail.com",
        Subject : "Test email from js",
        Body : "this is the test email"
    }).then(
      message => alert(message)
    );
})

// 54561EB8690093B5D6B0D8DF822D87ABD3A1