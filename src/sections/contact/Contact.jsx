import React from "react";

// IMPORT OTHERS HERE //
import appStyles from "./Contact.module.scss";

const Contact = () => {
  return (
    <main className={appStyles["main-cnt"]} id="contact">
      <div className={appStyles.card}>
        <div className={appStyles["Email-cnt"]}>Email: varshneypiyush67@gmail.com</div>
        <div className={appStyles["mobile-cnt"]}>Mobile: 8191816142, 9084285500</div>
      </div>
    </main>
  );
};

export default Contact;
