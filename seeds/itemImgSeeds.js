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
    {
        ItemId: 16,
        url:"https://thumbor.offerup.com/mARCTwtMK5qSkw-39tmDG6QD8Tk=/1920x1920/e5e7/e5e7233557c04b9085321b8a8cab9582.jpg"
    },
    {
        ItemId: 16,
        url:"https://thumbor.offerup.com/fvuDbczIdmFfzfCaL_UUMVI-7KM=/1920x1920/f747/f747f4b93b9b49fabee0f933d9b02587.jpg"
    },
    {
        ItemId: 16,
        url:"https://thumbor.offerup.com/_ud_0snyFjgVA5828zN-JYMhn1o=/1920x1920/733a/733a806ec92046f38fa0ecec48c777b3.jpg"
    },
    {
        ItemId: 17,
        url:"https://thumbor.offerup.com/z56l6-rW7z8cqDUGkJXJjze2WTE=/864x883/8445/84459dfaa5314f35863e85a5a8083ff1.jpg"
    },
    {
        ItemId: 17,
        url:"https://thumbor.offerup.com/Ivd4wNEi7hBybzcjd9IpP2PuCHw=/780x1040/166f/166f2a91286144ae82c44a3150db2455.jpg"
    },
    {
        ItemId: 17,
        url:"https://thumbor.offerup.com/BXIzd-llDRh6yUW2QbWdTkaed4g=/540x540/3df9/3df914436a754d3794a00a1287902525.jpg"
    },
    {
        ItemId: 18,
        url:"https://thumbor.offerup.com/ihu1Iph33qnC7TU6kmp942o21eE=/828x1146/0af2/0af2524a652e499182acd5a43427af14.jpg"
    },
    {
        ItemId: 18,
        url:"https://thumbor.offerup.com/1PtXlbOfcXHgGNnxcaWoQqIxd20=/1440x1920/65d7/65d7c5c6c4d8472eb13749a28b051136.jpg"
    },
    {
        ItemId: 19,
        url:"https://thumbor.offerup.com/AZad023iknWA9YeTLYibr1L3boA=/864x1152/ff5b/ff5b7ee5b2c54d84849d4ce947510014.jpg"
    },
    {
        ItemId: 19,
        url:"https://thumbor.offerup.com/CYFEnhB9Y6jyoKIPIKJEiQw0gC8=/864x1152/b9fc/b9fc03232a6644e981da2d910e2df3e0.jpg"
    },
    {
        ItemId: 20,
        url:"https://thumbor.offerup.com/ZA2jDihl7x3GTxftA4GbSydA7OQ=/816x612/4c58/4c584b4f644043908bdebf7177978159.jpg"
    },
    {
        ItemId: 21,
        url:"https://thumbor.offerup.com/neJ4rLlWH7C09UfXuRSh9lVwF_Q=/1442x1922/38ef/38efe8507a964327972547e44399dc13.jpg"
    },
    {
        ItemId: 21,
        url:"https://thumbor.offerup.com/ym7kSi_FWSqvgD5u2SrCAfOGZKM=/1442x1922/a786/a786a5490bfa46aabd7af4444dd6b50a.jpg"
    },
    {
        ItemId: 22,
        url:"https://thumbor.offerup.com/xXp33hyLPVLU2QbjtFHA3_dk-Qk=/750x1000/894e/894e302e48354b98bdfaf760b3bab08b.jpg"
    },
    {
        ItemId: 23,
        url:"https://thumbor.offerup.com/IL6tzo3lxmVy7AbPvRNL6nxQa8M=/1440x1920/2d8e/2d8e008bc61f4bd98c06f1ed6f99c889.jpg"
    },
    {
        ItemId: 23,
        url:"https://thumbor.offerup.com/zVugBXE6r9iuTKQZMd_667S_xE8=/1440x1920/2bdb/2bdb59f1f06844288cd6b308a8cb27a6.jpg"
    },
    {
        ItemId: 24,
        url:"https://thumbor.offerup.com/5WYjx51BMqOd5dFsR4GzluSVKd8=/828x542/126d/126d80bf205b4845b41bf1a44e5d7d16.jpg"
    },
    {
        ItemId: 24,
        url:"https://thumbor.offerup.com/Ts60hCRL6YRngO9oAgpa_ckMhg4=/828x556/eb98/eb98658604774e8daccaf84ec3a13c19.jpg"
    },
    {
        ItemId: 25,
        url:"https://thumbor.offerup.com/RkpriuYzCmiQuM183zerdnb2KsM=/1920x1920/9fc6/9fc6fbad168348e3956df29c03876242.jpg"
    },
    {
        ItemId: 26,
        url:"https://thumbor.offerup.com/W7x1_0aH2O6C8IwTMOQ2sqnvvhc=/1536x2048/a8d5/a8d501fa669d4f7dbbe9ddd7009cb3be.jpg"
    },
    {
        ItemId: 26,
        url:"https://thumbor.offerup.com/0TM7AhTy63KjirFFDG7ttjDf9aE=/1536x2048/38ea/38ea017aacbf43c0ab0033f4d5fec9fc.jpg"
    },
    {
        ItemId: 26,
        url:"https://thumbor.offerup.com/6TbG85kfsVQQE3DuWmIh8P_0fvk=/1536x2048/25cd/25cd8d750614480694db1be4a55ae2ba.jpg"
    },
    {
        ItemId: 27,
        url:"https://thumbor.offerup.com/xHDsN0popfG31dTbc_OHxeMRUlk=/750x1000/8731/873198cb70924c7fa7af18b868597dd1.jpg"
    },
    {
        ItemId: 28,
        url:"https://thumbor.offerup.com/G74CprquHLDAk6sO69tnqz1AZsY=/1920x1920/3158/3158081602b14ad79d5299b20e1e9987.jpg"
    },
    {
        ItemId: 29,
        url:"https://cdn.stamped.io/uploads/photos/230622_4255570100363_389bcb88_7fb6_41f2_8471_029e9b199891.jpg"
    },
    {
        ItemId: 29,
        url:"https://thumbor.offerup.com/4utsywV_K2snEWAHH-5M_ewsuuE=/1125x1094/ed96/ed9614da758746f79f24f811b9d3cdf3.jpg"
    },
    {
        ItemId: 29,
        url:"https://thumbor.offerup.com/KQx-YAWR5s6EvgxKkaBDbWEHP5U=/1125x1091/1086/10867a692d5a4e09847f50fa34a89378.jpg"
    },
    {
        ItemId: 30,
        url:"https://thumbor.offerup.com/CAs0ZhLbbyZk94ALMMzR1_1Iq0I=/1440x1920/6502/65028e84800048a29ac7e29261ef0bd0.jpg"
    },
    {
        ItemId: 30,
        url:"https://thumbor.offerup.com/pgtlEdG2Zabv8I5BQrG3iAM-i6k=/1440x1920/bef8/bef847eca9674b4bbb4f7079137df4f8.jpg"
    },
    {
        ItemId: 30,
        url:"https://thumbor.offerup.com/IpEojt0wFqBPzF07HShPoTie3WE=/1920x1920/5582/5582cf05fd484eb6b26497401c37b441.jpg"
    },
    {
        ItemId: 31,
        url:"https://thumbor.offerup.com/Tz1Gx9AXbti8LLuxJRnQyrf1dpY=/750x1000/51ba/51badd96c6384e0e90fbb934f0657696.jpg"
    },
    {
        ItemId: 31,
        url:"https://thumbor.offerup.com/NuJR6cukpEiNbOQEVeLXLeZ5Qjo=/1000x750/d55a/d55a9a939a5e4e5fa458cb3cd2dc364d.jpg"
    },
    {
        ItemId: 31,
        url:"https://thumbor.offerup.com/JHp4naB0WB1g5a8eNu7vlsaJujI=/750x1000/bbcb/bbcba442455140f995af3e59e2297da0.jpg"
    },
    {
        ItemId: 32,
        url:"https://thumbor.offerup.com/occAfzCrMJEKu8x1t-aUq_bYJEQ=/1920x1920/a62f/a62f09496a48421db640660c86678f89.jpg"
    },
    {
        ItemId: 32,
        url:"https://thumbor.offerup.com/VXodQXgk-BsxUSMTnkCU-UZtywE=/1920x1920/a1f0/a1f01118d9124707a9f8af8c10cb93ce.jpg"
    },

    {
        ItemId: 33,
        url:"https://thumbor.offerup.com/nEmweD3_GVMuKkpi0ykhNN9VY34=/1440x1920/3c21/3c219e113d464af3b02193ebce595296.jpg"
    },
    {
        ItemId: 33,
        url:"https://thumbor.offerup.com/PAMy09g6ARUt0uyqvpSDTuzIvWQ=/750x1334/ba26/ba269244d8f94bbdbfb7cdbf3ba98e1f.jpg"
    },
    {
        ItemId: 34,
        url:"https://thumbor.offerup.com/ZLpSqU0DM3x7Pk-uo-5N-fKwRvs=/1440x1920/79d2/79d2c1c984d641338f83df618ad1f548.jpg"
    },
    {
        ItemId: 34,
        url:"https://thumbor.offerup.com/tuc8GeuB2872oBUg9wYm8DLbdh4=/1440x1920/3df8/3df8b6fcd137425abd04593a2f32651b.jpg"
    },

    {
        ItemId: 35,
        url:"https://thumbor.offerup.com/xmxPERGVRpFtKcgoLN9Xarb9mS8=/1728x2304/8e29/8e29c39bff104d7f939b21fac033ae18.jpg"
    },
    {
        ItemId: 35,
        url:"https://thumbor.offerup.com/15FqN5QhgCUfnbflTxs93snaoLg=/1728x2304/ab3b/ab3bde6cd75a4817b934f527c927a322.jpg"
    },
]

const seedItemImage = () => ItemImg.bulkCreate(imageData)

module.exports = seedItemImage