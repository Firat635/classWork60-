
const formEmail = document.getElementById("exampleInputEmail1")
const fisrtName = document.getElementById("fisrtName")
const subject =document.getElementById ("subject")
const textaconstrea =document.getElementById("textaconstrea")
const submit = document.getElementById("submit")
const form = document.getElementById("formBox")


function formpost(e) {
    e.preventDefault();
    axios.porst("https://655c3300ab37729791aa0bf5.mockapi.io/students/basket",{
        name:fisrtName.value,
        Email:formEmail.value,
        subject:subject.value,
        textaconstrea:textaconstrea.value,
        
    })
    .then(res =>{
        console.log(res);
        form.reset()
    })
}
form.addEventListener("submit",formpost)