/*

    이벤트 : 행사 또는 사건
    컴퓨터 이벤트 : 프로그램에 의해 감지되고 처리될 수 있는 사건, 동작
            동작 : 행위, 이벤트, 메소드, 함수
    함수 function : 미리 담아둔 코드 -> 재사용 // 미리 만든 함수 : 라이브러리(코드모음)
        console.log(); document.querySelector(); .push() 등

    JS 데이터 타입
        숫자, 문자, 논리 : 데이터
        배열 : 데이터 여러개
        undefined : 데이터 없음
        *함수 : 코드(데이터) 여러 개

    함수 종류
        미리 만들어진 함수 = 라이브러리 함수
        직접 만들기
            1. 선언적 함수  | 2. 익명 함수 | 3. 화살표 함수*

    함수 : 선언 방법이 정해져 있음

        선언적 함수의 선언 방법
            1. function             : 키워드
            2. 함수명                : 함수 식별용
            3. (매개변수, 매개변수)   : parameter/ 인수, 함수 input, 정해져 있지 않은 수
            4. {코드}
            5. return               : 함수가 종료되며 *{함수가 호출했던 곳}으로 값을 반환

        익명 함수의 선언 방법
            1. function
            2. (매개변수)
            3. {코드}
            4. return

        화살표 함수의 선언 방법
            1. (매개변수)
            2. =>
            3. {코드}
            4. return
*/

// 1. 선언적 함수 선언 방법
function 함수명 (매개변수) {console.log(함수실행); return 반환값;}

// 2. 익명 함수 선언 방법
// function(매개변수) {console.log(함수실행); return 반환값;}

// 3. 화살표함수 선언 방법
// (매개변수) => {console.log(함수실행); return 반환값;}