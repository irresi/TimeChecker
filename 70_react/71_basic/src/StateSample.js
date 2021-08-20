import React ,{ useState }from "react"

//컴포넌트 내의 동적인 값을 state라고 함.
//Hook -> useState
function StateSample() {
  //[현재state값, 업데이트하는 함수] = useState(초기State값)
  let [color, setColor] = useState("");
  
  return (
    <>
      <div>
        <p style={{ color }}>색상바꾸기</p>
      <button onClick={() => setColor("red")}>빨간색</button>
      <button onClick={() => setColor("blue")}>파란색</button>
      <button onClick={() => setColor("green")}>초록색</button>
      
      </div>
    </>
  );
}
export default StateSample;