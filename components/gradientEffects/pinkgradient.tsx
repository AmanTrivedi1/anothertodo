import React from "react";

const PinkGradient = () => {
  return (
    <div>
    
  <div className="h-full w-full"> 
    <div className="absolute inset-0 -z-50 pointer-events-none">
      <div className="absolute inset-0 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-70"></div>
      <div className="absolute inset-0 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-black to-black opacity-70 animate-pulse"></div>
      <div className="absolute inset-0 w-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-700 via-black to-black opacity-70 animate-pulse delay-1000"></div>
    </div>
  </div>
</div>
    
  );
};

export default PinkGradient;
