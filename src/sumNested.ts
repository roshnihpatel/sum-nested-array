/**
 * Write a function sumNested which takes a (possibly infinitely deeply) nested array of numbers and returns the sum of all numbers in the structure.  
 * [10, [2, 3, 6], [1, [100, [3, 4], 5]]] => 134
 * 
 * pseudocode
 * function sumNested
 * paramerters
 * -  NESTED_ARRAY : array of number or NumberofArray
 * return: number
 * 
 * set COUNTER  to be 0
 * set   QUEUE  to be NESTED_ARRAY
 *  while QUEUE is not empty
 *   if first ELEMENT if STACK  is not a number 
 *     for every NESTED_ELEMENT of first ELEMENT of QUEUE
 *       Append the NESTED_ELEMENT 
 *    end if
 *     else 
 *    add FIRST ELEMENT to COUNTER
 *   endelse
 *    delete the first  ELEMENT of QUEUE
 *
 *   
 * end while
 * return COUNTER
 *   
 * ========================================
 * * pseudocode
 * function sumNestedStack
 * paramerters
 * -  NESTED_ARRAY : array of number or NumberofArray
 * return: number
 * set COUNTER  to be 0
 * set STACK to be NESTED_ARRAY 
 * 
 * while STCK is not empty
  * if  last element of STACK is an array
  *   set CURRENT_ELEMENT to be last element of STACK
  *   remove the last element of STACK
  *   for (each ELEMENT of CURRENT_ELEMENT)
  *     append ELEMENT to end of STACK
  *   end for
  * endif
  * else 
  *   add LAST ELEMENT to counter
  *   and remove LAST-ELEMENT
  * end else
 * end while
 * 
 * return counter
 * ===============================================
 *   function sumNested
 * paramerters
 * -  NESTED_ARRAY : array of number or NumberofArray
 * return: number
 * 
 * set COUNTER  to be 0
 * set STACK to be NESTED_ARRAY 
 * 
 * 
 * 
 * 
 * 
 
 * 
 * return counter + nestedArray()
 * 
 * 

 */
type NumberOrArray =  (number | NumberOrArray)[] 

//=====================QUEUE=============================


// ya

//   while(queue.length !== 0) {
//     if(typeof queue[0] !== 'number'){
//       for (const nestedElement of queue[0]){
//         queue.push(nestedElement)
//       }

//     }else{
//       counter += queue[0]
//     }
//     queue.shift()

//   }

//   return counter;
// }



// ====================STACK ===============================

// function sumNested (nestedArray: NumberOrArray): number {
//   let counter = 0
//   let stack: NumberofArray[] = []
//   stack.push(nestedArray)

//   while(stack.length !== 0){
//     let topOfStack = stack[stack.length-1]
//     if (typeof topOfStack !== 'number'){
//       let  currentElement = topOfStack
//       stack.pop()
//       for(const element of currentElement){
//         stack.push(element)
//       }

//     }else{
//       counter += topOfStack
//       stack.pop()
//     }
//   }


// return counter
// }
function sumNested (nestedArray: NumberOrArray): number  {

  if (nestedArray.length === 0 ){
    return 0
  }
  
 while (typeof nestedArray[0] !== 'number'){
   for (const element of nestedArray[0]){
     nestedArray.push(element)
   }
   nestedArray.shift()
    
 }
   
  return  nestedArray[0] + sumNested(nestedArray.slice(1)) 

}

export default sumNested;
