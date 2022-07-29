const Btn = document.querySelector(".email-buttonContainer");
const WarningIcon= document.querySelector(".warningIcon")
const Warning = document.querySelector(".warning")
const Check = document.querySelector(".checkIcon")




Btn.addEventListener('click', function (){

    const EmailTxt = document.querySelector(".base-apparel__email").value
    const Email = document.querySelector(".base-apparel__email")
    let Tst = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (Tst.test(EmailTxt)) {
        Check.classList.remove("none")
        WarningIcon.classList.add("none")
        Warning.classList.add("none")
        Email.focus()
        Email.style.outlineColor ="rgb(26, 207, 26)"
        
    } else {
        Check.classList.add("none")
        WarningIcon.classList.remove("none")
        Warning.classList.remove("none")
        Email.focus()
        Email.style.outlineColor ="hsl(0, 93%, 68%)"
    }
})
