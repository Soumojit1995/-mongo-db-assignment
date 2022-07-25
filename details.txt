MongoDB Assignment

https://drive.google.com/file/d/1ueXfXNANr1cJIzv-UBvE6-wYwfG46CME/view




Problem 1:
1.1
Method - POST
url - https://mongodbassignment.herokuapp.com/student/add
Request - Body (JSON)
{
    "studentFirstName":"Soumojit Sadhukhan",
    "collegeName": "ABC- college",
    "location": "Kolkata"
}
Response - 
{
    "result": "Success"
}

1.2
Method - GET
url - https://mongodbassignment.herokuapp.com/student/getStudentDetails?name=Soumojit

Response -
{
    "name": "Soumojit",
    "collegeName": "ABC",
    "location": "Kolkata"
}

Problem 2:
2.1
Method - POST
url - https://mongodbassignment.herokuapp.com/quote/add
Request - Body (JSON)
{
    "quote":"Get busy living or get busy dying.",
    "author": "Stephen King"
}
Response - 
{
    "result": "Success"
}

2.2
Method - GET
url - https://mongodbassignment.herokuapp.com/quote/getAll

Response -
[
    {
        "quote": "Get busy living or get busy dying.",
        "author": "Stephen King"
    },
    {
        "quote": "The purpose of our lives is to be happy.",
        "author": " Dalai Lama"
    },
    {
        "quote": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    }
]

Problem 3:
3.1
Method - POST
url - https://mongodbassignment.herokuapp.com/product/add
Request - Body (JSON)
{
    "productName":"Redmi - 9",
    "price": 9999
}
Response - 
{
    "result": "Success"
}

3.2
Method - GET
url - https://mongodbassignment.herokuapp.com/product/getAll

Response -
[
    {
        "productName": "Redmi - 9",
        "price": 9999
    },
    {
        "productName": "Redmi - 10",
        "price": 19999
    },
    {
        "productName": "Redmi - 8",
        "price": 14999
    }
]