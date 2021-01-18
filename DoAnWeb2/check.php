<?php
session_start();
header('Content-Type:text/html;charset=utf-8');
 include_once 'config.php';
 // khởi tạo giá trị 
 $firstname='';
 $password='';
 //$sex='';
 $mail='';
 //$birthday='';
 //lấy dữ liệu từ form
 if($_SERVER['REQUEST_METHOD']=="POST")
 {
        if(isset($_POST['firstname'])) $firstname=$_POST['firstname'];
        if(isset($_POST['name'])) $name=$_POST['name'];
        if(isset($_POST['password'])) $password=$_POST['password'];
        //if(isset($_POST['sex'])) $sex=$_POST['sex'];
        if(isset($_POST['email'])) $mail=$_POST['email'];
        //if(isset($_POST['birthday'])) $birthday=$_POST['birthday'];
        //ktra mail đã có trong csdl chưa
        $check=mysqli_num_rows (mysqli_query ($conn,"SELECT `tenDangNhap` FROM `web2`.`tbl_khachhang` WHERE (`tenDangNhap`='$firstname' )"))>0;
        if($check)
        {?>     
           <script>
                alert("Tên đăng nhập đã tồn tại vui lòng nhập lại");
                window.location='checkout-registration.php';
           </script>         
       <?php }
       if($check1=mysqli_num_rows (mysqli_query ($conn,"SELECT `thuDienTuKH` FROM `web2`.`tbl_khachhang` WHERE (`thuDienTuKH`='$mail' )"))>0)
            {?>     
               <script>
                     //alert("mail đã tồn tại vui lòng nhập lại");
                     window.location='checkout-registration.php';
                     alert("mail đã tồn tại vui lòng nhập lại");
               </script>         
            <?php }
        if(!$check && !$check1){
           //lưu thông tin vào csdl
               $addmember=mysqli_query($conn,"
               INSERT INTO `web2`.`tbl_khachhang`(`maKhachHang`,`tenDangNhap`,`hoTenKhachHang`,`thuDienTuKH`,`matKhau`)
               VALUES(NULL,'$firstname','$name','$mail',md5('$password'))
               ");
               if($addmember)
               {
                   $_SESSION['ten']=$firstname;
                  header('location:index.php');
               }
               else{
               echo"thất bại";
               }
            }
}
 mysqli_close($conn);
 ?>