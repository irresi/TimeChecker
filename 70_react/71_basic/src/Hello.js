import React from "react";
import PropTypes from "prop-types";

//const props = {name: "황만근"}
function Hello({name="이름 없음2", color="red", children ="태그 내 텍스트 X2",isLoggedIn}) {
  
  return (
    <>
      <div style={{ color }} >
      Hello, {name || "이름없음"}
      </div>
      <div>{isLoggedIn && '로그인되었습니다'}</div>
    </>
  );
}

//Default Props
Hello.defaultProps = {
  name: "이름 없음",
  color: "black",
  children: "태그 내 텍스트 X"
};

Hello.protoTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}
export default Hello;