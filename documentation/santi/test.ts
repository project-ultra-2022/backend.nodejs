class ValideForm {
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

            return {
                status: true,
                message: null
            }
        } catch (e:any) {
            return {
                status: false,
                message: e
            }
        }
    }
}

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
