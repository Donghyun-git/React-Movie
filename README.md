# React-Movie

## 프로젝트 구조

React-Movie 프로젝트 CRA로 구성되어 있습니다.

전체 프로젝트 코드는 src 폴더 하위에 있는 코드들입니다.

패키지에 대한 설명은 아래와 같습니다.

## 실행 방법

Package Manager는 `npm` 을 사용하고 있습니다.

```sh
$ npm install
# or
$ npm i
```

dependencies 를 install 합니다.

```sh
$ pnpm install
```

## .env

.env 설정

프로젝트 최상위 경로에서

```sh
$ touch .env
```

명령어 or .env 파일을 생성합니다.

그리고

전달받은 대로 환경변수를 세팅합니다.

## Client

코드를 보는 방법은 root의 `src/index.jsx` 부터 시작해서 코드들을 읽어가면 됩니다.

오픈 api 요청 로직 및 react-router 만 작성된 상태입니다.

추후 개발 작업으로는 Component 및 Page부분을 개발해 나가야합니다.
