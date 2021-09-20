<?php
   
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    if (!empty($user) ||  !empty($pass) )
    {
        
        $host="localhost";
        $username="root1";
        $password="";
        $dbname="agro";
        //connection
        $con=new mysqli($host,$username,$password,$dbname);
        if (mysqli_connect_error()){
            die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
          }
        else
        {
            $SELECT = "SELECT user From customersignup Where user = ? Limit 1";
            $INSERT = "INSERT Into customersignup (user,pass )values(?,?)";
            //Prepare statement
            $stmt = $con->prepare($SELECT);
            $stmt->bind_param("s", $user);
            $stmt->execute();
            $stmt->bind_result($user);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            //checking username
            if ($rnum==0) 
            {
                $stmt->close();
                $stmt = $con->prepare($INSERT);
                $stmt->bind_param("ss", $user,$pass);
                $stmt->execute();
            echo "New record inserted sucessfully";
            }
             else 
             {
                echo "Someone already register using this username";
            }
            $stmt->close();
            $con->close();
            }
    }
        
    else 
         {
        echo "All field are required";
        die();
        }
?>