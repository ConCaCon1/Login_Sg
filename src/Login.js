import "./Login.css";
import React, { useState } from "react";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className="img_wallpaper"
      style={{
        backgroundImage:
          "url('https://images3.alphacoders.com/132/1323579.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="login_container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">OCOP Marketplace</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <h3 className="mb-4 text-center">
                Bạn mới biết đến Green Leaf?
                <a className="sign_up" href="/">
                  Đăng Ký
                </a>
              </h3>
              <form action="#" className="signin-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control1"
                    placeholder="Tên đăng nhập"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    id="password-field"
                    type={showPassword ? "text" : "password"}
                    className="form-control1"
                    placeholder="Mật khẩu"
                    required
                  />
                  <span
                    className={`fa fa-fw field-icon toggle-password ${
                      showPassword ? "fa-eye" : "fa-eye-slash"
                    }`}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  ></span>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary submit px-3"
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                    <label className="checkbox-wrap checkbox-primary">
                      Ghi nhớ đăng nhập
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="w-50 text-md-right">
                    <a href="/" style={{ color: "#fff" }}>
                      Quên mật khẩu
                    </a>
                  </div>
                </div>
              </form>
              <p className="w-100 text-center Or">— Hoặc —</p>
              <div className="social text-center">
                <a href="#" className="text-center">
                  <span className="">
                    <i className="fa-brands fa-google rainbow-icon"></i>
                  </span>{" "}
                  Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
