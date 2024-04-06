const form = document.getElementById('patient_form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    const captchaResponse = grecaptcha.getResponse();

    if(!captchaResponse.length > 0){
        throw new Error("Captcha not complete")
    }
    const fd = new FormData(e.target)
    const params = new URLSearchParams(fd)
    fetch('/post',{
        method:'post',
        body:params,
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data)
        //setTimeout(location.reload())
        const popup = document.getElementsByClassName("popup")[0];
        popup.style.display = "block";
    })
    .catch(err=>console.log(err))
})
