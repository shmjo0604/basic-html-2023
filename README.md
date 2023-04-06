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

- 학습 내용 구현 화면
<!--![멀티미디어](https://github.com/shmjo0604/basic-html-2023/blob/main/image/day01.png?raw=true)-->
(1) list, a 태그 활용

<img src="https://raw.githubusercontent.com/shmjo0604/basic-html-2023/main/image/day01_%EA%B8%80%EC%9E%90%ED%83%9C%EA%B7%B8.png" width="700">

(2) media 태그 활용

<img src="https://raw.githubusercontent.com/shmjo0604/basic-html-2023/main/image/day01_%EB%A9%80%ED%8B%B0%EB%AF%B8%EB%94%94%EC%96%B4.png" width="700">

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

- 학습 내용 구현 화면

(1) form 태그 method 속성에 따른 차이

① get 방식

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day02_get%20%EB%B0%A9%EC%8B%9D.png?raw=true" width="800">

② post 방식

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day02_post%20%EB%B0%A9%EC%8B%9D.png?raw=true" width="800">

(2) 기본 선택자(id, class 선택자) 활용 -> Style 적용

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day02_%EA%B8%B0%EB%B3%B8%20%EC%84%A0%ED%83%9D%EC%9E%90.png?raw=true" width="800">

## 3일차 학습 내용
- CSS3 속성
    - Display 속성 -> none, block, inline 등
    - Background 속성 -> image, size, repeat 등
    - Font 속성 -> size, family 등
    - Position 속성 -> absolute, ★ relative, left, top, z-index
    - Float 속성 -> right, left(★ 수평 정렬 기능)
- CSS 레이아웃
    - 수평 정렬 레이아웃
    - 중앙 정렬 레이아웃
    - flex box 레이아웃
    - grid 레이아웃

- 학습 내용 구현 화면

(1) CSS position(relative, absolute, left, top, z-index)

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day03_position.png?raw=true" width="800">

(2) normal layout vs grid layout

① normal layout

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day03_normal.png?raw=true" width="800">

② grid layout

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day03_grid.png?raw=true" width="800">

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
- 학습 내용 구현 화면

(1) grid layout - photo gallery

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day04_grid_gallery.png" width="800">

(2) 

## 5일차 학습 내용
- Javascript + jQuery 응용
    - 입력 양식 포커스
    - 프레임 애니메이션
    - 문서 객체 추가
    - 무한 스크롤
    - 플러그인 -> lightBox, Masonry, bxSlider 등
- Bootstrap 학습
    - ★ container -> row & column
    - grid -> (1개 row => ★ 12개 column 구조)
    - form & component
    - icon
    - Bootstrap Album example cloning(Theme 변경 버튼까지)
- 학습 내용 구현 화면

(1) Bootstrap grid layout

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day05_bootstrap_grid.png" width="800">

(2) Bootstrap form

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day05_bootstrap_form.png" width="800">

(3) Bootstrap component

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day05_bootstrap_comp.png" width="800">

## 6일차 학습 내용
- Bootstrap 학습
    - Bootstrap Album example cloning
- Pinterest Style Web cloning(to be continued)

- 학습 내용 구현 화면

(1) Bootstrap Album example cloning

① light mode

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day06_bootstrap_example_light.png" width="800">

② dark mode

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day06_bootstrap_example_dark.png" width="800">

## 7일차 학습 내용
- Pinterest Style Web cloning
    - Bootstrap 5.3.0
    - jQuery 3.6.4
    - Masonry layout library
    - Imageloaded library
    - lightBox
- Parallax Scrolling Web cloning
    - Bootstrap 5.3.0
    - jQuery 3.6.4
- Single Page Template cloning(to be continued)

- 학습 내용 구현 화면

(1) Pinterest Style Web cloning

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day07_pinterest_web.gif" width="800">

(2) Parallax Scrolling Web cloning

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day07_parallax_web.gif" width="800">

## 8일차 학습 내용
- Single Page Template(GrayScale) cloning 
    - 메뉴 탭 반응형 추가, 스크롤 이벤트에 따른 메뉴 Active 추가
    - Bootstrap 5.3.0
    - jQuery 3.6.4

- 실습 구현 화면

(1) Single Page Template(GrayScale) cloning

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day08_grayscale_web.gif" width="800">

## 9일차 학습 내용
- SB Admin Web Template Cloning(to be continued)
    - Bootstrap 5.3.0
    - jQuery 3.6.4
    - Chart.js
    - 현재 진행 상태
        - 기본적인 레이아웃(+반응형) 및 디자인 완료(by Bootstrap & CSS)
        - 사이드 메뉴 버튼 클릭에 따른 사이드 메뉴 활성 및 비활성 상태 전환 완료(by CSS & Javascript)
        - Area Chart & Bar Chart 영역 구현(by Chart.js Libary)
        - Data Table 영역 데이터 추가(only Data)
    - 미해결 사항
        - (1) 사이드 메뉴 활성 상태 시, nav-brand 영역 글자가 사라지는 현상 수정
        - (2) 반응형 웹 구현(992px이하일 때, 메뉴 버튼 클릭 시, content 영역 어둡게 처리)
        - (3) Data Table 영역 구현

- 실습 구현 화면    

(1) SB Admin Web Template Cloning

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day09_SB_Admin.gif" width="800">

## 10일차 학습 내용
- SB Admin Web Template Cloning
    - Bootstrap 5.3.0
    - jQuery 3.6.4
    - Chart.js
    - [simple-datatables.js](https://github.com/fiduswriter/simple-datatables)
    - 해결 사항 및 추가 사항
        - (1) nav-brand 영역의 z-index 값을 사이드 메뉴 영역보다 높게 설정하는 것으로 해결
        - (2) 기본 설정으로 메뉴 버튼 클릭 시, content 영역을 어둡게 처리하는 소스 코드 추가
                & 992px 이상일 때, media query 추가 -> 어둡게 처리하는 기능을 삭제
        - (3) simple-datatables.js library 이용
- Bootstrap Example Header 1개 선택 후 구현 실습
    - Bootstrap 5.3.0

- 실습 구현 화면

(1) SB Admin Web Template Cloning

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day10_SB_Admin.gif" width="800">

(2) Bootstrap Example Header

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day10_bootstrap_example_header.png" width="800">

## 11일차 학습 내용
- 《Do it! HTML5+CSS3 웹 표준의 정석》프로젝트 실습
    - HTML5
    - CSS3
    - Javascript(& jQuery 3.6.4)
    - 미해결 사항
        - (1) 이미지 슬라이드 -> javascript DOM으로는 기능을 구현했으나, 동일한 기능을 jQuery로 구현하는 데 실패

- HTML(교재 실습 프로젝트 & SB-Admin Template) -> JSP(MVC Model 2 적용)
    - JSP & Servlet
    - Apache Tomcat v10.1
    - 기본 HTML, CSS, Javascript 파일을 기반으로 JSP 생성(View) 및 Servlet(Controller) 연결
    - 웹 서버 주소를 통해 JSP 파일 접근 및 이동

- 실습 구현 화면

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day11_do_it_project.gif" width="800">

## 12일차 학습 내용
- [Freelancer Template](https://startbootstrap.com/theme/freelancer) Cloning
    - Bootstrap 5.3.0
    - jQuery 3.6.4
    - 현재 진행 상태
        - 기본적인 Bootstrap 레이아웃 완료
        - 포트폴리오 영역(Modal 미구현) & 아이콘 위치 조정 실패
        
- 실습 구현 화면

<img src="https://github.com/shmjo0604/basic-html-2023/blob/main/image/day12_freelancer_web.gif" width="800">


