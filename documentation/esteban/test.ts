//*Exercise Validate Form
/*
class ValidateForm {
    private form: any
    constructor(form:object) {
        this.form = form
    }
    validate(){
        try {
            if (typeof this.form.name !== 'string') throw "El campo Nombre no es una palabra"
            if (typeof this.form.lastname !== 'string') throw "El campo Apellido no es una palabra"
            if (this.form.name.length < 3) throw "El campo Nombre debe tener más de 3 caracteres"
            if (this.form.lastname.length < 3) throw "El campo Apellido debe tener más de 3 caracteres"
            if (this.form.age <18 || this.form.age >60) throw "edad fuera de rango"
            if (!this.form.degree.includes('Software') && !this.form.job.includes('Software')) throw "campo Carrera o profesión debe tener la palabra: 'Software'"
            return ""
        } catch (e:any) {
            return e
        }
    }
}
*/
/*
^muestra
let resultValidate = new ValidateForm(formPerson1).validate()
if (resultValidate.length > 0) {
    console.log(resultValidate)
}else{
    console.log('Exitoso')
}
*/

//*Segundo ejercicio: Validar todos los formularios
/*
let forms: Array<object> = [
    {
        name: 'Daniel',
        lastname: 'Valencia',
        age: 59,
        degree: 'Software Engineer',
        job: 'Software Developer',
        favoriteLanguage: 'JavaScript'
    },
    
    {
        name: 'William',
        lastname: 'Tautiva',
        age: 42,
        degree: 'Software Engineer',
        job: 'Software Developer',
        favoriteLanguage: 'Java'
    },
    
    {
        name: 'Pedro',
        lastname: 'Reyes',
        age: 27,
        degree: 'Telematic Engineer',
        job: 'Leader Software Developer',
        favoriteLanguage: 'PHP'
    },
    
    {
        name: 'Jhojan',
        lastname: 'Rámirez',
        age: 18,
        degree: 'Junior Software Developer',
        job: 'Junior Developer',
        favoriteLanguage: 'TypeScript'
    }
]

let amountForms = forms.length
let succesForms = 0

forms.forEach(form =>{
    let result = new ValidateForm(form).validate()
    if (result == "")succesForms ++ 
})

console.log((succesForms * 100)/amountForms + '%')
*/
/*
*callback ejemplo
^1
function primero(a: Function) {

    console.log("Soy primero");
    a();
    console.log("Soy tercero");
}

function segundo() {
    console.log("Soy segundo");
}
primero(segundo);
^2
function sum(a:number,b:number) {
    return a+b
}
console.log(sum (sum(5,8),sum(3,4)))
*/


