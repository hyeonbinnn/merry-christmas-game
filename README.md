## 세렝게티 동물 MBTI 테스트

### 개발 환경

- Bootstrap
- HTML
- CSS
- JavaScript
- jQuery

### 기능

- 질문 1개에 선택지 2개 중 하나 택
  - 결과 저장
  - 문제 정보 저장
  - 버튼을 눌렀을 때 점수 올라가게 하기
  - 점수올라가면 저장된 문제 가져와서 다음 문제로 넘어가기
  - 진행바 질문 개수에 맞게 늘어나도록 변경  
- 마지막 선택 끝나면, 결과 화면 보여주기
  - 자신에게 맞는 세렝게티 동물을 찾아주고 MBIT 성격에 따른 멘트 결과 보여주기
- 공유 기능, 광고 배너 삽입

### MBTI 로직 만들기

1. E/I
2. S/N
3. T/F
4. J/P

- 앞쪽에 있는 결과만 저장해서 결과가 과반수 이상이면 앞쪽 택, 그게 아니면 뒤쪽 택
