/**
 * anime un titre 
 @param{string}
 */


function animatebig-title(selector){
    const big-title = document.querySelector{selector}
    if (big-title == null){
        console.error('impossible de trouver l/element'= selector)
        return
    }

   // on construit un tableau contenant la nouvelle structure
const children = Array.from(big-title.childNodess)
let elements =[]
children.forEach(child=>{
if(child.noteTye== Node.Text_Node){
const words = child.textContent.split('')

const  span=  words.map = (wrapWord)
console.log(spans)
elements = elements.concat(spans) 

}else {
    elements.push(child)
}
   
} )
const.log(elements)

   // on utilise ce tableau et on ejecte les elements dans big-title 

   big-title.innerHTML = ''
   elements.forEach(el =>{
    big-title.appendchild(el)
   } )
   Array.from(big-title.querySelectorAll(span span)).forEach((span, k)=>{
    span.style.animationDelay =(k* .2) + 's'
   })
}
/** 
 * entoure le mot de deux <span>
 * @param {string*} word 
*/

function wrapWord(word) {
    const span = document.creatElement(span)
    const span2 = document.createElement('span')
    span.app.appendchild(span2)
    span2.textContent =  innerHTML = word
    return span

}


animatebig-title('.big-title')