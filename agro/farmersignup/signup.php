<?php
    $textname=$_POST['user'];
    $textpass=$_POST['pass'];
    $textloc=$_POST['loc'];
    $textphone=$_POST['phone'];
    if(!empty($texrtuser)|| !empty($textpass) || !empty($textloc) || !empty($textphone))
    {
        $host="localhost";
        $username="root1";
        $password="";
        $dbname="agro";
        $con=new mysqli($host,$username,$password,$dbname);
        if (mysqli_connect_error())
        {
            die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
          }
        else
        {
            $SELECT = "SELECT user From farmersignup Where user = ? Limit 1";
            $INSERT = "INSERT Into farmersignup (user,pass,loc,phone)values(?,?,?,?)";
            $stmt = $con->prepare($SELECT);
            $stmt->bind_param("s", $textname);
            $stmt->execute();
            $stmt->bind_result($textname);
            $stmt->store_result();
            $rnum = $stmt->num_rows;
            if ($rnum==0) 
            {
                $stmt->close();
                $stmt = $con->prepare($INSERT);
                $stmt->bind_param('sssi', $textname,$textpass,$textloc,$textphone);
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