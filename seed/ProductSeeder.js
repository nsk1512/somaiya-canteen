var Product = require('../models/product');

var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/canteen',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb://abc:z1y2x3w4@ds123003.mlab.com:23003/heroku_jkr2lql2',{useNewUrlParser: true, useUnifiedTopology: true});

var products = [
    new Product({
        imagePath: '/images/product-1.jpg',
        title: 'Simply Veg',
        price: 75,
        type: 1,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-2.jpg',
        title: 'Special Veg Pizza',
        price: 100,
        type: 1,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-3.jpg',
        title: 'China Gate Veg',
        price: 100,
        type: 1,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),


    new Product({
        imagePath: '/images/product-6.jpg',
        title: 'Pizza Crust Sandwich Veg',
        price: 120,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),
    new Product({
        imagePath: '/images/product-7.jpg',
        title: 'Garlic Bread',
        price: 80,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),
    new Product({
        imagePath: '/images/product-8.jpg',
        title: 'Orange Juice',
        price: 60,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),
    new Product({
        imagePath: '/images/product-9.jpg',
        title: 'Veg Tornado Pizza',
        price: 100,
        type: 1,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),
    new Product({
        imagePath: '/images/product-10.jpg',
        title: 'Veg Mexicana',
        price: 75,
        type: 1,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),


    new Product({
        imagePath: '/images/product-12.jpg',
        title: 'Cheese Balls',
        price: 50,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),
    new Product({
        imagePath: '/images/product-13.jpg',
        title: 'Cheesy Cauliflower Breadsticks',
        price: 60,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),
    new Product({
        imagePath: '/images/product-14.jpg',
        title: 'Eggplant Bites',
        price: 50,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0

    }),
    new Product({
        imagePath: '/images/product-15.jpg',
        title: 'Veg Italian Bruschetta Bar',
        price: 80,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-16.jpg',
        title: 'Veg Pesto Zoodles',
        price: 100,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-17.jpg',
        title: ' Veg Zucchini Fries',
        price: 100,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-18.jpg',
        title: 'Mango Juice',
        price: 60,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-19.jpg',
        title: 'Green Lime',
        price: 60,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-20.jpg',
        title: 'Lemon Zest',
        price: 60,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-21.jpg',
        title: 'Fruit Punch',
        price: 100,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-22.jpg',
        title: 'Pomegranate Juice',
        price: 60,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/product-23.jpg',
        title: 'Oreo Chocolate Frappe',
        price: 100,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),

    new Product({
        imagePath: '/images/Singapore rice.jpg',
        title: 'Singapore Rice',
        price: 65,
        type: 4,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/Biryani.jpg',
        title: 'Shezwan Rice',
        price: 100,
        type: 4,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/COver rice.jpg',
        title: 'Korean Rice',
        price: 60,
        type: 4,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/Hakka noodles.jpg',
        title: 'Hakka Noodles',
        price: 75,
        type: 4,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/Tea.jpg',
        title: 'Tea',
        price: 10,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    }),
    new Product({
        imagePath: '/images/coffee.jpg',
        title: 'Coffee',
        price: 15,
        type: 3,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n:0,
        rating:0,
        total:0
    })



];

var done=0;

for(var i=0;i<products.length;i++)
{
    products[i].save(function (err, result) {
        done++;
        if(done === products.length)
            exit();

    });
}

function exit(){
    mongoose.disconnect();
}
