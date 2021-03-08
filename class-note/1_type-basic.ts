// js 문자열 선언방식
// var str = 'hello';

// ts 문자열 선언방식
let str: string = 'hello'

// ts 숫자 선언방식
let number: number = 10

// ts 배열 선언방식
let arr: Array<number> = [1, 2, 3]
let heroes: Array<string> = ['captin', 'Thor', 'Hulk']
let personNum: number[] = [1, 2, 3]

// ts 튜플 - array 타입까지 정해주는것을 튜플이라고 함
let names: [string, number] = ['gy', 5]

// ts 객체 선언방식
let obj: object = {}

// let person: object = {
//   name: 'gyeongjin',
//   age: 31
// }

let person: {name: string, age: number} = {
  name: 'gyeongjin',
  age: 31
}

// ts 진위값
let show: boolean = true;
