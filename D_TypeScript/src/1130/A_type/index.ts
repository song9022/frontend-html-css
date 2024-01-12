// ! void 타입
// : 아무런 값이 없다.
// : 주로 함수에서 반환값이 없거나 return이 있더라도 반환하는 값이 없을 때 사용되는 타입
function voidType(parameter: number): void {
  // 함수의 타입 정의
  // 파라미터와 반환값 정의가 가능
  // return parameter + parameter;
  return;
}

console.log(voidType(3));