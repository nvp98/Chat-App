import React, { Suspense } from "react";
import Header from "../Components/Header/Header";

export const PublicLayout = (props) => (
  <>
    <Header />
    <div className="main-content">
      <div className="content_wrap">{props.children}</div>
    </div>
  </>
);
