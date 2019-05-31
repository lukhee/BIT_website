let productData = [
    {   
        id: 1,
        name: "product",
        category: "electronics",
        price: 20000,
        quantity: 20,
        src: "../public/image/admin/lady7.jpg"
    },
    {   
        id: 1,
        name: "product",
        category: "dress",
        price: 20000,
        quantity: 20,
        src: "../public/image/admin/lady5.jpg"
    },
    {   
        id: 1,
        name: "product",
        category: "bags",
        price: 20000,
        quantity: 20,
        src: "../public/image/admin/lady8.jpg"
    },
    {   
        id: 1,
        name: "product",
        category: "cars",
        price: 20000,
        quantity: 20,
        src: "../public/image/admin/lady2.jpg"
    }
]

let productStore = []

// creating the DOM for the product
function product(data){  
    let mylist = document.getElementById('product')  
   const productDiv = document.createElement("div")
   const categoryDiv = document.createElement("div")
   const descrip = document.createElement("div")
   const createImage = document.createElement("img");
   const createPrice = document.createElement("div");
   const createSubmit = document.createElement("button")

   mylist.append(productDiv)
   productDiv.append(createImage)
   productDiv.append(descrip)
   descrip.append(categoryDiv);
   descrip.append(createPrice);
   descrip.append(createSubmit)

    productDiv.setAttribute("id", "new-product")
  createImage.setAttribute('src', data.src);
  descrip.setAttribute("id", "description-div")
  createImage.setAttribute('id', "new-image");
  categoryDiv.setAttribute('id', "new-category");
  createPrice.setAttribute('id', "new-price")
  createSubmit.setAttribute("id", "new-buy")

  createPrice.innerHTML = "₦" + data.price
  categoryDiv.innerHTML = data.category
  createSubmit.innerHTML = "BUY"
}

//  landing page loading

function homePage(){
    var urlParams = new URLSearchParams(window.location.search);
    let userName = urlParams.get('name');
    if(userName){
        let logout = document.getElementById("user-logout")
        let login = document.getElementById("user-login")
        document.getElementById("loggedInName").innerHTML = userName;
        logout.style.display = "inline-block"
        login.style.display = "none"
    } else{
        console.log("dashbord")
    }
    
    productLoop();
}


function productLoop(){
            productStore = productData
            productStore.forEach(data => {
            product(data);
       });
}

// to logout
function logout(){
    let logout = document.getElementById("user-logout")
    document.getElementById("loggedInName").innerHTML = "";
    let login = document.getElementById("user-login")
    logout.style.display = "none"
    login.style.display = "inline-block"
}