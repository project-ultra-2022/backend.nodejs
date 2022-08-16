let formPerson1: Object = {
    name: 'Daniel',
    lastname: 'Valencia',
    age: 22,
    degree: 'Software Engineer',
    job: 'Software Developer',
    favoriteLanguage: 'JavaScript'
}

let resultValidate = new ValideForm(formPerson1).validate();
if (resultValidate.status == true){
    console.log('Formulario sin errores')
}else{
    console.log(resultValidate.message)
}



class ValidateForm {
    private form: any

    constructor(form: object) {
        this.form = form
    }

    validate() {
        try {
            if (typeof this.form.name !== 'string') throw 'Nombre no es un string'
            if (typeof this.form.lastname !== 'string') throw 'Apellido no es un string'
            if (this.form.name.length < 3) throw 'Nombre tiene menos de 3 caracteres'
            if (this.form.lastname.length < 3) throw 'Nombre tiene menos de 3 caracteres'
            if (this.form.age < 18 || this.form.age > 60) throw 'Edad no cumple condiciones'
            if (!this.form.degree.includes('Software') && !this.form.job.includes('Software')) throw 'No existe la palabra Software'

            return ''
        } catch (e: any) {
            return e
        }
    }
}

let form: Array<Object> = [
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
        degree: 'Software Engineer',
        job: 'Software Developer',
        favoriteLanguage: 'PHP'
    },

    {
        name: 'Jhojan',
        lastname: 'Rámirez',
        age: 17,
        degree: '',
        job: 'Junior Developer',
        favoriteLanguage: 'TypeScript'
    }
];

let amountForms = form.length
let succesForms = 0

form.forEach(form => {
    let result = new ValidateForm(form).validate()
    if (result.length == 0) succesForms++
});
console.log((succesForms * 100/amountForms), '%')

# call back

 Pasar una funcion como parametro de otra funcion:

 Ejemplo:

 function sum(a: number, b: number) {
    return a + b
}
console.log(sum(sum(5, 3), sum(3, 4)))