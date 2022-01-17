import React from "react";

export const Container = ({ style, children }) => {
  return (
    <div style={style} className="max-w-[1280px] m-auto">
      {children}
    </div>
  );
};
