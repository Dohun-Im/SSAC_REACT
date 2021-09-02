function HookArrayCreate({ name, color, onCreate }) {
  return (
    <div>
      <input type="text" placeholder="차 이름을 입력해주세요." value={name} />
      <input type="text" placeholder="차 색을 입력해주세요." value={color} />
      <button type="button" onClick={onCreate}>
        추가
      </button>
    </div>
  );
}

export default HookArrayCreate;
