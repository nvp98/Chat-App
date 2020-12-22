import React from "react";
import Header from "../Components/Header/Header";
export const PrivateLayout = (props) => (
  <>
    <Header />
    <div className="main-content">
      <div className="content_wrap">{props.children}</div>
    </div>
  </>
);
