export const titleOfVariableKeyword = `JavaScript에서 변수를 선언하는 세 가지 방식`;

export const variableKeyword = `
> https://poiemaweb.com/es6-block-scope 을 토대로 공부한 내용을 정리한 것입니다.

> 키워드 : 스코프, 호이스팅, TDZ

## var? let? const?
var 키워드는 ES5까지 사용하던 방법이다.
4가지 특징을 가지고 있으며, 심각한 문제를 일으킬 수 있다.
- 보통 전역 스코프에서 발생하는 문제인데, ES6에서는 var의 문제를 해결하기 위해 **let과 const**를 도입했다.

### 1. 함수 레벨 스코프 (중요)
#### var 키워드는 함수 레벨 스코프를 따른다.
> 함수 레벨 스코프(Function-level scope)
함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.

\`\`\`
var test = 'test'; // 전역 변수
console.log(test); // test

{
  var test = 'change'; // 전역 변수
}
console.log(test); // change
\`\`\`

문법적으로 문제는 없으나 변수 test의 값 'test'을 'change'로 재할당하여 덮어쓴다.

#### let, const 키워드는 블록 레벨 스코프를 따른다.
> 블록 레벨 스코프(Block-level scope)
모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등) 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다. 즉, 코드 블록 내부에서 선언한 변수는 지역 변수이다

\`\`\`
let test = 'test';

{
  let test = 'new test';
  let number = 123;
}

console.log(test); // test
console.log(number); // ReferenceError: number is not defined
\`\`\`


### 2. var 키워드 생략 가능

\`\`\`
var test = 123;
console.log(test); // 123

number = 12345;
console.log(number); // 12345
\`\`\`

### 3. 중복 선언 가능

\`\`\`
var test = 'test';
var test = 'change';

let bar = 123;
let bar = 456;  // Uncaught SyntaxError: Identifier 'bar' has already been declared
\`\`\`

- let 키워드는 중복 선언을 했을 경우 SyntaxError가 발생한다.
### 4. 변수 호이스팅(Hoisting) (중요)
다음을 보자.

\`\`\`
console.log(test); // Error: Uncaught ReferenceError: test is not defined
let test = 123;
\`\`\`

- 내가 아는 상식으로는 이게 정상이고, 별로 특별한 게 없어보였다. 하지만 var을 사용하면...

\`\`\`
console.log(test); // undefined
var test = 123;
\`\`\`

- 값 123이 출력되진 않지만, 놀랍게도 오류가 뜨지 않고 undefined가 뜬다.
- 자바스크립트에서는 모든 선언(var, let, const, function, function*, class)을 _**호이스팅**_하기 때문이다.

> 호이스팅(Hoisting)이란?
var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.

- 이런 걸 하는구나! 그런데 var도 호이스팅하고 let도 호이스팅하는데 왜 let은 참조 에러가 발생할까?
- 이는 var과 let의 호이스팅 과정에서 차이가 있기 때문이다.

#### 변수 생성과 호이스팅 과정

1. 선언 단계(Declaration phase)
- 변수를 실행 컨텍스트의 변수 객체(Variable Object)에 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.
2. 초기화 단계(Initialization phase)
- 변수 객체(Variable Object)에 등록된 변수를 위한 공간을 메모리에 확보한다. 이 단계에서 변수는 undefined로 초기화된다.
3. 할당 단계(Assignment phase)
- undefined로 초기화된 변수에 실제 값을 할당한다.


> var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다.
즉, 선언문(ex. test = 123;) 이전에 접근해도 스코프에 변수(undefined)가 존재하기 때문에 에러가 발생하지 않는다.
이후 변수 할당문에 도달하면 값이 할당된다.
-> 이것을 변수 호이스팅이라고 한다.

![](https://images.velog.io/images/kasran1/post/7622205f-82c2-4809-8e02-7ffa5d2918db/image.png)

> let 키워드로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.
- 초기화 이전에 변수에 접근하게 되면 참조 에러가 발생하게 되는 것이다.
- 이는 변수를 위한 메모리 공간이 확보되지 않았다는 뜻이다.(= 초기화가 되지 않았다.)
- 스코프의 시작 지점부터 초기화 시작 지점까지의 구간을 **_일시적 사각지대(TDZ)_**라고 부른다.

![](https://images.velog.io/images/kasran1/post/b8dc6b06-2964-4cd7-900e-05cd4aa22078/image.png)

그렇다면 ES6에서(let, const)는 호이스팅이 발생하지 않는 것과 같지 않나?
나도 그런 줄 알았으나 다음 예제를 보면 그렇지 않다는 것을 알 수 있다.

\`\`\`
let foo = 1; // 전역 변수

{
  console.log(foo); // ReferenceError: foo is not defined
  let foo = 2; // 지역 변수
}
\`\`\`

- ES6의 let은 블록 레벨 스코프를 가지기 때문에 블록 내에서 선언된 foo는 지역 변수다.
- 지역 변수 foo는 해당 블록에서 호이스팅되고, 해당 스코프의 시작 지점부터 초기화 시점까지 TDZ에 빠진다.
- 따라서 전역 변수 foo가 출력되지 않고 참조 에러가 발생한다.


## 기타

### 1. 전역 객체(Global object)와 let
> 자바스크립트의 전역 객체는 일반적으로 **브라우저 측에서는 window**, **서버 측에서는 process와 같은 전역 객체**를 의미한다.

암묵적으로 사용되어 생략되는 경우가 많다고 알고 있는데...
하여튼 var의 경우 다음과 같은 전역 객체의 프로퍼티가 된다.
\`\`\`
var foo = 123; // 전역 변수
console.log(window.foo); // 123
\`\`\`

하지만 let은 다르다.

\`\`\`
let foo = 123; // 전역 변수
console.log(window.foo); // undefined
\`\`\`

- let 전역 변수는 보이지 않는 개념적인 블록 내에 존재하기 때문이다.

### 2. const
const는 let과 대부분 동일하나 다음과 같은 차이점을 가지고 있다.

#### 2.1 선언과 초기화
- let은 재할당이 가능하나 const는 불가능하다.
\`\`\`
const FOO = 123;
FOO = 456; // TypeError: Assignment to constant variable.
\`\`\`
- 또한 const는 선언과 동시에 값의 할당이 이루어져야 한다.
\`\`\`
const FOO; // SyntaxError: Missing initializer in const declaration
\`\`\`
#### 2.2 상수
- 보통 상수에 많이 사용한다.
\`\`\`
// 값의 의미를 명확히 기술하여 가독성이 향상되었다.
const MAXROWS = 10;
if (rows > MAXROWS) {}
\`\`\`
- 네이밍이 적절한 상수로 선언하면 가독성과 유지보수성이 대폭 향상된다.

#### 2.3 const와 객체
- const는 재할당이 금지되어 있지만, 객체의 프로퍼티는 보호하지 않는다. 이는 객체에 대한 참조를 변경하지는 못하지만, 객체의 내용은 변경할 수 있다는 뜻이다.
\`\`\`
const user = { name: 'Lee' };

// const 변수는 재할당이 금지된다.
// user = {}; // TypeError: Assignment to constant variable.

// 객체의 내용은 변경할 수 있다.
user.name = 'Kim';

console.log(user); // { name: 'Kim' }
\`\`\`

- 배열 형태의 객체도 똑같다.
\`\`\`
const test = [1];
console.log(test); // [ 1 ]
test.push(2);
console.log(test); // [ 1, 2 ]
\`\`\`

## var vs. let vs. const
- ES6를 사용한다면 var은 쓰지 않는다.
	나도 JavaScript를 배울 때부터 ES6를 사용해서 var을 써본 적이 없다. 쓸 일이 없었다.
- 재할당이 필요한 경우 let을 사용
	값 변경이 필요한 수학적 연산이나 지속적으로 상태 값이 변경되는 경우 등에 let을 사용한다.
- const를 사용하여 안전하게 변수를 관리하자.
	재할당이 불가능하다는 걸 이용해서 안전성을 높이는 것도 좋은데, 
    팀으로 프로젝트를 진행할 때 보니 _**상수를 이용하는 게 협업할 때 많이 좋더라.**_ 나만 아는 숫자, 문자보다는 훨씬...

`;
