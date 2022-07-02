export function check(){
    const checkB = document.querySelector('.BtnF')
    /* console.log(checkB) */
    const checkBut = document.querySelector('.InputCheck')
    /* console.log(checkBut) */
    
    /* checkB.addEventListener('click',()=>{ */
        if (checkBut.checked) {
            /* console.log('не нажат') */
            checkB.type = 'submit'
            console.log('Нажмите галочку')
            checkB.classList.add('test')
        }
        else{
            /* console.log('нажат') */
            /* console.log(checkBut.checked) */
            checkB.type = 'button'
            checkB.classList.remove('test')
            console.log('Галочка стоит')
        }
    /* }) */
    

}
export function checkBtn() {
    const checkB = document.querySelector('.BtnF')
    if (checkB.type == 'button') {
        
        alert('Ознакомтесь с нашими правилами!')
    }
    console.log('alert')

}








/* if (checkBut.checked == false) {
    alert('Нажмите галочку')

}
else{
    checkB.addEventListener('click',()=>{
    console.log('нажат')
    console.log(checkBut.checked)
    alert('Галочка стоит')
    
})
} */