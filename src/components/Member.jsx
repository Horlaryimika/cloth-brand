import React from "react";

const Member = () => {
  console.log("member component is rendering!");
  return (
      <div className=" text-center py-2">
        <p>Members : Free Shipping on Orders $50+</p>
        <a href="#" className="underline">Join now</a>
      </div>
  );
};

export default Member;
