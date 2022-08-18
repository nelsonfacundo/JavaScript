// Fizz buzz

//3 6 9 12 ... Fizz
// 5 10 15 20 ...Buzz
// 15  40 15 ... fizzbuzz!

for(let i = 0 ; i <= 100 ; i++ ){
    if(i%15 ===0){
        console.log('FizzBuzz: '+ i );
    }else if (i%5 ===0){
        console.log('Buzz: '+ i );
    }else if(i%3 ===0){
        console.log('Fizz: '+ i );
    }
}