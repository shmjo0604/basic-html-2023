# basic-html-2023
빅데이터 Java 개발자 과정 Front-End Repository

## 1일차 학습 내용
- 웹 기본 개념
    - HTTP 개요
    - 웹 동작 => "request & response"
- 웹 개발 표준 기술(HTML, CSS, Javascript) 
    - HTML5 기본
        - HTML5 구조 => 요소(element), 태그(tag), 속성(attribute)
        - HTML5 기본 태그
            - head 태그 => meta, title, link, style, script 등
            - a 태그 => 절대 경로, 상대 경로 등
            - list 태그 => ul, ol, li
            - media 태그 => img, audio, video

- 학습 내용 기반 구현 화면
<!--![멀티미디어](https://github.com/shmjo0604/basic-html-2023/blob/main/image/day01.png?raw=true)-->
(1) list, a 태그 활용

<img src="https://raw.githubusercontent.com/shmjo0604/basic-html-2023/main/image/day01_%EA%B8%80%EC%9E%90%ED%83%9C%EA%B7%B8.png" width="700">

(2) media 태그 활용

<img src="https://raw.githubusercontent.com/shmjo0604/basic-html-2023/main/image/day01_%EB%A9%80%ED%8B%B0%EB%AF%B8%EB%94%94%EC%96%B4.png" width="300">

## 2일차 학습 내용
- HTML5 학습
    - HTML5 입력 양식 태그
        - ★ form 태그 => action 속성(데이터 전달 주소(절대경로 or 상대경로)),
                    => method 속성(get 또는 post), get은 전달 데이터가 화면에 표시, post는 데이터가 화면에 표시되지 않음
        - ★ input 태그 => text, hidden, submit, button, checkbox, radio 등 속성 존재
        - select 태그(ComboBox) => option 태그, outgroup 태그
    - HTML5 공간 분할 태그
        - ★ div, span 태그
    - HTML5 시맨트 태그 => header, section, footer 등(div id 또는 class로 선언 가능)
- CSS3 기본
    - 기본 선택자 : all(*), tag, id, class
    - 속성 선택자 : 태그[속성 = 값]
    - 자손 & 후손 선택자 : 자손 vs ★ 후손
    - 반응, 상태, 구조 선택자
- CSS3 속성
    - Box 속성 -> margin, border, padding
    - Display 속성 -> none

- 학습 내용 기반 구현 화면

(1) form 태그 method 속성에 따른 차이

① get 방식

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day02_get%20%EB%B0%A9%EC%8B%9D.png?raw=true" width="500">

② post 방식

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day02_post%20%EB%B0%A9%EC%8B%9D.png?raw=true" width="500">

(2) 기본 선택자(id, class 선택자) 활용 -> Style 적용

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day02_%EA%B8%B0%EB%B3%B8%20%EC%84%A0%ED%83%9D%EC%9E%90.png?raw=true" width="500">

## 3일차 학습 내용
- CSS3 속성
    - Display 속성 -> none, block, inline 등
    - Background 속성 -> image, size, repeat 등
    - Font 속성 -> size, famil 등
    - Position 속성 -> absolute, ★ relative, left, top, z-index
    - Float 속성 -> right, left(★ 수평 정렬 기능)
- CSS 레이아웃
    - 수평 정렬 레이아웃
    - 중앙 정렬 레이아웃
    - flex box 레이아웃
    - grid 레이아웃

- 학습 내용 기반 구현 화면

(1) CSS position(relative, absolute, left, top, z-index)

<img src="" width="500">

(2) normal layout vs grid layout

① normal layout

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day03_normal.png?raw=true" width="500">

② grid layout

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day03_grid.png?raw=true" width="500">

## 4일차 학습 내용

- CSS layout
    - grid layout -> photo gallery(외부 스타일 적용)
- 반응형 웹
    - viewport -> 
    - media query -> screen(or print), min(or max) width, orientation
- Javascript
    - 기본 문법
    - 문서 객체 모델(Document Object Model)
        - 문서 객체 -> 태그
- jQuery
    - 문서 객체 선택 & 조작 => $(선택자) 메소드(매개변수, 매개변수)
    - 이벤트 연결 -> ready(), function 익명 함수
    - 시각 효과 메소드 -> show, toggle, slide, animate 등
- 학습 내용 기반 구현 화면

(1) grid layout - photo gallery

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day04_grid_gallery.png" width="500">

(2) 

## 5일차 학습 내용
- Javascript 학습
- Bootstrap 학습
- 프론트엔드 포트폴리오


