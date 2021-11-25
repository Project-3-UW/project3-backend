const { ItemImg } = require("../models")

const imageData = [
    {
        ItemId: 1,
        url:"https://www2.assets-gap.com/webcontent/0017/769/140/cn17769140.jpg"
    },
    {
        ItemId: 1,
        url:"https://www2.assets-gap.com/webcontent/0027/446/831/cn27446831.jpg"
    },
    {
        ItemId: 1,
        url:"https://www2.assets-gap.com/webcontent/0019/313/650/cn19313650.jpg"
    },
    {
        ItemId: 2,
        url:"https://media.kohlsimg.com/is/image/kohls/2075762_Studio?wid=1200&hei=1200&op_sharpen=1"
    },
    {
        ItemId: 3,
        url:"https://thumbor.offerup.com/0tBDYjKPB2ZZHRS9q0QXd-fHVT0=/888x1920/2766/27661e30fab048fcb785412fb8de40a8.jpg"
    },
    {
        ItemId: 3,
        url:"https://thumbor.offerup.com/f3mpNX0STzzE9t7F9vV0V3Ord94=/1922x1442/4bb3/4bb39c5d12bd4dac8bdcb9d00c6b68df.jpg"
    },
    {
        ItemId: 3,
        url:"https://thumbor.offerup.com/YhiD1tgLXynXBcGWrnI9GmB8hSQ=/1922x1442/6a97/6a97daa701234e5dbfdec66616404c6e.jpg"
    },
    {
        ItemId: 4,
        url: "https://thumbor.offerup.com/hgIJXH8UEmFKojmeZ-bLxdMiEIY=/1920x1920/15e9/15e96f2ceeb144b3b70673cbc10d3cca.jpg"
    },
    {
        ItemId: 4,
        url:"https://thumbor.offerup.com/5y8eqYN3U_DcGm0FbgKSVO5FLiE=/1920x1920/2bab/2bab01be8f79478b8943148346aa0925.jpg"
    },
    {
        ItemId: 4,
        url:"https://thumbor.offerup.com/je6Yoex9e0idHaYqkpPkrW84CBs=/1920x1920/8b86/8b8653e615f24b4197aed40b469f3975.jpg"
    },
    {
        ItemId: 5,
        url:"https://thumbor.offerup.com/k_34A-VWhdGg7syn2AKn4_BKghU=/1442x1442/ae28/ae289b845c524a86b6848bf672179cd9.jpg"
    },
    {
        ItemId: 6,
        url:"https://thumbor.offerup.com/OxyKXOytojkeeHDTkKvBR8_Ev40=/1440x1920/5cdb/5cdb8d45279e428d82c594db6150b2a7.jpg"
    },
    {
        ItemId: 7,
        url:"https://thumbor.offerup.com/dUsY-TCzjSPAWYIIxuylxy1mDXo=/1440x1920/f6bf/f6bf0996fd324f4f94cf6ea220f542f8.jpg"
    },
    {
        ItemId: 7,
        url:"https://thumbor.offerup.com/GXD0T4pMPq-29VmqEFJ8o3YqQ_k=/1440x1920/f8ec/f8ec2bc623954fdd92c87a807067b3e0.jpg"
    },
    {
        ItemId: 8,
        url:"https://thumbor.offerup.com/vLzcazrQUmtBZQgujoFbQSocMgk=/756x1008/64d7/64d73bd94abf4ff382347c466b852fc2.jpg"
    },
    {
        ItemId: 8,
        url:"https://thumbor.offerup.com/kIDzA6TdgTLNZWv8IFmQDDoZZiQ=/756x1008/df28/df286902606d4832bf48313896aa0bf0.jpg"
    },
    {
        ItemId: 9,
        url:"https://thumbor.offerup.com/nG3ZfnagtecVCWZlbgqaUSE8yF4=/1922x1442/c3b6/c3b62ee7900143119105dbedf539916b.jpg"
    },
    {
        ItemId: 9,
        url:"https://thumbor.offerup.com/K8JBkjcc-i5J_hcAD571XCJQZ1A=/1922x1442/7c2e/7c2ece759fe140c28909ee3c8e67e613.jpg"
    },
    {
        ItemId: 9,
        url:"https://thumbor.offerup.com/EJF-vizds5kp_dqMEezVP64swko=/1922x1442/d3e8/d3e8725452ad45ddbb2c6307befdd83a.jpg"
    },
    {
        ItemId: 10,
        url:"https://thumbor.offerup.com/OVUQ8qCTeQjW87_I10yW4Yh_6oA=/1440x1920/26e5/26e5477d5f704d5d93638c75af6464f7.jpg"
    },
    {
        ItemId: 10,
        url:"https://thumbor.offerup.com/vheO9zQtojjPPOTNtwnZ83C3I6A=/1440x1920/2598/259887d1adbc4f9b95bdb79ae703a526.jpg"
    },
    {
        ItemId: 11,
        url:"https://thumbor.offerup.com/mHnhS8CLf-Me8oY-8sAILhrp1iw=/1920x1920/9141/9141fe0d07ba41b6903bfb2ea534d6ca.jpg"
    },
    {
        ItemId: 12,
        url:"https://thumbor.offerup.com/jMvmBE-boilHTO2tr8pLVVkX93I=/750x1000/5e26/5e26449cd7a5441fac9dcbd46a197435.jpg"
    },
    {
        ItemId: 13,
        url:"https://thumbor.offerup.com/lXFxsOjAPtnrXrhHLcpK9mlpffw=/1920x1920/23b4/23b47a1aa8b644ca8269efa02dece7bb.jpg"
    },
    {
        ItemId: 13,
        url:"https://thumbor.offerup.com/R5c1DcVz1og7qK4XIb_hLLlBCBE=/1920x1920/c237/c2375ae5fdb748a9a1d12825b5e99daf.jpg"
    },
    {
        ItemId: 14,
        url:"https://thumbor.offerup.com/JXC8p0Bz76PDpflZaBRYXHhdB9o=/1440x1920/85b9/85b982c4fad440e4b6d64302be5abaed.jpg"
    },
    {
        ItemId: 15,
        url:"https://thumbor.offerup.com/HUA2sY4bqeF-1GwKD7OxlhL-Wgg=/756x1008/8e61/8e61220a38d84860803f52c1f005fd42.jpg"
    },
]

const seedItemImage = () => ItemImg.bulkCreate(imageData)

module.exports = seedItemImage