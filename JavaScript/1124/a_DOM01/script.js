// ! 문서 객체 가져오기
// head, body, title요소
// : document.head
// : document.body
// : document.title

// ? body요소 내부에서 만든 다른 요소들
// : querySelect(선택자)
// : querySelectAll(선택자)

// ! 글자 조작하기
// ? 문서객체.textContent
// : 입력된 문자열을 그대로 넣습니다.

// ? 문서객체.innerHTML
// : 입력된 문자열을 HTML형식으로 넣습니다.

document.addEventListener('DOMContentLoaded',
() => {
  const a = document.querySelector('#textContant');
  const b = document.querySelector('#innerHTML');

  a.textContent = '<h2>textContant 속성</h2>'; 
  b.innerHTML = '<h2>textContant 속성</h2>';
})

// ! 속성 조작하기
// : 문서 객체의 속성을 조작

// ? 문서객체.setAttribute(속성이름, 값)
// : 특정 속성에 값을 지정

// ? 문서객체.getAttribute(속성이름)
// : 특정 속성을 추출

document.addEventListener('DOMContentLoaded',
() => {
  const rects = document.querySelectorAll('rect');

  rects.forEach((rect, index) => {
    const width = (index + 1) * 100;
    // 이미지 경로에서 너비와 높이를 지정하는 방법
    // 이미지 경로 url/너비/높이
    const src = './cat.jpg';
    rect.setAttribute('src', src);
  })
})

// ! 스타일 조작하기
// : 문서 객체의 스타일 조작 시에는 style속성을 사용

// ? 스타일 속성 지정 시 주의점
// style속성은 객체
// : 해당 객체 내부에 CSS를 사용하여 스타일 속성을 지정
// : 속성값은 CSS에서 사용하는 값과 동일
// : 속성명의 경우 >> 