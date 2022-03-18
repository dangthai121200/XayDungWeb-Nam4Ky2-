// <?php include "./adminheader.php" ?>
// <?php include "./adminnav.php" ?>
// <?php include "../../dao/OrderDAO.php" ?>
// <?php include "../../dao/ProductDAO.php" ?>
// <?php include "../../dao/UserDAO.php" ?>
// <?php
// $soLuongSpConLai = ProductDAO::getSoLuongSanPhamConLai($conn);
// $soLuongSpDaBan = OrderDAO::getSoLuongSanPhamDaBan($conn);
// $soLuongThanhVien = UserDAO::getSoLuongThanhVien($conn);
// $soLuongDonChuaGiao = OrderDAO::getSoLuongDonHangChuaGiao($conn);
// $doanhThu = OrderDAO::getDoanhThu($conn);
// ?>

import React from "react";

export default function admin(){
    function  btnNavmenu(){        
        const nav = document.getElementById("nav");
        const header = document.getElementsByTagName("header");
        const section = document.getElementsByTagName("section");
 
     if(nav.style.transform=="translateX(-100%)" && header[0].style.width=="0%" && section[0].style.width=="80%"){
         nav.style.transform="translateX(0)";
         header[0].style.width="20%";
         section[0].style.width="60%";
     }
     else{
         nav.style.transform="translateX(-100%)";
         header[0].style.width="0%";
         section[0].style.width="80%";
     }   
 }
    return(
<section>
    <div className="container d-flex flex-column justify-content-around">
        <div className="btnNav" id="btnNav" onClick={btnNavmenu}>
            <i className="fa-solid fa-bars"></i>
        </div>
        <div className="text-center mb-5">
            <h1 className="title">TỔNG QUAN</h1>
        </div>
        <div className="row count flex-grow-1">
            <div className="count__product col-4">
                <h2 className="count__title">SỐ LƯỢNG SẢN PHẨM</h2>
                <div className="soluong">
                    Đã bán:1
                    {/* <?php
                    if (!empty($soLuongSpDaBan['soluong']))
                        echo $soLuongSpDaBan['soluong']. " sản phẩm";
                    else
                        echo "0 sản phẩm";
                    ?> */}
                </div>
                <div className="soluong">
                    Còn lại:2
                    {/* <?php
                    if (!empty($soLuongSpConLai['soluong']))
                        echo $soLuongSpConLai['soluong']. " sản phẩm";
                    else
                        echo "0 sản phẩm";
                    ?> */}
                </div>
            </div>
            <div className="count__member col-4">
                <h2 className="count__title">SỐ LƯỢNG THÀNH VIÊN</h2>
                <div className="soluong">
                    500 ae
                    {/* <?php
                    if (!empty($soLuongThanhVien['soluong']))
                        echo $soLuongThanhVien['soluong']." thành viên";
                    else
                        echo "0  thành viên";
                    ?> */}
                </div>
            </div>
            <div className="count__order col-4">
                <h2 className="count__title">SL ĐƠN CHƯA GIAO</h2>
                <div className="soluong">
                    2 đơn
                    {/* <?php
                    if (!empty($soLuongDonChuaGiao['soluong']))
                        echo $soLuongDonChuaGiao['soluong']." đơn";
                    else
                        echo "0  đơn";
                    ?> */}
                </div>
            </div>
        </div>
        <div className="income row text-center mt-5">
            <h2 className="count__title">TỔNG DOANH THU</h2>
            <div className="soluong soluong--doanhthu">                
                {/* <?php
                if (!empty($doanhThu['doanhthu']))
                    echo number_format($doanhThu['doanhthu'],0,",",".")." VND";
                else
                    echo "0 VND";
                ?> */}
            </div>
        </div>
    </div>
</section>
);
}
// <?php include './music.php' ?>
// <?php include "./adminfooter.php" ?>