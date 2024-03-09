const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("confirmpassword");
const submit=document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim(); 
    const cpasswordValue = cpassword.value.trim(); 


    if(usernameValue === '')
    {
        setError(username,"Username is required");
    }
    else{
        setSuccess(username);
    }
    console.log(passwordValue.length);
   
    if(emailValue==='')
    {
        setError(email," Email Required ");
    }
    else if(!isvalidEmail(emailValue))
    {
        setError(email,'Provide a valid Email Address');
    }
    else
    {
        setSuccess(email);
    }
    if(passwordValue==='')
    {
        setError(password,"Password is required");
    }
    else if(passwordValue.length < 8 )
    {
        setError(password,"Password length cannot be less than 8");
    }
    else
        setSuccess(password);
    if(cpasswordValue==='')
    {
        setError(cpassword,"Please Confirm Password ");
    }
    else if(cpasswordValue!==passwordValue)
    {
        setError(cpassword,"Password does not match");
    }
    else
    {
        setSuccess(cpassword);
    }
   
}

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess= element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText="";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isvalidEmail(e)
{
    var regexemailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexemailPattern.test(e);
}