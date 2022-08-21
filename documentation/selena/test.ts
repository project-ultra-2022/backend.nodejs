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


