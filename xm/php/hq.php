<?php  
    header("content-type:text/html;charset=utf-8");
    header('Access-Control-Allow-Origin:*');
    if(isset($_POST["submit"]) && $_POST["submit"] == "登陆")  
    {  
        $user = $_POST["username"];  
        $psw = $_POST["password"];  
        if($user == "" || $psw == "")  
        {  
            echo "<script>alert('请输入用户名或密码！'); history.go(-1);</script>";  
        }  
        else 
        {  
            mysql_connect("localhost","root","root");  
            mysql_select_db("hxek");  
            mysql_query("set names utf8");  
            $sql = "select*from hxek where name = '$_POST[username]' and password = '$_POST[password]'";  
            $result = mysql_query($sql);  
            $num = mysql_num_rows($result);  
            if($num)  
            {  
                $row = mysql_fetch_array($result);  //将数据以索引方式储存在数组中  
                echo $row[0]; 
                echo "<script>alert('登陆成功！'); location.href='http://localhost/xm/sp.html?zh:$_POST[username]'</script>";  
            }  
            else 
            {  
                echo "<script>alert('用户名或密码不正确！'); history.go(-1);</script>";  
            }  
        }  
    }  
    else 
    {  
        echo "<script>alert('提交未成功！'); history.go(-1);</script>";  
    }  
?>
