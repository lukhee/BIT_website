const data = [
    {
        id : 1,
        name : 'balogun',
        password : "password"
    },
    {
        id : 2,
        name : 'lukman',
        password : "password"
    },
    {
        id : 3,
        name : 'olatunji',
        password : "password"
    }
]

function loginUser(){
    let userState = true;
    for(var i = 0; i<data.length; i++){
        // get user from the DOM
        let userName = document.getElementById("userName").value;
        let password = document.getElementById("password").value;
        if(userName == data[i].name && password == data[i].password){
            console.log(" congrat !!! you are logged in")
            window.location.href = `../landing/landing.html?name=` + data[i].name;
            return
        } else {
            userState = false;
        }
    }
    if(!userState){
        alert("incorrect credentials, please check or register with us")
    }
}