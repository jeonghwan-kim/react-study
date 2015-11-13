React Study
===========

## 코드 실행

Start develpment:

```
./serve.sh
```

Run server:

```
python -m SimpleHTTPServer 9000
```


## Note Taking

### [React] 배우는 방법

http://mobicon.tistory.com/461

* Virtual DOM을 사용해서 빠르다

### React > Docs

#### 시작해보기: Hello world

http://reactkr.github.io/react/docs/getting-started-ko-KR.html

#### 튜토리얼: CommentBox

http://reactkr.github.io/react/docs/tutorial-ko-KR.html

* jsx란 뭘까?
* this.props 불변
* this.state 가변
* this.refs 폼 필드 접근 핸들러

#### 리엑트로 생각해 보기: 데이터 바인딩에 관하여

http://reactkr.github.io/react/docs/thinking-in-react-ko-KR.html

* 1단계: UI를 계층구조의 컴포넌트롤 분쇄하세요. JSFeddle
* 2단계: 정적 버전을 만드세요
* 3단계: UI State의 표현을 작지만 완전하도록 확인하세요. State를 정의하자: 사용자가 입력한 검색어, 체크박스의 값
* 4단계: 어디서 state가 유지되어야 하는지 확인하세요. State 관리 컴포넌트 정하기
* 5단계: 반대방향 자류 흐름을 추가하세요.

#### JSX 깊이보기

http://reactkr.github.io/react/docs/jsx-in-depth-ko-KR.html

#### JSX 스프레드 어트리뷰트: 이상한 문법?

http://reactkr.github.io/react/docs/jsx-spread-ko-KR.html

#### JSX Gotchas: xss 관련

http://reactkr.github.io/react/docs/jsx-gotchas-ko-KR.html

#### 상호 작용 및 동적 UI: state에 관하여

http://reactkr.github.io/react/docs/interactivity-and-dynamic-uis-ko-KR.html

* 오토바인딩, 이벤트 델리게이션
* 컴포넌트는 그냥  state 머신일 뿐
* 어떤 컴포넌트가 state를 가져야 할까요? → 유저 인풋, 서버 요청, 시간의 경과에 반응해야 할 필요가 있습니다. 이럴 때 state를 사용합니다.
* 가능한 한 컴포넌트가 상태를 가지지 않도록(stateless) 하세요

#### 복합 컴포넌트

http://reactkr.github.io/react/docs/multiple-components-ko-KR.html

* 소유권: 컴포넌트는 자신의 props를 변경할 수 없다.
* 비교조정?
* 동적자식(?): 궁금했던 key에 대한 단서

#### 재사용 가능한 컴포넌트

http://reactkr.github.io/react/docs/reusable-components-ko-KR.html

* Prop 검증?
* 믹스인?
* ES6 클래스?

#### Props 전달

http://reactkr.github.io/react/docs/transferring-props-ko-KR.html

* rest property(...) 에 대해 조금 알겠다. jsx --harmony 플래그 사용해야 함.

#### 폼

http://reactkr.github.io/react/docs/forms-ko-KR.html

* 폼을 위한 props: value, checked, selected
* 모든 이벤트는 onChange로 감지

#### 브라우져에서의 동작

http://reactkr.github.io/react/docs/working-with-the-browser-ko-KR.html

* React.findDOMNode(component): 돔 노드의 참조를 얻음
* 현재의 React 컴포넌트를 위해 this를, 소유한 컴포넌트의 참조를 얻기 위해 refs를 사용
* 컴포넌트 생명주기: Mounting/Updating/Unmouning 시점이 있고 각 훅을 제공함.

#### ref 심화

http://reactkr.github.io/react/docs/more-about-refs-ko-KR.html

* 자식 컴포넌트 접근을 위해 `this.refs` 사용
* 이점, 주의

#### 애니메이션

http://reactkr.github.io/react/docs/animation-ko-KR.html

