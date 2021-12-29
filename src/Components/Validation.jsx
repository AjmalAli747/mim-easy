import React from "react";
import swal from "sweetalert";

const Validation = () => {
  const submitFunction = (e) => {
    const form = document.getElementById("form");
    const otp = document.getElementById("otp");
    const form_two = document.getElementById("form_two");
    e.preventDefault();
    const number = e.target.numberIn.value;

    if (number === "") {
      swal("Please Enter Your Number");
    } else {
      swal("Good job!", `Phone Verification Start ${number}`, "success");
      e.target.numberIn.value = "";
      form.style.display = "none";
      otp.innerHTML = number;
      form_two.style.display = "block";
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <form onSubmit={submitFunction} id="form">
            <div className="inputIcon">
              <input
                type="number"
                name="numberIn"
                placeholder="Enter Your Number"
              />
              <i className="fas fa-phone"></i>
            </div>
            <input type="submit" value="Submit" />
          </form>
          <One />
        </div>
      </div>
    </>
  );
};

const One = () => {
    const form_two = document.getElementById("form_two");
    const submitFormData = (e) => {
        e.preventDefault();
    };

   
    
   
  return (
    <div className="verification" id="form_two" style={{display: "none"}}>
      <form action="" onSubmit={submitFormData}>
        <h1>Phone Verification</h1>
        <p>
          Enter ths OTP recevied on <span id="otp"></span>
        </p>
        <div className="Verification_col">
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />

          <div className="chnage_Number">
            <h1 className="fontSize">Chnage Number</h1>
            <h1 className="fontSize">Re-send OTP</h1>
          </div>
        </div>
        <button className="Verify_Button">Verify Phone Number</button>
      </form>
    </div>
  );
};

export default Validation;
