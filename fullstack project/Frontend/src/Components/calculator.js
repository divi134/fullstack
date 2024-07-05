// import React, { useState } from "react";
// function Calculator(){
//     let [output, setOutput] = useState(' ');
//     const getnum = (num) => {
//         if(num == '='){
//             setOutput(eval(output))
//         }
//         else{
            
//         }
//     }
// }

//   return (
//     <div>
//         <table border="1" cellSpacing="2" align="center" width={300}>
//         <tr className="trs">
//             <td colspan="4" style={{"textAlign":"right"}}>{output}</td>
//         </tr>
//         <tr>
//             <td onClick={()=>getnum(9)}>9</td>
//             <td onClick={()=>getnum(8)}>8</td>
//             <td onClick={()=>getnum(7)}>7</td>
//             <td onClick={()=>getnum('+')}>+</td>
//         </tr>
//         <tr>
//             <td onClick={()=>getnum(6)}>6</td>
//             <td onClick={()=>getnum(5)}>5</td>
//             <td onClick={()=>getnum(4)}>4</td>
//             <td onClick={()=>getnum('-')}>-</td>
//         </tr>
//         <tr>
//             <td onClick={()=>getnum(3)}>3</td>
//             <td onClick={()=>getnum(2)}>2</td>
//             <td onClick={()=>getnum(1)}>1</td>
//             <td onClick={()=>getnum('/')}>/</td>
//         </tr>
//         <tr>
//             <td onClick={()=>getnum(0)}>0</td>
//             <td onClick={()=>getnum('C')}>C</td>
//             <td onClick={()=>getnum('=')}>=</td> 
//             <td onClick={()=>getnum('*')}>*</td>
//         </tr>
//     </table>
//     </div>
//   )

// export default Calculator;