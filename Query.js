//1)

db.createCollection('college')

//2)
use('Databse_Name');
db.Collection_name.drop();

//3)
use('Database')
db.collectionName.insert({
    name:"Rakib",
    Batch:4
})

//4)
db.collectionName.deleteOne(
    {
        name:"Rakib"
    }
)
