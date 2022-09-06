# Diagramas de flujo

Sirven para organizar el codigo
para usarlo en visual pones .drawio

# Formularios

1. Validar que el nombre y apellido sea de tipo string y tenga mínimo 3 caracteres
2. Validar que sea mayor de 18 años y menor de 60
3. Validar que tenga su carrera o profesión tenga la palabra: 'Software'

class Validateform {
private form: any

    constructor(form: object) {
        this.form = form
    }
    validate() {
        try {
            if (typeof this.form.name !== 'string') throw 'El campo name no es una palabra';
            if (typeof this.form.lastname !== 'string') throw 'El campo lastname no es una palabra';
            if (this.form.name.length < 3) throw 'El campo name tiene menos de 3 caracteres';
            if (this.form.lastname.length < 3) throw 'El campo lastname tiene menos de 3 caracteres';
            if (this.form.age > 60 || this.form.age < 18) throw 'No cumple con la edad pedida'
            if (!this.form.degree.includes('Software') && !this.form.job.includes('Software')) throw 'No cumples con la profesion o carrera de software'
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
degree: 'Software Engineer',
job: 'Software Developer',
favoriteLanguage: 'JavaScript'
}

let resultValide = new Validateform(formPerson1).validate()

if (resultValide.length > 0){
console.log(resultValide)
} else {
console.log('Formulario completo')
}

# Nuevo array

Let array: Array <Object>

# Formulario 2

1.  Entregar una estadistica de cuantos formularios son correctos
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
            degree: 'Telematic Engineer',
            job: 'Leader Developer',
            favoriteLanguage: 'PHP'
        },

        {
            name: 'Jhojan',
            lastname: 'Rámirez',
            age: 17,
            degree: '',
            job: 'Junior Developer',
            favoriteLanguage: 'TypeScript'
        }];

let amountForms = form.length
let successForms = 0

form.forEach(form => {
let result = new Validateform(form).validate()
if (result.length == 0) successForms++
});
console.log(successForms \* 100 / amountForms + '%')

# callback

Pasar una funcion como parametro de otra funcion

function sum(a : number,b : number){
return a+b
}
console.log(sum(sum (8,8), sum (7,7)))

TERMINAL:
30

# Function

function primero (segundo : Function){
console.log('soy primero')
segundo ();
console.log('soy tercero'
)
}

function segundo (){
console.log('soy segundo')
}
primero (segundo)

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
Es una reunion en la cual esta reunido el cliente, el scrum team y el scrum master para revisar el proyectoy seria la primera version del software final, puede durar de tres a cuatro horas.

Daily meeting o Reunion diaria:
Reuniones diarias para hacer tres preguntas que hizo ayer, que hizo hoy, y que problemas tiene , la primera pregunta que tiene que hacer el scrum master es que problemas tiene, la reunion diaria sirve para ponerse de acuerdo en errores que tenga el equipo y tambien solo puede durar menos de 12 minutos y siempre es de pie.

Planning poker:
Sirve para ponerse de acuerdo con el scrum team y en cuanto tiempo va a llevar una tarea.

Reunion de retrospectiva:
En estas reuniones se hacen las siguientes preguntas: Que estamos haciendo mal, que estamos haciendo bien y que tenemos que corregir.

Backlog:
Espacio en donde se almacenan todas las tareas.

# prueba

console.log(numero.slice(4));
console.log(numero.search("-"));
