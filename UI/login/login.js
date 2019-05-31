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
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let result = data.find(element=> {
        return (element.name ==userName && element.password == password)
    })
    // console.log(result)
    if(result){
        window.location.href = `../landing/landing.html?name=` +result.name;
    }else{
        alert("incorrect credential, please register")
        document.getElementById("userName").value = ""
        document.getElementById("password").value = ""
    }
}