// // <?php
// // session_start();
// // if(!empty($_SESSION['error'])){
// //   $error = $_SESSION['error'];
// //   echo "
// //   <div class='modal' tabindex='-1'>
// //   <div class='modal-dialog'>
// //     <div class='modal-content'>
// //       <div class='modal-header'>
// //         <h5 class='modal-title'>Lỗi đăng nhập</h5>
// //         <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
// //       </div>
// //       <div class='modal-body'>
// //         <p>$error</p>
// //       </div>
// //       <div class='modal-footer'>
// //         <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
// //       </div>
// //     </div>
// //   </div>
// // </div>
// //   ";
// //   session_destroy();
// // }
// // ?>
// import React from 'react';

// export default function adminLogin() {
//   return (
//     <section id="content" >
//       <div class="container width-register" >
//         <div class="row">
//           <div class="col-lg-10 col-xl-9 mx-auto">
//             <div class="card card-signin flex-row my-5">

//               <div class="card-body">
//                 <h5 class="card-title text-center">ADMIN LOGIN</h5>
//                 {/* <form class="form-signin" method="POST" action="../controller/loginAdminController.php"> */}
//                 <form>
//                   <div class="text-ds">
//                     <p>Username:</p>
//                   </div>
//                   <div class="form-label-group">
//                     <input type="text" name="username" id="inputEmail" class="form-control" placeholder="Email address" required />

//                   </div>
//                   <br />
//                   <div class="text-ds">
//                     <p>Password:</p>
//                   </div>
//                   <div class="form-label-group">
//                     <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required />
//                   </div>

//                   <br />
//                   <br />
//                   <br />
//                   <button class="btn btn-sm  btn-block" name="action" value="login" type="submit">LOGIN</button>

//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }