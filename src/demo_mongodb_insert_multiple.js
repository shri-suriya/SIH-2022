var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { Name: "Sachin Samuel", Gender: "Male", Address: "2/838 8th stree north, Palladam.", PhNumber: "8372635192", Email: "sachinsamuel@gmail.com", Organisations: "NCC", Age: "18", District: "Coimbatore", State: "TamilNadu", DoB: "12.2.2003", Profession: "Engineering" },
{ Name: "Nigalya", Gender: "Female", Address: "25/2,Raja street,Gandhinagar,Karol Bagh,Delhi", PhNumber: "9786934498", Email: "nigalya345@gmail.com", Organisations: "NSS", Age: "20", District: "North Delhi", State: "Delhi", DoB: "15.06.2000", Profession: "Fashion Designer" },
{ Name: "Ashwin", Gender: "Male", Address: "82,Shiv Shakthi Street,Narol,Ahmedabad,Gujarat", PhNumber: "9899435759", Email: "ashwinpt343@gmail.com", Organisations: "NGO", Age: "23", District: "Karol", State: "Gujarat", DoB: "07.08.1998", Profession: "Doctor" },
{ Name: "Prakash", Gender: "Male", Address: "415,4th floor, Rathana bisiness aasaram road,Ahmedabad,Gujarat", PhNumber: "9876543210", Email: "prakash@gmail.com", Organisations: "NCC", Age: "54", District: "Ahmedabad", State: "Gujrat", DoB: "12.11.1892", Profession: "Fisher man" },
{ Name: "Saranya", Gender: "Female", Address: "28-A 6th street,Snipat,Hariyana", PhNumber: "9786756451", Email: "saranya@gmail.com", Organisations: "NSS", Age: "22", District: "Faradabad", State: "Hariyana", DoB: "13.08.2001", Profession: "Teacher" },
{ Name: "Agalya", Gender: "Female", Address: "34,Shreyas Colonoy, Navrangpyra, Ahmedabad,Gujarat", PhNumber: "8956678432", Email: "agalya@gmail.com", Organisations: "NCC", Age: "25", District: "Ahmedabad", State: "Gujarat", DoB: "09.7.1736", Profession: "Chemical Engineering" },
{ Name: "Hardik", Gender: "Male", Address: "24,Sector 24 Noida, Uttar Pradesh", PhNumber: "9829651234", Email: "hardik@gmail.com", Organisations: "NGO", Age: "20", District: "Noida", State: "Uttar Pradesh", DoB: "03.9.2000", Profession: "Student" },
{ Name: "Devshree", Gender: "Female", Address: "4,2nd floor,Transport nagar, Ludhiana, Punjab", PhNumber: "7894561230", Email: "devshree@gmail.com", Organisations: "NSS", Age: "18", District: "Ludhiana", State: "Punjab", DoB: "16.08.2003", Profession: "Student" },
{ Name: "Kumar", Gender: "Male", Address: "65, 3rd floor, sanjai nagar, Ghaziabad, Uttar Pradesh", PhNumber: "9679871234", Email: "kumar@gmail.com", Organisations: "NCC", Age: "25", District: "Ghaziabad", State: "Uttar Pradesh", DoB: "26.09.2002", Profession: "Teacher" },
{ Name: "Mudhuraveran", Gender: "Male", Address: "23 Animesh Building, Girdharlal Road, Ahmedabad, Gujarat", PhNumber: "8769123763", Email: "madhuraveran@gmail.com", Organisations: "NGO", Age: "43", District: "Ahmedabad", State: "Gujarat", DoB: "14.08.1972", Profession: "Farmer" },
{ Name: "Yash", Gender: "Male", Address: "65 Dussehra kothi, Amer Road, Jaipur,Rajasthan", PhNumber: "6789123456", Email: "yash@gmail.com", Organisations: "NCC", Age: "23", District: "Jaipur", State: "Rajasthan", DoB: "31.12.2000", Profession: "Student" }

    ];
    dbo.collection("Volunter Details").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});