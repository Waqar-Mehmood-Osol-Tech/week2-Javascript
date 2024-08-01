// Rest Operator  ...
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: 'Waqar',
    email: 'waqar@gmail.com',
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and email is ${anyObject.email}`);
}


handleObject(user)


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));