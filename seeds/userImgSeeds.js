const { UserImg } = require("../models")

const imageData = [
    {
        UserId:1,
        url:"https://media.istockphoto.com/photos/mother-and-daughter-having-fun-at-the-park-picture-id1292435524?b=1&k=20&m=1292435524&s=170667a&w=0&h=oNC25az4_EOWUzuW9d12xPrUFz1QpspyrSOn73Du6sY="
    },
    {
        UserId:2,
        url:"https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZlbWFsZSUyMHdpdGglMjBraWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        UserId:3,
        url:"https://images.unsplash.com/photo-1445633743309-b60418bedbf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwd2l0aCUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        UserId:4,
        url:"https://images.unsplash.com/photo-1437913135140-944c1ee62782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwd2l0aCUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        UserId:5,
        url:"https://images.unsplash.com/photo-1484425304707-d8246c26cda2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZlbWFsZSUyMHdpdGglMjBraWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        UserId:6,
        url:"https://media.istockphoto.com/photos/happy-indian-mother-having-fun-with-her-daughter-outdoor-family-and-picture-id1325578537?b=1&k=20&m=1325578537&s=170667a&w=0&h=lBs-GbtRYwxH8uBby3p0UEpJ0SuiDGMnT87rx_K51Cg="
    },
    {
        UserId:7,
        url:"https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9tJTIwd2l0aCUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        UserId:8,
        url:"https://images.unsplash.com/photo-1542037179399-bbf09c7f9888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tJTIwd2l0aCUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        UserId:9,
        url:"https://images.unsplash.com/photo-1508214406285-c765025445df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9tJTIwd2l0aCUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        UserId:10,
        url:"https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9tJTIwd2l0aCUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
]

const seedUserImage = () => UserImg.bulkCreate(imageData)

module.exports = seedUserImage