import { useState } from 'react';

import HookArray from './HookArray';
import HookArrayCreate from './HookArrayCreate';

function AppArray() {
  const [carArray, setCarArray] = useState([
    {
      id: 1,
      name: 'Fiat',
      color: 'whhite',
    },
    {
      id: 2,
      name: 'Kia',
      color: 'red',
    },
    {
      id: 3,
      name: 'Hyndai',
      color: 'gray',
    },
  ]);

  const [carInput, setCarInput] = useState({
    name: '',
    color: '',
  });

  const { name, color } = carInput;

  // useRef(): 상태값 관리
  const nextId = useRef(4);

  const onCreate = () => {
    setCarInput({
      name: '',
      color: '',
    });
  };

  return (
    <>
      <HookArrayCreate name={name} color={color} onCreate={onCreate} />
      <HookArray carArray={carArray} />
    </>

    // 배열에 내용을 추가
    // 배열에 내용을 제거
  );
}

export default AppArray;
