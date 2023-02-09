
const calculateFibonacci = () => {
    const fechahora = new Date();
    // const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();
    let primeros = minuto.toString();

    let prime = parseInt(primeros[0]) || 0
    let segu = parseInt(primeros[1]) || 0

    let fibo =[prime, segu]

    try {

        for(let i=2; i <= segundo; i++){
            fibo.push(fibo[i-1] + fibo[i-2]);
        }        
        
    } catch (error) {
        console.log(error);
        
    }  
    
    console.log(fibo);

  return (
    fibo
  )
}

export default calculateFibonacci