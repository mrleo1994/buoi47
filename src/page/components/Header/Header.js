import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // useNavigate dung để điều hướng trang, ko gây reload
  let navigate = useNavigate();
  // lấy dữ liệu từ redux về
  // useSelector ~ mapStateToProps
  let user = useSelector((state) => state.userSlice.user);
  let renderMenu = () => {
    if (user) {
      return (
        <>
          <span className="text-blue-500">{user.hoTen}</span>
          <button
            className="btn-theme"
            onClick={() => {
              window.location.href = "/";
              // clear data user localStorage
              localStorage.removeItem("USER_INFO");
            }}
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <button
          className="btn-theme"
          onClick={() => {
            // navigate("/login");
            window.location.href = "/login";
            // window => reload lại trang => dữ liệu trên redux sẽ mất
          }}
        >
          Login
        </button>
      );
    }
  };
  return (
    <div>
      <div className="container h-20 flex items-center justify-between">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="font-medium text-red-500 text-3xl animate-pulse"
        >
          CyberFlix
        </span>
        <div className="space-x-5">{renderMenu()}</div>
      </div>
    </div>
  );
}
