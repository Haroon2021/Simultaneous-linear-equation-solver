
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const linesData = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const linesDataTransformed = Object.fromEntries(linesData);

    // Picking out the SUVAT values from the transformed data 
    const consta = parseFloat(linesDataTransformed['a']);
    const constb = parseFloat(linesDataTransformed['b']);
    const constc = parseFloat(linesDataTransformed['c']);
    const constd = parseFloat(linesDataTransformed['d']);
    const conste = parseFloat(linesDataTransformed['e']);
    const constf = parseFloat(linesDataTransformed['f']);

    if (((consta/constd) == (constb/conste)) && ((constb/conste) == (constc/constf)) ) {
        
        document.querySelector(".yourequations").innerText = `${consta} = ${constb}x + ${constc}y \n ${constd} = ${conste}x + ${constf}y`

        document.querySelector(".errorhanger").innerText = `these 2 equations are the same`

    }else if ( ((constb/constc) == (conste/constf)) && ((consta/constc) != (constd/constf))  ) {

        document.querySelector(".yourequations").innerText = `${consta} = ${constb}x + ${constc}y \n ${constd} = ${conste}x + ${constf}y \n` 

        document.querySelector(".errorhanger").innerText = `These are parallel lines with a slope of ${(-1)*constb/constc} and different y intercepts hence there are no solutions`
    } else {
        const xvalue = (constd-(constf*consta/constc)) / (conste-(constf*constb/constc));
        const yvalue = (consta/constc)-(xvalue*constb/constc)
        document.querySelector(".yourequations").innerText = `Equation 1: ${consta} = ${constb}x + ${constc}y \n Equation 2: ${constd} = ${conste}x + ${constf}y \n`
        document.querySelector(".solutionsection1arrangeequation1").innerText = `\n Rearrange equation 1 for y: \n ${consta} = ${constb}x + ${constc}y \n ${consta} - ${constb}x = ${constc}y \n y = (${consta}/${constc}) - (${constb}/${constc})x \n` 
        document.querySelector(".solutionsection2sub1into2").innerText = `\n  Sub equation 1 into equation 2 to get: \n ${constd} = ${conste}x + ${constf}((${consta}/${constc}) - (${constb}/${constc})x) \n ${constd} = ${conste}x + ${constf}*(${consta}/${constc}) - (${constf})*(${constb}/${constc})x \n ${constd} - ${constf}*(${consta}/${constc}) = ${conste}x  - (${constf})*(${constb}/${constc})x \n  ${constd} - ${constf*consta/constc} = ${conste}x  - (${constf*constb/constc})x \n  ${conste-(constf*constb/constc)}x = ${constd-(constf*consta/constc)}  \n x = ${(constd-(constf*consta/constc)) / (conste-(constf*constb/constc))} \n`
        document.querySelector(".solutionsection3subxintorearrangedequation1").innerText = `\n Substitute the x value into the rearranged version of equation 1 to get: \n y = (${consta}/${constc}) - (${constb}/${constc})x \n y = (${consta}/${constc}) - (${constb}/${constc})*${xvalue} \n y = ${consta/constc} - ${constb/constc}*${xvalue} \n y = ${consta/constc} - ${xvalue*constb/constc} \n y = ${(consta/constc)-(xvalue*constb/constc)} \n`
        document.querySelector(".answer").innerText = `The answer is: \n x=${xvalue} \n y=${yvalue}`
    }
        
  
  
    
    
})