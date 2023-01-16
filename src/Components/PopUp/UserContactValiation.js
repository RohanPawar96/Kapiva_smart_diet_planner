import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import ReactFlagsSelect from "react-flags-select";
import { CircularProgress, Fade, TextField } from "@mui/material";
import { auth, firebase } from "../../Assets/js/firebase";

export default function UserContactValiation({
  error,
  setError,
  number,
  setNumber,
  showOtp,
  setShowOtp,
  checked,
  setChecked,
  setOtptrack,
}) {
  const [country, setCountry] = React.useState("IN");
  const [disabled, setDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const patternNumber = new RegExp("^[6-9][0-9]{9}$");

  const checkInput = (e) => {
    setNumber(e);
    if (e === "") {
      setError(false);
    } else {
      if (isFinite(e)) {
        if (patternNumber.test(e)) {
          console.log(patternNumber.test(e));
          setError(false);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    }
  };

  const setInternationCode = () => {
    // Make it internation code with module or extract code with for loop for list of country
    return country === "IN" ? "+91" : false;
  };

  function sendOtp() {
    setDisabled(true);
    setLoading(true);
    if (number.length === 0) {
      setError(true);
    } else {
      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
        size: "30px",
      });
      const OtpNumber = String(setInternationCode()) + number;
      console.log("Verification", verify);
      auth
        .signInWithPhoneNumber(OtpNumber, verify)
        .then((result) => {
          // console.log(result);
          setShowOtp(true);
          setChecked(true);
          setOtptrack(result);
          // console.log("code sent");
        })
        .catch((err) => {
          alert(err);
          setError({ ...error, noError: 2 });
          window.location.reload();
        });
    }
  }

  // console.log(error && number.length !== 0 ? true : false);

  return (
    <div className="user-register-content">
      <DialogTitle style={{ fontWeight: "600" }}>Login</DialogTitle>
      <p className="pop-header">Get Customized Diet Plan</p>
      <p className="pop-description">
        Enter your mobile number and we will send you an OTP for verifiction.
      </p>
      <div className="registerForm">
        <ReactFlagsSelect
          // className="countrySelect"
          countries={["IN"]}
          customLabels={{
            IN: "India",
          }}
          selected="IN"
          onSelect={(e) => setCountry(e)}
          placeholder="Select Country"
          disabled={true}
        />
        <TextField
          id="outlined-basic"
          // label="Outlined"
          placeholder="Enter Number"
          type={number}
          variant="outlined"
          style={{
            width: "100%",
            marginTop: "2%",
            borderColor: "#6a8330",
          }}
          onChange={(e) => checkInput(e.target.value)}
          value={number}
          rows="10"
          maxRows={10}
          inputProps={{ maxLength: 10, typeof: "number" }}
          error={error}
        />
        {error ? <p className="error">Please enter valid number</p> : ""}
      </div>
      <Button
        style={{
          backgroundColor: error || disabled ? "gray" : "#6a8330",
          width: "100%",
          color: "#fff",
          borderRadius: "2px",
          margin: "5% 0",
        }}
        id="button-send-otp"
        disabled={error || disabled ? true : false}
        onClick={() => sendOtp()}
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
  );
}
