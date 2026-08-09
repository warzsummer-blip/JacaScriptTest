let input = prompt('数字を入力してください');

fizzBuzz(input);

function fizzBuzz(num) {
    if (num % 15 === 0) {
        alert('FizzBuzz');
    } else if (num % 3 === 0) {
        alert('Fizz');
    } else if (num % 5 === 0) {
        alert('Buzz');
    } else {
        alert(num);
    }
}