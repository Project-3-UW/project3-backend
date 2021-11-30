const { Item } = require("../models")

const itemData = [
    {
        title:"new born baby clothing",
        category: "Clothing, Shoes & Accessories",
        condition: "Used (like new)",
        brand: "Gap",
        model: "n/a",
        ageRange: "0-6m",
        description: "10 cute baby girl one-piece",
        UserId:3,
        favorited_by: 1
    },
    {
        title:"highchair",
        category: "Nursery furniture & Decor",
        condition: "Used (normal wear)",
        brand: "Graco",
        model: "Blossom ",
        ageRange: "6-12m",
        description: "very useful highchair",
        UserId:1
    },
    {
        title:"117 Assorted Brands Size 1 Diapers",
        category: "Diapering",
        condition: "New",
        brand: "n/a",
        model: "n/a",
        ageRange: "0-6m",
        description: "Huggies Snug And Dry 38 ct. Honest 35 ct. Signature Care 44 ct. All size 1 brand new and unopened.",
        UserId:3
    },
    {
        title:"Baby Playpen, 16 Panel Foldable Playard Activity Center w/Game Board & Lockable Gate",
        category: "Safety Equipment",
        condition: "Used (like new)",
        brand: "n/a",
        model: "n/a",
        ageRange: "0-6m,6-12m,12-18m",
        description: "Baby Playpen, 16-Panel Foldable Playard Activity Center w/Game Board & Lockable Gate, 14 Rubber Suction Cups, Indoor Outdoor Safety Play Fence for Infants Toddler (16 Panel)",
        UserId:4
    },
    {
        title:"Breastfriend Feeding Pillow",
        category: "Nursery furniture & Decor",
        condition: "Used (normal wear)",
        brand: "n/a",
        model: "n/a",
        ageRange: "0-6m",
        description: "Deluxe version bought from Amazon. Great back support and easy access pocket for little things like sanitizer, vitamin D drops etc.",
        UserId:5
    },
    {
        title:"Car Seat",
        category: "Car seats & Accessories",
        condition: "Used (like new)",
        brand: "Maxi Cosi",
        model: "n/a",
        ageRange: "0-6m",
        description: "My infant has now outgrown this car seat.No stains, spills or blow outs at all.Cleaned all covers by laundry.",
        UserId:6
    },
    {
        title:"Boon Dishwater Basket",
        category: "Feeding",
        condition: "Used (like new)",
        brand: "n/a",
        model: "n/a",
        ageRange: "0-6m",
        description: "Like new since we preferred to hand wash items.",
        UserId:6
    },
    {
        title:"Changing Table",
        category: "Nursery furniture & Decor",
        condition: "Used (like new)",
        brand: "n/a",
        model: "n/a",
        ageRange: "0-6m,6-12m",
        description: "Sturdy changing table color grey. It has storage underneath. Really good condition.",
        UserId:7
    },
    {
        title:"Halo Bassinet",
        category: "Nursery furniture & Decor",
        condition: "Used (normal wear)",
        brand: "Halo",
        model: "n/a",
        ageRange: "0-6m",
        description: "Gently used halo swivel bassinet. Must pick up.",
        UserId:8
    },
    {
        title:"Little Tikes Go Green Ride On Tractor",
        category: "Baby toys",
        condition: "Used (normal wear)",
        brand: "Little Tikes ",
        model: "n/a",
        ageRange: "12-18m",
        description: "see pictures",
        UserId:9
    },
    {
        title:"Pregnancy Pillow",
        category: "Pregnancy & Maternity",
        condition: "Used (like new)",
        brand: "PharMeDoc",
        model: "n/a",
        ageRange: "0-6m",
        description: "Pregnancy pillow with cover. Used one time, great condition.",
        UserId:2
    },
    {
        title:"Potty",
        category: "Potty Training",
        condition: "Used (normal wear)",
        brand: "n/a",
        model: "n/a",
        ageRange: "12-18m",
        description: "see pictures",
        UserId:9
    },
    {
        title:"Similac Baby Formula",
        category: "Baby food",
        condition: "New",
        brand: "Similac",
        model: "advance",
        ageRange: "0-6m",
        description: "New, never opened, used by Jan 2024",
        UserId:2
    },
    {
        title:"Baby Bath Tub",
        category: "Bathing & Skincare",
        condition: "Used (normal wear)",
        brand: "n/a",
        model: "n/a",
        ageRange: "0-6m",
        description: "Pickup in everett",
        UserId:10
    },
    {
        title:"Babies R Us Stroller Rain Cover",
        category: "Strollers",
        condition: "Used (like new)",
        brand: "BabiesRus",
        model: "n/a",
        ageRange: "0-6m, 6-12m",
        description: "Universal Compatibility for stroller -- this large baby rain cover fit for most of type stroller. Transparent plastic let's you and your baby be seen clearly.",
        UserId:9
    },
]

const seedItems = () => Item.bulkCreate(itemData)

module.exports = seedItems