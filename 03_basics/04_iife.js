// Immediately Invoked Function Expresion (IIFE)

(function code(){
    //named iife
    console.log(`DB Connected`);
})();

( (name) => {
    //simple iife
    console.log(`DB Connected Again ${name}`);
})("Raj")