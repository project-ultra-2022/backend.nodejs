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
console.log((succesForms \* 100/amountForms), '%')

# call back

Pasar una funcion como parametro de otra funcion:

Ejemplo:

function sum(a: number, b: number) {
return a + b
}
console.log(sum(sum(5, 3), sum(3, 4)))

# recursividad

# EsLint

Le podemos poner las reglas que queremos por ejemplo que al final haya un ; y el EsLint
nos pondra un error

# Scrump

Reglas de trabajo en equipo creadas por varios programadores para trabajar agilmente en equipo

Regla Basica:
Dividir el tiempo del proyecto en 2 o 4 semanas.

Sprint:
Es un espacio de tiempo de 2 o 4 semanas.

Product owner:
El dueño del producto en español / o el enlace entre el cliente y el equipo y el product owner tambien puede programar si el equipo es muy pequeño.

Scrum master:
Sirvienta del equipo / soluciona los problemas del equipo de cualquier tipo excepto ayudar con el codigo pero si puede programar.

Scrum team:
Son todos los miembros que participan en el codigo y tambien tienen que participar en las reuniones de scrum.

## Tipos de reuniones:

Planning meeting:
Es una reuinon que sirve para decidir que vamos a hacer, quienes lo van a hacer y cuanto tiempo va a llevar el proyecto.

Reunion de planificacion:
Planning meeting en ingles puede durar de dos a tres horas para ser agiles y va a participar un equipo.

Reunion de revision:
Es una reunion el cual esta reunido el cliente, el scrum team y el scrum master para revisar el proyecto y seria la primera version del software final, puede durar de tres a cuatro horas.

Daily meeting o Reunion diaria:
Reuniones diarias para hacer tres preguntas que hizo ayer, que hizo hoy, y que problemas tiene , la primera pregunta que tiene que hacer el scrum master es que problemas tiene, la reunion diaria sirve para ponerse de acuerdo en errores que tenga el equipo y tambien solo puede durar menos de 12 minutos y siempre es de pie.

Planning poker:
Sirve para ponerse de acuerdo con el scrum team y en cuanto tiempo va a llevar una tarea.

Reunion de retrospectiva:
En estas reuniones se hacen las siguientes preguntas: Que estamos haciendo mal, que estamos haciendo bien y que tenemos que corregir.

Backlog:
Espacio en donde se almacenan todas las tareas.

# Status de la API:

Respuestas informativas (100–199),
Respuestas satisfactorias (200–299),
Redirecciones (300–399),
Errores de los clientes (400–499),
y errores de los servidores (500–599).
