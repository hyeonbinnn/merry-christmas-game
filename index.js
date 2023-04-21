let num = 1;
      let q = {
        1: { "title": "동물원 갈 때 원숭이 코스프레 쌉가능 E <br> 코스프레는 개뿔 죽어도 불가능 I", "type": "EI", "A": "E", "B": "I" },
        2: { "title": "친구가 갑자기 모르는 친구 5명 부르는 거 가능 E <br> 친구가 전화기 꺼내는 순간 도망가서 불가능 I", "type": "EI", "A": "E", "B": "I" },
        3: { "title": "모르는 사람에게 이선균 파스타 성대모사 가능 E <br> 침이 마르고 갑자기 목소리가 안 나와서 불가능 I", "type": "EI", "A": "E", "B": "I" },
        4: { "title": "밥 먹을 때 '만약에~'라는 말이 떠오르면 N <br> 그냥 '밥'이나 먹자 S", "type": "SN", "A": "S", "B": "N" },
        5: { "title": "자고 일어나면 내가 좋아하는 아이돌이 남편으로 바꼈으면 N <br> 절대 네버에버 그럴 일 없으니 침이나 닦고 잠이나 자기를 S", "type": "SN", "A": "S", "B": "N" },
        6: { "title": "알록달록 꽃을 보면 한 편의 영화가 머리를 스쳐지나가면 N <br> 꽃은 알록달록하고 나무는 초록색인디 S", "type": "SN", "A": "S", "B": "N" },
        7: { "title": "지나가는 사람이 갑자기 눈물을 흘리면 그냥 쳐다보고 가기 T <br> 뭐 때문에 눈물을 흘릴까? 궁금하고 도와주고 싶다 F", "type": "TF", "A": "T", "B": "F" },
        8: { "title": "누가 날 싫어한다고 하면 피식 썩소 날리고 조용히 연장 챙기기 T <br> 울분이 차오르면서 날 왜 싫어할까? 대체 왜? 100가지 생각하기 F ", "type": "TF", "A": "T", "B": "F" },
        9: { "title": "친구가 천하의 쓸데없는 부탁을 하면 조용히 가운데 손가락 올리기 T <br> 거절하면 상처입지 않을까... 마음 졸이며 고개 끄덕이기 F ", "type": "TF", "A": "T", "B": "F" },
        10: { "title": "여행은 엑셀부터가 시작이다 J <br> 무슨? 여행은 당일에 검색이지~ 황남빵 먹고싶다 P", "type": "JP", "A": "J", "B": "P" },
        11: { "title": "핸드폰을 보며 음... 한 달 스케줄이 꽉 차 있군 T <br> 뭐? 오늘이 아빠 생일이라고? 왓더~ P", "type": "JP", "A": "J", "B": "P" },
        12: { "title": "오전에 운동갔다가 이제 힙합댄스학원 갈 시간이네? J <br> 오늘까지 전공과제 제출이었네... 모르겠다~ 그냥 내일 제출해야지 P", "type": "jp", "A": "J", "B": "P" },
      };

      let result = {
        "ISTJ": {"animal":"ISTJ - 악어", "explain": "당신은 세렝게티에서 같은 종족이 가만히 있는 걸 견딜 수 없어 매일 날카로운 이빨로 으드득으드득 잔소리를 하는 악어네요~ 웁스! 이런 걸 현실세계에서는 틀딱이라고 하죠~ 그럼, 화이팅!!", "img": "./images/crocodile.png"},
        "ISFJ": {"animal":"horse", "explain": "당신은 세렝게티에서 절대 살아남을 수 없는 소심 그잡채 토끼네요~ 지금도 이 글을 인정할 수 없어서 입만 대빵 삐죽 내밀고 있죠? 웁스! 이런 걸 현실세계에서는 극소심충이라고 하죠~ 그럼, 화이팅!!", "img": "./images/rabbit.png"},
        "ISTP": {"animal":"ISTP - ", "explain": "당신은 세렝게티에서 인생 개썅마이웨이로 살아가는 공감능력 제로 노답 치타네요~ 웁스! 이런 걸 현실세계에서는 충고를 해도 처듣지를 않는 정신승리 닝겐이라고 하죠~ 그럼, 화이팅!!", "img": "./images/cheetah.png"},
        "ISFP": {"animal":"ISFP - 곰", "explain": "당신은 세렝게티에서 만사 귀찮음을 이기지 못하고 다른 동물들이 답답해서 한대 쥐어박고 싶은 멍텅구리 곰이네요~ 웁스! 이런 걸 현실세계에서는 융통성 제로 콜라라고 하죠~ 그럼, 화이팅!!", "img": "./images/bear.png"},
        "INTJ": {"animal":"INTJ - 표범", "explain": "당신은 세렝게티에서 자신의 이익을 위해 사자와 호랑이를 이간질하는 표범이네요~ 그러다 둘에게 잡아먹히고 말텐데~ 웁스! 이런 걸 현실세계에서 주둥이만 나불거리는 정치질이라고 하죠~ 그럼, 화이팅!!", "img": "./images/leopard.png"},
        "INFJ": {"animal":"INFJ - 원숭이", "explain": "당신은 세렝게티에서 큰 동물 뒤에 비겁하게 숨어다니는 원숭이네요~ 어쩔 땐 지나가는 동료 원숭이에게 썩은 바나나를 강요해요~ 웁스! 이런 걸 음침한 오타쿠라고 볼 수 있죠~ 그럼, 화이팅!!", "img": "./images/monkey.png"},
        "INTP": {"animal":"horse", "explain": "당신은 세렝게티에서 잡아먹힐까 하루종일 쓸데없는 고민만하고 있는 라쿤이네요~ 웁스! 이런 걸 현실세계에서는 자기합리화 개쩌는 귀차니즘 AI닝겐이라고 할 수 있죠~ 그럼, 화이팅!!", "img": "./images/raccoon.png"},
        "INFP": {"animal":"horse", "explain": "당신은 세렝게티에서 다양한 동물과 인사를 하고 지내지만, 존재감이 1도 없는 다람쥐네요~ 웁스! 이런 걸 현실세계에서는 365일 찐따라고 하죠~ 그럼, 화이팅!!", "img": "horse.png"},
        "ESTJ": {"animal":"ESTJ - 호랑이", "explain": "당신은 세렝게티에서 살아남기 위해 대장인 척 하는데... 결국, 사자에게 밀려서 피눈물을 흘리고 피똥을 싸네요~ 웁스! 이런 걸 현실세계에서는 젊은 꼰대라고 하죠~ 그럼, 화이팅!!", "img": "./images/tiger.png"},
        "ESFJ": {"animal":"horse", "explain": "말 설명", "img": "horse.png"},
        "ESTP": {"animal":"horse", "explain": "말 설명", "img": "horse.png"},
        "ESFP": {"animal":"horse", "explain": "말 설명", "img": "horse.png"},
        "ENTJ": {"animal":"horse", "explain": "말 설명", "img": "horse.png"},
        "ENFJ": {"animal":"horse", "explain": "말 설명", "img": "horse.png"},
        "ENTP": {"animal":"horse", "explain": "말 설명", "img": "horse.png"},
        "ENFP": {"animal":"horse", "explain": "말 설명", "img": "horse.png"}
      }

      function start() {
        $(".start").hide();
        $(".question").show();
        next();
      }

      $("#A").click(function () {
        let type = $("#type").val();
        let preValue = $("#" + type).val();
        $("#" + type).val(parseInt(preValue) + 1);
        next();
      });

      $("#B").click(function () {
        next();
      });

      function next() {
        if (num == 13) {
          $(".question").hide();
          $(".result").show();

          let mbti = "";
          ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
          ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
          ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
          ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
          $("#img").attr("src",result[mbti]["img"]);
          $("#animal").html(result[mbti]["animal"]);
          $("#explain").html(result[mbti]["explain"]);

        } else{
        $(".progress-bar").attr("style",'width: calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
        }       
      }