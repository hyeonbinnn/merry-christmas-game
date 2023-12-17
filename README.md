# 🎄🎅🏻 Merry Christmas Game
![2](https://github.com/hyeonbinnn/merryxmas-game/assets/117449788/dedb9234-a001-423e-bf5d-1ac6d0b1a75d)

<br>
<br>
<br>

## 개발 환경
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white">

<br>
<br>
<br>

## 구현 기능
- 질문 1개에 선택지 2개 중 하나 택
- 결과 저장
- 문제 정보 저장
- 버튼을 눌렀을 때 점수 올라가게 하기
- 점수올라가면 저장된 문제 가져와서 다음 문제로 넘어가기
- 진행바 질문 개수에 맞게 늘어나도록 변경  
- 마지막 선택 끝나면, 결과 화면 보여주기

<br>
<br>
<br>

## 코드 설명
```jsx
let num = 1;

let q = { ... };
let result = { ... };
```
- <strong>`num`</strong>은 현재 진행 중인 질문 번호를 나타내는 변수이며 <strong>`q`</strong>는 각 질문과 선택지에 대한 데이터가 포함된 객체, <strong>`result`</strong>는 각 MBTI 유형별 결과 데이터가 포함된 객체다.

<br>
<br>

```jsx
function start() {
  $('.start').hide();
  $('.question').show();
  next();
}
```
- 시작 버튼을 누르면 <strong>`start`</strong> 시작화면을 숨기고, <strong>`question`</strong> 질문 화면을 표시한 후, <strong>`next()`</strong> 함수를 호출해 첫번째 질문을 표시한다.

<br>
<br>

```jsx
$('#A').click(function () {
  let type = $('#type').val();
  let preValue = $('#' + type).val();
  $('#' + type).val(parseInt(preValue) + 1);
  next();
});

$('#B').click(function () {
  next();
});
```
- 사용자가 A 또는 B를 선택했을 때, 선택한 유형에 대한 값을 증가시키고, <strong>`next()`</strong> 함수를 호출해 다음 질문으로 이동한다.

<br>
<br>

```jsx
function next() {
  if (num == 13) {
    // 계산이 완료된 경우 결과 화면 표시
    $('.question').hide();
    $('.result').show();

    let mbti = '';
    $('#EI').val() < 2 ? (mbti += 'I') : (mbti += 'E');
    $('#SN').val() < 2 ? (mbti += 'N') : (mbti += 'S');
    $('#TF').val() < 2 ? (mbti += 'F') : (mbti += 'T');
    $('#JP').val() < 2 ? (mbti += 'P') : (mbti += 'J');
    $('#img').attr('src', result[mbti]['img']);
    $('#gift').html(result[mbti]['gift']);
    $('#explain').html(result[mbti]['explain']);
  } else {
    // 다음 질문으로 이동
    $('.progress-bar').css('width', `calc(100/12*${num}%)`);
    $('#title').html(q[num]['title']);
    $('#type').val(q[num]['type']);
    $('#A').html(q[num]['A']);
    $('#B').html(q[num]['B']);
    num++;
  }
}
```
- 현재 질문 번호 <strong>`num`</strong>을 기반으로 다음 질문 또는 결과 화면을 표시하는 함수며, 질문이 모두 끝난 경우 MBTI 유형을 계산하고 결과를 표시한다.
- 앞쪽에 있는 결과만 저장해서 결과가 과반수 이상이면 앞쪽 택, 그게 아니면 뒤쪽을 택한다.

<br>
<br>

```jsx
$('.img-back').click(function () {
  $('.result').hide();
  $('.question').show();
  num = 1;
  next();
});
```
- 결과 페이지에서 이미지 백 버튼을 클릭하면 결과 화면을 숨기고, 현재 진행 번호 <strong>`num`</strong>을 1로 초기화한뒤, 다음 질문을 표시한다.

<br>
<br>
<br>
