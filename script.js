
const firstname = prompt('quel est votre prénom?')
function sayHello(firstname,hour)
{   let messsage
     if (hour >=18){
        message ='Bonsoir '
     }
        else{
        message='Bonjour '
    }
    return (message + firstname + '!')  
}
const result = (sayHello(firstname,1))

document.querySelector('h1').innerText = result