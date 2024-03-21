import React from "react";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b p-3 flex flex-col md:flex-row ">
      {/* Title */}
      <div className="flex  mb-3 md:mb-0 md:mr-5 ">
        <a className="text-red font-serif font-thin text-5xl border-r-2 border-gray-300 pr-4">
          SE
        </a>

        <p className="text-start font-light text-gray-500 pl-4">
          ระบบ
          <br /> กรอกแบบฟอร์มคำร้องขอสำเร็จการศึกษา <br />{" "}
          สาขาวิศวกรรมซอฟต์แวร์
        </p>

           {/* Login Button */}
    

      </div>
      <div className=" navbar-end justify-end ml-80 " >
   
          <button
            to="/SignIn"
            className="btn bg-red text-white rounded-full w-[150px] "
            onClick={() => document.getElementById("login").showModal()}
          >
            เข้าสู่ระบบ
          </button>
          </div>


      {/* Modal */}
      <Modal name="login" />
   
    </div>
  );
};

export default Navbar;
