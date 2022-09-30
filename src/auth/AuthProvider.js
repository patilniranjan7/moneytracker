import React, { createContext, useContext, useState } from "react";
// import { apiClient } from "../config/apiClient";
var CryptoJS = require("crypto-js");

const AuthContext = createContext({
  getUserId: () => { },
  logout: () => { },
  getSubscription: () => { },
  setSubscription: () => { },
  getAll: () => { return {}; },
  setAll: () => { },
});


function AuthProvider(props) {
  const getUserId = () => {
    const {id} =getAll();
    return id;
  };
  const getAll = () => {
    const ciphertext = window.localStorage.getItem("Basic");
    if (ciphertext) {
      var bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_DEFAULT_SECRET_KEY);
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return (decryptedData);
    }
    else return {};
  }
  const setDefults = (data) => {
    const isChatEncryptionEnabled = data.filter(item => item.id === "is_chat_encryption_enabled")[0];
    window.localStorage.setItem("is_chat_encryption_enabled", JSON.stringify(isChatEncryptionEnabled).toString());
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_DEFAULT_SECRET_KEY).toString();
    window.localStorage.setItem("defaultVal", ciphertext);
  }
  const setSubscription = (flag, customerID) => {
    let data = [{ is_subscription_active: flag ? 1 : 0, stripe_customer_id: customerID }]
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_DEFAULT_SECRET_KEY).toString();
    window.localStorage.setItem("status", ciphertext);
  }

  const setAll = (user) => {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(user), process.env.REACT_APP_DEFAULT_SECRET_KEY).toString();
    window.localStorage.setItem("Basic", ciphertext);
  }

  const logout = async () => {
    //console.log("logout api call.");
    try {
    //   await apiClient("POST", "common", "logoutuser", {
    //     body: {},
    //     shouldUseDefaultToken: false,
    //     enableLogging: true,
    //   });

      window.localStorage.clear();
      window.localStorage.setItem('WasLogedIn', true);
      window.location.pathname = "/login";
    } catch (error) {
      //console.log("in catch block");
      window.localStorage.clear();
      window.localStorage.setItem('WasLogedIn', true);
      window.location.pathname = "/";
    }
  };
  return (
    <AuthContext.Provider
      value={{ getUserId, logout, setAll, getAll }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
