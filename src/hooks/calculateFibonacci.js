
const calculateFibonacci = () => {
    const fechahora = new Date();
    // const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();
    let primeros = minuto.toString();

    let prime = parseInt(primeros[0]) || 0
    let segu = parseInt(primeros[0]) || 0

    let fibo =[prime, segu]
    // const Fibonacci = (n1,n2)=>{
    //     serieFib.push(n1+n2)
    // }
    // let fibonacci = ""
    try {

        for(let i=2; i <= segundo; i++){
            fibo.push(fibo[i-1] + fibo[i-2]);
            // document.write(fibo[i]+"<br/>");	
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