* ReactCSSTransitionGroup
* key 어트리뷰트에 대한 단서
> ReactCSSTransitionGroup의 모든 자식은 key 어트리뷰트를 반드시 만들어야 합니다. 한 아이템을 렌더한다 해도 예외는 아닙니다. 키는 React가 어떤 자식이 들어오고, 나가고, 머무르는지 파악할 때 사용합니다.
* 자식들에게 트랜지션을 적용하려면 ReactCSSTransitionGroup은 이미 DOM에 마운트되어 있어야 합니다.
* 각 포인트별 후커

#### 양방향 바인딩 헬퍼

http://reactkr.github.io/react/docs/two-way-binding-helpers-ko-KR.html

* ReactLink
* React는 기본적으로는 단방향 데이터 흐름임.
>ReactLink는 얇은 레퍼고 onChange/setState()패턴 부분의 관례일 뿐입니다. React 애플리케이션에서의 데이터 흐름을 근본적으로 바꾸지는 않습니다.
* mixin에 대한 단서

#### 테스트 유틸리티

http://reactkr.github.io/react/docs/test-utils-ko-KR.html

* [Jest](https://facebook.github.io/jest/)
* 테스트는 어떻게 할까? 위 링크 참고


#### 성능도구

http://reactkr.github.io/react/docs/perf-ko-KR.html

### [처음 시작하는 리액트 : UI를 위한 자바스크립트 라이브러리 ReactJS](http://www.hanbit.co.kr/ebook/look.html?isbn=9788968487750)

#### 1. React 소개

#### 2. JSX

* JavaScript XML
* 순수 js에 비해 디버깅 용이
* &&의 특수한 사용법
* class가 아닌 className

#### 3. 컴포넌트 라이프 사이클

초기화:

* getDefaultProps
* getInitialState: 인스턴스 생성시 마다 호출
* componentWillMount
* render
* componentDidMount: 실제 돔을 조작할수 있는 시점

실행시:

* ComponentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate
* componentDidUpdate

분해와 정리:

* componentWillUnMount

안티패턴들


#### 4. 데이터 흐름

* React 컴포넌트는 props, state 두 값을 이용해 가상 표현 객체를 생성하는 함수
* props
* state: setState()나 getInitialStat에서 기본값 설정

#### 5. 이벤트 처리

#### 6. 컴포넌트 구성

* 상속이 아닌 구성, 결합
* 자식 컴포넌트가 부모 컴포넌트로 이벤트를 알리는 방법

#### 7. 믹스인

> 믹스인은 코드 반복을 제거하고 컴포넌트가 필요한 부분에만 집중할 수 있게 도와주는 강력한 도구다

#### 8. Dom 조작

* componentDidount에서 getDomNode()로 접근. 제한적으로 사용해야
* autoComplete

#### 9. 폼

* 비제어 컴포턴트. 부모 컴포넌트가 제어할 수 없는. defaultValue, ref
* 제어 컴포넌트. 부모 컴포넌트가 제어할 수 있는. value를 부모 컴포넌트의 상태에 저장.
* 폼 이벤트. Synthetic event 사용
* lable에서 for를 사용할 수 없음. js 예약어. htmlFor를 사용. className도 마찬가지.
* 포커스, autoFocus. 기본적으로 제공함 

사용성

* 요구사항을 명확하게 제시하라
* 지속적으로 피드백을 제공하라 
* 속도에 신경써라 
* 예측 가능하게 만들어라 
* 접근성을 높여라 
* 사용자 입력은 적을 수록 좋다 

#### 10. 애니메이션

* Not imperative, React is declarative 
* 태랜지션 클래스 스타일 적용. angular animation과 비슷함


#### 11. 성능개선

* shouldComponentUpdate
* 개발자 도구에서 React.addons.Pref.start()로 측정
* key 사용. 여기서 나오는군.


#### 12. 서버 사이드 렌더링

* 검색엔진 노출을 위해 서버 사이드 렌더링이 필요한데 React Virtual DOM이 그 역할을 할 수 있다.
* React.renderToString
* React.renderToStaticMarkup



#### 13. React 패밀리

#### 14. 개발 도구

#### 15. 테스트

#### 16. 설계 패턴

#### 17. 그밖의 사용법

## 공부할 것

* ~~Examples~~
* [Jest](https://facebook.github.io/jest/)
* Webframeworks

* [React fullstack](https://github.com/kriasoft/react-starter-kit)



