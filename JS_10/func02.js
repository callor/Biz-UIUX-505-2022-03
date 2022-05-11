// 변수선언
// 선언과 동시에 값 지정, 선언과 동시에 초기화
const num1 = 10;
// num1 = 30 : const 로 선언한 변수에는 다시 값을 저장할수 없다

// 선언과 동시에 값 지정 또는 선언 후 값 지정
// 선언과 초기화 동시에 하지 않아됨

let num2;
num2 = 100; // 이후에 값을 다시 저장(변경) 할수 있음
num2 = 200;

// 함수 선언
// 매개변수로 num1 을 갖는 func1 이라는 이름의 함수 선언
// 함수의 코드를 실행하려면 이후에 호출해 주어야 한다.
function fun1(num1) {
  console.log(num1);
}
fun1();
fun1(100);

// 두개의 아규먼트(매개변수)를 갖는 add 함수 선언
// 이 함수는 두개의 아규먼트 값을 덧셈하여 return 한다
// public  void method()
// public int method()
function add(num1, num2) {
  return num1 + num2;
}
const result1 = add(100, 200);
console.log(result1);

const str = add("Korea", "대한민국");
console.log(str);
