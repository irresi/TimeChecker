import React from 'react';
//import Hello2 from './hello2';
import Hello from './Hello';
import StateSample from './StateSample';
import StateSample2 from './StateSample2';
import InputSample from './InputSample';

import './App.css'
//함수형 컴포넌트
//JSX를 return
// 1. 두개 이상의 태그는 반드시 하나의 태그로 감싸야 한다.
// 2. 여는 태그와 닫는 태그가 있어야 함
// 3. JSX 안에서 javascript 값 사용할 때에는 {} 
// 4. 인라인 style 작성 시 객체로 작성 CamelCase
// 5. css class 설정시 class-> className
// 6. 주석 작성 ({ /* */}), 여는 태그에서는 //
function App() {
  return <InputSample />

}

function App2() {
  const name = "react";
  const style = {
    backgroundColor: "yellow",
    color: "blue",
    fontSize: 30,
  }
  return ( //태그를 2개 이상 작성할 때는 부모 태그로 감싸야 한다.
    <>
      {/*주석*/}
        
      <div style={style}>{name}</div>
      <div className = "box"></div>
      <Hello name="이재환" color="blue" isLoggedIn>
        molamola
      </Hello>
      
    </>
    
  );
}

export default App;
