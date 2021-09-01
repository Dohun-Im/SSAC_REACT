# ssac_react

# React 로컬 개발

## 소프트웨어 \$ 라이브러리 설치

- node.js 설치 / 버전확인
- npm(node package manager) 버전 확인
- yarn 설치 / 버전 확인
- git 설치

### unix/dos 명령어

- clear / cls
- ls. ls -l / dir
- cd
- pwd
- mkdir


- node module : node.js module 폴더
- public : 실제 브라우저에 표시되는 리소스들이 저장되는 폴더
- src : html 파일에 반연되는(렌더링) 콘텐츠, 기능이 구현되어 있는 파일들이 저장되어 있는 폴더
- index.html <= index.js <= App.js(component)

## react

- 공식 문서 : https://ko.reactjs.org/

### Localhost URL

- 로컬서버에서 실행을 할때 사용할 수 있는 키워드 URL
- localhost => IP 주소: 127.0.0.1
- port - URL:port번호
    - 하나의 물리 서버에서 여러개의 서버 SW를 실행할 수 있음

## React의 특징

- Virtual DOM
- SPA(Single Page Application)
- component : 작은 단위로 나누어준 코드 블럭(조각,단위)

### JSX(Jarvascript Syntax Extension / Jarvascripy XML)

- HTML 마크업 언어를 별다른 기호 사용 없이 그대로 Javascript 구문처럼 사용할 수 있는 것
- Babel.js 라이브러리가 JSX를 사용 가능하게 해줌
- JSX는 return 키워드 () 안에 하나의 Element 영역으로 그룹화되어 있어야 한다
- 하나의 영역으로 그룹화 할 때 특정 Element로 그룹화 해서 반영하지 않을 때 - Fragment 사용 - <React.Fragment> 나 축약표현 <> 사용 가능.
- JSX 에서 자바스크립트 변수 값 사용하기
     - {변수이름}
- JSX에서 class, id 지정하기
    - class : className 속성을 사용
    - id : id 속성을 사용
- JSX 주석 : {/*  주석내용 */}

### 구조 분해 할당

### Todo 마크업

### Todo Component
- header
- main 
    - todo-list
        - todo-item
    - status
- footer

### React에서 CSS를 작성/ 사용하는 방식

- App.css에 전체 css를 구성하고 전역으로 사용하는 방식
- Module css 방식 : css를 하나로 구성하지 않고 component 별로 구성
    - component 와 css 파일이 분리되어 잇음
    - 작성 방법
        - 폰트 설정, reset css 등은 App.css 에 전역으로 사용할 수 있게 함
        - 하나의 요소를 선택해서 css를 적용하는 경우 module css를 활용함
- styled-component : 스타일링 된 컴포넌트 ==> component 별로 css를 구성
    - 인라인 방식처럼 사용 => component파일에 css, component contents 같이 작성
    - 렌더링은 Internal 방식으로 됨