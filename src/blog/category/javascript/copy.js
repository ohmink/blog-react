export const titleOfCopy = `Shallow copy vs. Deep copy 그리고 변경불가성(Immutability)`;

export const postOfCopy = `
# 
> 이 포스트는 모던 자바스크립트 Deep dive에 대한 블로그 https://poiemaweb.com
를 공부하며 개인적으로 정리하려고 작성한 것입니다.

## 1. Shallow copy vs. Deep copy

코드를 짜다 보면 원하지 않는 객체 값 변경이 발생할 때가 있다.

다음 예를 보자.

\`\`\`
const arr = [1, 2, 3];
const test = arr;

console.log(test);
// [1, 2, 3]

arr[2] = 4;
console.log(test);
// [1, 2, 4]
\`\`\`

코드에서 arr을 변경했으나 결과는 test도 변경된다. test가 선언될 때 새로운 배열을 메모리에 할당하는 것이 아니라 arr의 참조를 할당하기 때문이다.

그렇다면 다음 코드는 어떨까?

\`\`\`
let info = {
	name: 'tester',
	age: 21
}

let name = info.name;
console.log(name);
// tester

info.name = 'jack';
console.log(name);
// tester

name = info.name;
console.log(name);
// jack
\`\`\`

과정은 비슷하지만 name은 info.name으로 재할당하기 전까지 값이 변하지 않는다. 처음 name에 info.name을 할당했을 때 info.name의 참조를 할당하는 것이 아니라 'tester'라는 값이 메모리에 새로 생성되고 name은 이것을 참조하기 때문이다.

첫 예시의 경우가 Shallow copy(얕은 복사)이고 두 번째 예시가 Deep copy(깊은 복사)다.

간단하게 요약하면,

> Shallow Copy : 객체의 참조 값(메모리 주소)를 복사
> Deep Copy : 새로운 메모리 주소에 객체 값을 복사

## 2. 변경불가성(Immutability)과의 관계

Immutability(변경불가성)는 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴을 의미한다. Immutability은 함수형 프로그래밍의 핵심 원리이다.

객체는 참조(reference)  형태로 상태를 전달, 공유, 변경하는데 하나의 참조를 공유하고 있는 데이터가 있을 경우 의도하지 않는 객체 변경이 일어날 수 있다.

이는 같은 주소 값을 참조하고 있는 여러 객체 중, 단 하나라도 객체를 수정하면 다른 객체들도 그 영향을 받는다. 만약 이것이 예상하고 이용한 것이 아니라면 예기치 못한 에러를 발생시킬 것이다.

> 나는 이게 Shallow copy, Deep copy의 심화 과정처럼 느껴졌다.

### immutable value vs. mutable value

\`\`\`
let str = 'simple'; // string은 immutable value
str = 'very simple';
/*
str이 simple에서 very simple로 변경되는 과정에서, simple은 지워지지 않는다.
메모리 상에 simple은 아직도 존재하고 있다.
very simple이라는 string 객체를 새로운 메모리에 생성하고 str은 그것을 가리킨다.
*/

let result = statement.slice(0, 5);

console.log(otherStr);   // 'very'
console.log(result);  // 'very simple'
\`\`\`

이에 대한 대처법은 크게 2가지라고 한다.

> 1. 불변객체를 만들어 프로퍼티 변경을 방지, 수정이 필요한 경우 방어적 복사를 통해 새로운 객체를 생성하고 변경한다.
> 2. 옵저퍼 패턴으로 객체의 변경에 실시간으로 대처한다.

- 객체의 방어적 복사(defensive copy)
Object.assign

- 불변객체화를 통한 객체 변경 방지
Object.freeze
`;
