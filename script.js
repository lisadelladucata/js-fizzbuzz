/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?*/

for (let i = 1; i <= 100 ; i++){
    let output = ''

    //se multiplo di 3 aggiungi 'Fizz'
    if( i % 3 === 0){
        output = 'Fizz'
    }

    //se multiplo di 5 aggiungi 'Buzz'
    if(i % 5 === 0){
        output='Buzz'
    }

    // se multiplo sia di 3 che di 5 aggiungi 'FizzBuzz'
    if(i % 3 === 0 && i % 5=== 0){
        output='FizzBuzz'
    }

    console.log (i)
    console.log(output)
}