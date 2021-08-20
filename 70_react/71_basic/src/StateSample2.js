import React ,{ useState }from "react"

//컴포넌트 내의 동적인 값을 state라고 함.
//Hook -> useState
function StateSample2() {
  //[현재state값, 업데이트하는 함수] = useState(초기State값)
  let [items, setItems] = useState([]);
  let [number, setNumber] = useState(1);
  
  const addItem = () => {
    //items라는 배열에 
    //{ id: number, value: number } 추가
    // number+1  
    setNumber(number + 1);
    setItems([...items, { id: number ,value: number}]);
  }
  return (
    <>
      <button onClick={addItem}>add Item</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>
        })}
      </ul>
    </>
  );
}
export default StateSample2;