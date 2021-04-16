// Array
let arr: number[] = [1, 2, 3];

// Generic
let genericArr: Array<number> = [1, 2, 3];

// Tuple: 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식
let tupleArr: [string, number] = ['hi', 10];

// Enum: 특정 값(상수)들의 집합
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;
console.log(hero);

// let hero: Avengers = Avengers[0];

// enum Avengers { Capt = 2, IronMan, Thor }

// let hero: Avengers = Avengers[2];
// let hero: Avengers = Avengers[4];

// Any : 모든 타입에 대해 허용한다는 의미
let str: any = 'hi';
let num: any = 10;
let arr2: any = ['a', 2, true];


// Never: 함수의 끝에 절대 도달하지 않는다는 의미
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미

// function neverEnd(): never {
//     while(true) {

//     }
// }

