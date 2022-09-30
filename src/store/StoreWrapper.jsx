import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../auth/AuthProvider";

export const StoreWrapper = (props) => {
  return (
    <Provider store={store}>
      <AuthProvider>{props.children}
      </AuthProvider>
    </Provider>
  );
};
