class Book {

    static getData = () => {

        var details = {
            anu: {  username: "anu", password: "anu123" },
            ammu: {  username: "ammu", password: "11ammu" },
            reena: { username: "reena", password: "reen97" }
        }
        return details
    }
    static login = () => {
        let uname = document.querySelector("#username").value
        let pwd = document.querySelector("#Password").value
        alert(uname+pwd)
        let dataset = Book.getData()
        //console.log(dataset)
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                alert("Login Successful")
                window.location.href = "home.html"
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