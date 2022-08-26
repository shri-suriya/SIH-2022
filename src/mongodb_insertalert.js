var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [ 
        {Alert:"Daskroi",Alertlevel:"Yellow",District:"Ahemadabad"},
{Alert:"Daskroi",Alertlevel:"Orange",District:"Coimbatore"},
{Alert:"Dhandhuka",Alertlevel:"Red",District:"Ahemadabad"},
{Alert:"Thudiyalur",Alertlevel:"Red",District:"Coimbatore"},
{Alert:"Dhandhuka",Alertlevel:"Yellow",District:"Ahemadabad"},
{Alert:"Mettupalayam",Alertlevel:"Orange",District:"Coimbatore"},
{Alert:"Dhandhuka",Alertlevel:"Yellow",District:"Ahemadabad"},
{Alert:"RSpuram",Alertlevel:"Red",District:"Coimbatore"},
{Alert:"Townhall",Alertlevel:"Yellow",District:"Coimbatore"},
{Alert:"Dhandhuka",Alertlevel:"Orange",District:"Ahemadabad"},
{Alert:"Thudiyalur",Alertlevel:"Orange",District:"Coimbatore"},
{Alert:"Rspuram",Alertlevel:"Yellow",District:"Coimbatore"}

    ];
    dbo.collection("Volunter Details").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});