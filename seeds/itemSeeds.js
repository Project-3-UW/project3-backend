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
        ageRange: "6-12m",
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
        ageRange: "0-6m",
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
        ageRange: "0-6m",
        description: "Universal Compatibility for stroller -- this large baby rain cover fit for most of type stroller. Transparent plastic let's you and your baby be seen clearly.",
        UserId:9
    },
    {
        title:"Baby Gate",
        category: "Safety Equipment",
        condition: "Used (normal wear)",
        brand: "n/a",
        model: "n/a",
        ageRange: "6-12m",
        description: "Very useful baby gate that can be used for both babies and pets",
        UserId:11
    },
    {
        title:"9 Baby boardbooks. baby card boar books. children's books. picture books",
        category: "Books",
        condition: "Used (normal wear)",
        brand: "n/a",
        model: "n/a",
        ageRange: "6-12m",
        description: "Used books with some signs of wear on covers otherwise they are in good condition.",
        UserId:12
    },
    {
        title:"Boba Wrap",
        category: "Nursery furniture & Decor",
        condition: "Used (normal wear)",
        brand: "Boba",
        model: "n/a",
        ageRange: "0-6m",
        status:"pending",
        description: "free your hands and make baby sleep well",
        UserId:13
    },
    {
        title:"Chicco High Chair",
        category: "Nursery furniture & Decor",
        condition: "Used (normal wear)",
        brand: "Chicco",
        model: "n/a",
        ageRange: "6-12m",
        description: "A highchair I got, only used a few times. There's no stains and comes with removable easy to clean tray",
        UserId:13
    },
    {
        title:"Bouncer",
        category: "Baby toys",
        condition: "Used (normal wear)",
        brand: "Fisher-price",
        model: "n/a",
        ageRange: "6-12m",
        description: "Smoke free home",
        UserId:14
    },
    {
        title:"Fisher price on the go baby dome",
        category: "Nursery furniture & Decor",
        condition: "Used (like new)",
        brand: "Fisher-price",
        model: "n/a",
        ageRange: "0-6m",
        status: "pending",
        description: "Smoke free & pet free environment, was only used for a couple of months, no rips, tears or stains, portable, easy to store away, spf 50",
        UserId:14
    },
    {
        title:"New 3 Cereal For Baby",
        category: "Baby food",
        condition: "New",
        brand: "Gerber",
        model: "n/a",
        ageRange: "0-6m",
        description: "3 New cereal Gerber for baby expire Marzo 2022",
        UserId:15
    },
    {
        title:"Size 7 Toddler Shoes",
        category: "Baby food",
        condition: "New",
        brand: "Nike",
        model: "n/a",
        ageRange: "2-3 years",
        status: "pending",
        description: "Never used, with tags on",
        UserId:15
    },
    {
        title:"Toddler Car Bed",
        category: "Nursery furniture & Decor",
        condition: "Used (normal wear)",
        brand: "Blue",
        model: "n/a",
        ageRange: "2-3 years",
        description: "Blue toddler car bed without mattress can be used at a daycare or a Foster care home.",
        UserId:15
    },
    {
        title:"Fetal Heart",
        category: "Pregnancy & Maternity",
        condition: "Used (normal wear)",
        brand: "n/a",
        model: "n/a",
        ageRange: "0-6m",
        description: "You can listen to baby heart beat ❤️",
        UserId:16
    },
    {
        title:"Maternity belly belt, pregnancy back lumbar support",
        category: "Pregnancy & Maternity",
        condition: "New",
        brand: "n/a",
        model: "n/a",
        ageRange: "0-6m",
        description: "Maternity belly belt, pregnancy back lumbar support. Brand new. Similar to Belly bandit or Amazon Azmed. Stretches up to 56”",
        UserId:16
    },
    {
        title:"Baby Monitor w/camera",
        category: "Safety Equipment",
        condition: "Used (normal wear)",
        brand: "Vtech",
        model: "Baby Monitor with camera",
        ageRange: "0-6m",
        description: "baby monitor",
        UserId:17
    },
    {
        title:"Johnson’s Shampoo",
        category: "Bathing & Skincare",
        condition: "New",
        brand: "Johnson’s",
        model: "n/a",
        ageRange: "0-6m",
        description: "Baby Johnson’s shampoo. Some are 2in1. 4 bottles",
        UserId:17
    },
    {
        title:"Otteroo",
        category: "Bathing & Skincare",
        condition: "Used (normal wear)",
        brand: "Otteroo",
        model: "n/a",
        ageRange: "0-6m",
        description: "see the picutures for description",
        UserId:18
    },
    {
        title:"Cosco Umbrella Baby Stroller",
        category: "Strollers",
        condition: "Used (normal wear)",
        brand: "Cosco",
        model: "n/a",
        ageRange: "12-18m",
        description: "Cosco baby umbrella stroller good straps and light weight all wheels are good .breaks are good.last picture one small you can’t see.abit scratch.",
        UserId:18
    },
    {
        title:"Fisher Price Potty",
        category: "Potty Training",
        condition: "Used (normal wear)",
        brand: "Fisher price",
        model: "n/a",
        ageRange: "12-18m",
        status:"pending",
        description: "Nice potty chair for boy or girl",
        UserId:19
    },
    {
        title:"Baby Wipes",
        category: "Diapering",
        condition: "New",
        brand: "Rico ",
        model: "n/a",
        ageRange: "6-12m",
        description: "Bought too many for my girls, love to share with those who in need",
        UserId:19
    },
    {
        title:"Baby bottle sterilizer",
        category: "Others",
        condition: "Used (functional but missing part)",
        brand: "Brezza",
        model: "n/a",
        ageRange: "6-12m",
        description: "Used a few times, missing one small part but still works great",
        UserId:20
    },
    {
        title:"Baby Bath Robe",
        category: "Bathing & Skincare",
        condition: "Used (like new)",
        brand: "Carter's",
        model: "n/a",
        ageRange: "0-6m",
        description: "Rarely used, soft and like new robe",
        UserId:20
    },
    {
        title:"Boys pants",
        category: "Clothing, Shoes & Accessories",
        condition: "Used (normal wear)",
        brand: "Cat & Jack",
        model: "n/a",
        ageRange: "3-4 years",
        description: "Can be gifted separately one pair of khaki shorts and one pair of khaki pants",
        UserId:20
    },
]

const seedItems = () => Item.bulkCreate(itemData)

module.exports = seedItems
