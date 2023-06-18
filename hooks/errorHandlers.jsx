import router from "next/router";
import React, { useState } from "react";

import { useRouter } from "next/router";
import {
  openSignup,
  openLogin,
  logoutUser,
} from "../store/actions/authActions";
import { useAlert, positions } from "react-alert";
import { setAuthDestinationPage } from "../store/actions/authActions";

// ! custom hook to handle errors, mainly in catch blocks
export const AuthHook = () => {
  const alert = useAlert();
  const { pathname } = useRouter();
  const [alertPosition, setAlertPosition] = useState(positions.TOP_CENTER);

  // ! alert info helper
  const alertInfo = (alertText) => {
    return alert.show(alertText, {
      type: "info",
      position: alertPosition,
    });
  };

  const errorHandler = (status) => {
    alert.removeAll();
    console.log(status, "status");
    //  ! sesstion expiry for affiliates

    return alertInfo("Something went wrong.");
  };

  const alertHook = (message = "Submitted") => {
    alertInfo(message);
  };

  return [errorHandler, alertInfo, alertHook];
};
