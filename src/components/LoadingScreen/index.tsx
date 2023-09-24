import React, { memo } from "react";

type LoadingScreenProps = {};

const LoadingScreen = ({}: LoadingScreenProps) => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default memo(LoadingScreen);
