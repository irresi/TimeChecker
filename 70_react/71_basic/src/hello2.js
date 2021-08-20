import React from "react";
import PropTypes from "prop-types";
//id=0,name="이름없음",color="black", children ="별명없음"
function Hello2({messages}) {
  return (
    <>
      <div>
        <div style={{ color }} >
           Hello, {name || "이름없음"}
        </div>
      </div>
    </>
  );
}
Hello2.protoTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
export default Hello2;