class Book {

    static getData = () => {

        var details = {
            anu: {  username: "anu", password: "anu123" },
            ammu: {  username: "ammu", password: "000ammu" },
            reena: { username: "reena", password: "1111" }
        }
        return details
    }
    static clicking=()=>{
        alert("order successfully");
    }
        
    

    static login = () => {
        let uname = document.querySelector("#user").value
        let pwd = document.querySelector("#pass").value
       
        let dataset = Book.getData()
        //console.log(dataset)
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                alert("Login Successful")
                window.location.href = "index.html"
            }
            else {
                alert("Incorrect password")
            }

        }
        else {
            alert("no user  exist with provided username")
        }
    }
}