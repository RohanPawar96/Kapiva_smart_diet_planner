import React from "react";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";
import OTPInput, { ResendOTP } from "otp-input-react";
import axios from "axios";
import { auth, firebase } from "../../Assets/js/firebase";

export default function UserOtpVerification({
  error,
  setError,
  number,
  checked,
  otpTrack,
  setOtptrack,
  UtmSorce,
  UtmMedium,
  Campaign,
}) {
  const [otp, setOtp] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const checkOtp = (e) => {
    setOtp(e);
    if (e === "") {
      setError(true);
      setLoading(true);
    } else {
      setError(false);
      setLoading(false);
    }
  };

  const ValidateOtp = () => {
    setLoading(true);
    if (otp === null || otpTrack === null) {
      setError(true);
    } else {
      setError(false);
      otpTrack
        .confirm(otp)
        .then((result) => {
          getDietPlannerurl(number);
        })
        .catch((err) => {
          setError(true);
        });
    }
  };

  const getDietPlannerurl = (contactNumber) => {
    const data = {
      mobile: contactNumber,
      utm_source: UtmSorce,
      utm_medium: UtmMedium,
      campaign: Campaign,
    };

    // console.log(data);
    axios(`https://kapiva.app/api/smart_diet_planner.php?p=user_details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: "PHPSESSID=j8vrusf9atiunom5ru0bkktssk",
      },
      data: data,
    }).then((response) => {
      let responseData = response.data;
      // console.log(responseData);
      let accessToken = responseData.user_details[0].access_token;
      // console.log("accessToken", accessToken);
      window.location.href = `https://onboarding.smartdietplanner.com/read?token=${accessToken}&clientId=kapiva&type=1`;
    });
  };

  // const setInternationCode = () => {
  //   // Make it internation code with module or extract code with for loop for list of country
  //   return country === "IN" ? "+91" : false;
  // };

  function sendOtp() {
    if (number.length === 0) {
      setError(true);
    } else {
      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
        size: "invisible",
      });
      const OtpNumber = "+91" + number;
      // console.log("Verification", OtpNumber, verify);
      auth
        .signInWithPhoneNumber(OtpNumber, verify)
        .then((result) => {
          // console.log(result);
          // setShowOtp(true);
          // setChecked(true);
          setOtptrack(result);
          // console.log("code sent");
        })
        .catch((err) => {
          alert(err);
          // setError({ ...error, noError: 2 });
          // window.location.reload();
          setError(true);
        });
    }
  }

  function resendOTP1() {
    // console.log("calling resent OTP");
    sendOtp();
  }

  // console.log(error || loading);

  return (
    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
      <div className="user-register-content">
        <DialogTitle style={{ fontWeight: "600" }}>
          OTP Verification
        </DialogTitle>
        <p
          className="pop-description"
          style={{ fontSize: "14px", marginBottom: "2%" }}
        >
          Veriry your phone number the OTP send to the number{" "}
          <span style={{ color: "#c97b5a" }}>+91 - {number}</span>
        </p>
        <div className="opt-verification">
          <div className="opt-row">
            <OTPInput
              value={otp}
              onChange={(e) => checkOtp(e)}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              isInputNum={true}
              // isInputSecure={true}
              secure
              style={{
                justifyContent: "space-between",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            />
            {error === true ? (
              <p className="error">Please enter correct OTP</p>
            ) : (
              ""
            )}
            <ResendOTP
              className="otp-btn"
              style={{ margin: "5% 0 3%", fontSize: "15px" }}
              onResendClick={() => resendOTP1()}
            />
          </div>
        </div>
        <Button
          style={{
            backgroundColor: error || loading ? "gray" : "#6a8330",
            width: "100%",
            color: "#fff",
            borderRadius: "2px",
            marginTop: "5%",
            marginBottom: "8%",
          }}
          disabled={error || loading}
          onClick={() => ValidateOtp()}
        >
          {loading ? (
            <Fade
              in={loading}
              style={{
                transitionDelay: loading ? "800ms" : "0ms",
              }}
              unmountOnExit
            >
              <CircularProgress thickness={6} style={{ color: "white" }} />
            </Fade>
          ) : (
            "Continue"
          )}
        </Button>
        <div id="recaptcha-container"></div>
      </div>
    </Slide>
  );
}
