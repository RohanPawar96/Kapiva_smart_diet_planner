import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UserContactValiation from "./PopUp/UserContactValiation";
import UserOtpVerification from "./PopUp/UserOtpVerification";
// import { In } from "react-flags-select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Verification = ({ open, setOpen, UtmSorce, UtmMedium, Campaign }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const [error, setError] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [showOtp, setShowOtp] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [otpTrack, setOtptrack] = React.useState("");

  // console.log(error && number.length !== 0 ? true : false);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="closing-back">
          <ArrowBackIcon
            onClick={() => {
              // handleClose();
              setShowOtp(false);
              setChecked(true);
              setNumber("");
            }}
            style={{
              marginLeft: "2%",
              display: showOtp === false ? "none" : "block",
            }}
          />
          <CloseIcon
            onClick={() => {
              setOpen(false);
              handleClose();
            }}
            style={{ marginRight: "2%", marginLeft: "2%" }}
          />
        </div>
        {showOtp === false ? (
          <UserContactValiation
            setShowOtp={setShowOtp}
            showOtp={showOtp}
            setChecked={setChecked}
            checked={checked}
            setNumber={setNumber}
            number={number}
            setError={setError}
            error={error}
            setOtptrack={setOtptrack}
          />
        ) : (
          <UserOtpVerification
            setShowOtp={setShowOtp}
            showOtp={showOtp}
            setChecked={setChecked}
            checked={checked}
            setNumber={setNumber}
            number={number}
            setError={setError}
            error={error}
            otpTrack={otpTrack}
            setOtptrack={setOtptrack}
            UtmSorce={UtmSorce}
            UtmMedium={UtmMedium}
            Campaign={Campaign}
          />
        )}
      </Dialog>
    </div>
  );
};

export default Verification;
