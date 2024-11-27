// 슬라이더와 관련 요소 가져오기
const fontSizeSlider = document.getElementById('fontSizeSlider');
const textListItems = document.querySelectorAll('.text-list li');

// 슬라이더 값 변경 이벤트 처리
fontSizeSlider.addEventListener('input', function () {
  const newSize = `${this.value}px`; // 슬라이더 값에 px 단위 추가

  // 모든 리스트 항목에 새로운 글씨 크기 적용
  textListItems.forEach(item => {
    item.style.fontSize = newSize;
  });
});
