function validation()
{
    var user=document.getElementById("text");
    var pass=document.getElementById("pass");
    var cpass=document.getElementById("cpass");
    if(user.value=="")
    {
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Enter  username";
        return false;
    }
    else
    {
        document.getElementById("error-div").style.display="none";
    }
    if(pass.value==""||pass.value.length<6||pass.value.length>8)
    {
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Enter 6 to 8 password";
        return false;
    }
    else
    {
        document.getElementById("error-div").style.display="none";
    }
    if(cpass.value!=pass.value)
    {
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Password Missmath";
        return false;
    }
    else
    {
        document.getElementById("error-div").style.display="none";
        alert("Registration Process Completed")
    }
}   