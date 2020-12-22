import React, { Suspense } from "react";


export const PublicLayout = (props) => (
    <Suspense
    
  >
    <div className="public-layout">{props.children}</div>
  </Suspense>

);