// 함수의 파라미터에 타입을 정의하는 방식
function add(a: number, b: number) {
  return a + b
}

add(10, 20)

// 함수의 반환 값에 정의하는 방식
function add2(): number {
  return 10
}

// 함수에 타입을 종합해서..

// 함수에 optional 파라미터
function log(a: string, b?: string) {}

log('hello world')
log('hi', '10')
