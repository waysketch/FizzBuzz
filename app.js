const FizzBuzz = num => {
    [...Array(+num)].map( ( _ , i ) => {
        console.log(filter(i + 1));
    });
};

const filter = (i) => {
    let output = "";

    if ( i % 3 === 0 ) { output = `${output}fizz` };
    if ( i % 5 === 0 ) { output = `${output}buzz` };
    if ( output.length < 1 ) { output = `${i}` };

    return output;
};












// function FizzBuzz(num) {

//     for (let i = 1; i <= num; i++) {
//         let output = "";
//         if ( i % 3 === 0 ) { output = `${output}fizz` };
//         if ( i % 5 === 0 ) { output = `${output}buzz` };
//         if ( output.length < 1 ) { output = `${i}` };

//         console.log(output);

//     };

// };

FizzBuzz("15");