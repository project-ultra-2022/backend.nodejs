## EJERCICIO 1- Validar un formulario

let formPerson1: Object = {
    name: 'Daniel',
    lastname: 'Valencia',
    age: 22,
    degree: 'Software Engineer',
    job: 'Software Developer',
    favoriteLanguage: 'JavaScript'
}

1. Validar que el nombre y apellido sea de tipo string y tenga mínimo 3 caracteres
2. Validar que sea mayor de 18 años y menor de 60
3. Validar que tenga su carrera o profesión tenga la palabra: 'Software'
## SOLUCIÓN
class ValidateForm {
    private form: any
    constructor(form: object) {
        this.form = form
    }
    validate() {
        try {
            if (typeof this.form.name !== 'string') throw 'el campo Nombre no es una palabra'
            if (typeof this.form.lastname !== 'string') throw 'el campo Apellido no es una palabra'
            if (this.form.name.length < 3) throw 'el campo Nombre debe tener mas de 3 caracteres'
            if (this.form.lastname.length < 3) throw 'el campo Apellido debe tener mas de 3 caracteres'
            if (this.form.age < 18 || this.form.age > 60) throw 'La edad debe estar entre el rango de 18 años a 60 años'
            if (!this.form.degree.includes('Software') && !this.form.job.includes('Software')) throw 'El campo de *carrera y *profesión debe contener la palabra Software'
            return '';
        } catch (e: any) {
            return e 
        }
    }
}
let formPerson1: any = {
    name: 'Daniel',
    lastname: 'Valencia',
    age: 22,
    degree: 'Software',
    job: 'Developer Software',
    favoriteLanguage: 'JavaScrip'
}

let resultValidate = new ValidateForm(formPerson1).validate()
if (resultValidate.length>0){
console.log(resultValidate)}
else{
console.log('exitoso')
}

# EJERCICIO-2
2. Entregar una estadistica de cuantos formularios son correctos
# SOLUCIÓN- 2 
class ValidateForm {
    private form: any
    constructor(form: object) {
        this.form = form
    }
    validate() {
        try {
            if (typeof this.form.name !== 'string') throw 'el campo Nombre no es una palabra'
            if (typeof this.form.lastname !== 'string') throw 'el campo Apellido no es una palabra'
            if (this.form.name.length < 3) throw 'el campo Nombre debe tener mas de 3 caracteres'
            if (this.form.lastname.length < 3) throw 'el campo Apellido debe tener mas de 3 caracteres'
            if (this.form.age < 18 || this.form.age > 60) throw 'La edad debe estar entre el rango de 18 años a 60 años'
            if (!this.form.degree.includes('Software') && !this.form.job.includes('Software')) throw 'El campo de *carrera y *profesión debe contener la palabra Software'
            return '';
        } catch (e: any) {
            return e
        }
    }
}
let forms: Array<Object> = [
    {
        name: 'Daniel',
        lastname: 'Valencia',
        age: 22,
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
        degree: 'Telematic Software',
        job: 'Leader Developer Software',
        favoriteLanguage: 'PHP'
    },

    {
        name: 'Jhojan',
        lastname: 'Rámirez',
        age: 17,
        degree: 'Software',
        job: 'Junior Developer Software',
        favoriteLanguage: 'TypeScript'
    }
]
let amountForms= forms.length
let successForms= 0 
forms.forEach(form=>{
    let result = new ValidateForm (form).validate()
    if (result.length == "") successForms ++ 
})
console.log (((successForms*100)/amountForms) + '%')

# EJERCICIO-3 
function sum (a: number, b: number ){
    return a + b
}
let result = sum (sum (7,1),sum (8,1))
console.log(result)
# EJERCICIO- 4
function primero (segundo : Function) {
    console.log('soy primero');
    segundo()
    console.log('soy tercero')
}
function segundo ()
{
    console.log( 'soy segundo')
}
primero (segundo) 

