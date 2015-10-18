React Study
===========

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





테스트는 어떻게 할까?
