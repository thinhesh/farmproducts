function validation(){
    var email=document.getElementById("text");
    var phone=document.getElementById("phone");
    var pass=document.getElementById("pass");
    var cpass=document.getElementById("cpass");
    var address=document.getElementById("address");
    var location=document.getElementById("location");
    if(email.value=="")
    {
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Enter  username";
        return false;
    }
    else{
        document.getElementById("error-div").style.display="none";
    }
    if(phone.value=="")
    {
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Enter mobile number";
        return false;
    }
    if(phone.value.length!=10){
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Enter valid mobile number";
        return false;
    }
    else{
        document.getElementById("error-div").style.display="none";
    }
    
    if(pass.value.length<6||pass.value.length>=8||pass.value=="")
    {
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Enter 6 to 8 digit password";
        return false;
    
    }
    else
    {
        document.getElementById("error-div").style.display="none";
    }
    if(pass.value!=cpass.value){
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Password mismatch";
        return false;
    }
    else
    {
        document.getElementById("error-div").style.display="none";
    }
    if(address.value=="")
    {
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Enter  Address";
        return false;
    }
    else{
        document.getElementById("error-div").style.display="none";
    }
    if(location.value=="")
    {
        document.getElementById("error-div").style.display="block";
        document.getElementById("para").innerHTML="Enter  location";
        return false;
    }
    else{
        document.getElementById("error-div").style.display="none";
        alert("Registration Process Completed")
        return true;
    }
    
}

