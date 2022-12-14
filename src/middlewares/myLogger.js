const myLogger = (store) => (next) => (action) => {
  console.log(action);
  // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달
  const result = next(action);

  // 업데이트 이후의 상태를 조회
  console.log("\t", store.getState());
  return result;
};

export default myLogger;
