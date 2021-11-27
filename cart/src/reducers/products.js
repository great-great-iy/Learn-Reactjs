import * as types from './../constants/ActionTypes';

var initialState = [
    {
        id : 1,
        name : 'Iphone 5',
        image : 'https://th.bing.com/th/id/R.c90c98c854bc821c15cde8d7f03d90c1?rik=4UjSv8N19UrlXw&pid=ImgRaw&r=0',
        description : 'Sản phẩm được sản xuất tại VN, do Apple sản xuất',
        price : 400,
        inventory : 10,
        rating : 3
    },
    {
        id : 2,
        name : 'Iphone 6',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm được sản xuất tại VN, do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 3,
        name : 'Iphone 7',
        image : 'https://th.bing.com/th/id/R.502a2532aea13616d8f4c16a686b1c8b?rik=93Nh13bRiCIfZw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1662%2f8203%2fproducts%2f3_5528919c-82ec-4596-a644-36da10cfc14f_1024x1024.jpg%3fv%3d1551817975&ehk=mRkcmiYnyU9%2f4BUpvfgKLn3bxTo%2fJNTcBK3eyKdZcSA%3d&risl=&pid=ImgRaw&r=0',
        description : 'Sản phẩm được sản xuất tại VN, do Apple sản xuất',
        price : 600,
        inventory : 10,
        rating : 5
    }    
];

const products = (state = initialState, action) => {
    switch (action.type){
        default: return [...state];
    }
}

export default products;