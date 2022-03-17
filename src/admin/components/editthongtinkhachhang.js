// <?php
// include "../../controller/autoload.php";
// include "../../dao/UserDao.php";
// $makh = $_GET['makh'];
// $user = UserDAO::getUserWithID($makh, $conn);
// ?>
// <?php include "./adminheader.php" ?>
// <?php include("./adminnav.php") ?>

import React from "react";

export default function editthongtinkhachhang() {
    return (
        <section>
            <div className="container d-flex flex-column justify-content-around">
                <div className="btnNav" id="btnNav">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="text-center mb-5">
                    <h1 className="title">SỬA THÔNG TIN KHÁCH HÀNG</h1>
                </div>
                <div className="container rounded bg-white mt-5 mb-5">
                    <form action="../controller/customerController.php" method="post">
                        <table className="table .table-striped" style={{border: "0"}}>
                            <tr>
                                <th>Mã</th>
                                <input className="form-control" id="editth" type="text" hidden name="ma" value="" />
                                <th><input className="form-control" id="editth" type="text" disabled name="ma" value="" /></th>
                            </tr>
                            <tr>
                                <th>Họ</th>
                                <th><input className="form-control" type="text" id="editth" name="ho" value="" /></th>
                            </tr>
                            <tr>
                                <th>Tên</th>
                                <th><input className="form-control" type="text" id="editth" name="ten" value="" /></th>
                            </tr>
                            <tr>
                                <th>Sđt</th>
                                <th><input className="form-control" type="text" id="editth" name="sdt" value="" /></th>
                            </tr>
                            <tr>
                                <th>Địa chỉ</th>
                                <th><input className="form-control" type="text" id="editth" name="diachi" value="" /></th>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <th><input className="form-control" type="text" id="editth" disabled name="email" value="" /></th>
                            </tr>

                            <tr>
                                <th>Username</th>
                                <th><input className="form-control" type="text" id="editth" disabled name="username" value="" /></th>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <th><input className="form-control" type="text" id="editth" disabled name="password" value="" /></th>
                            </tr>
                            <tr>
                                <th colspan="2">
                                    <div className="mt-5 text-center" style={{textAlign: "center"}}>
                                        <button name="action" value="update" className="btn btn-primary" id="btn-luu" type="submit">Lưu</button>
                                    </div>

                                </th>
                            </tr>

                        </table>
                    </form>


                </div>


            </div>
        </section>
    );
}
// <?php include './music.php' ?>
// <?php include "./adminfooter.php" ?>