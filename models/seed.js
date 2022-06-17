// DEPENDENCIES
const mongoose = require('./connections')
const Manufacturer = require('./manufacturers')
const db = mongoose.connection

db.on("open", () => {
  const startManufacturers = [
    {
        name: 'Toyota',
        img: 'https://icon2.cleanpng.com/20180323/daq/kisspng-toyota-quickdelivery-car-toyota-prius-logo-subaru-5ab54bb00cfe48.9421183115218308320532.jpg',
        cars: [  {
            name: 'GR Supra',
            img: 'https://www.kindpng.com/picc/m/437-4370524_toyota-gr-supra-philippines-hd-png-download.png',
            year: 2021,
            price: 51890,
            hp: 382,
            seats: 2
        },
        {
            name: 'GR86',
            img: 'https://freebiescloud.com/wp-content/uploads/2022/01/Toyota-GR-86-2022-6.png',
            year: 2022,
            price: 27900,
            hp: 228,
            seats: 4
        },
        ],
    },

    {
        name: 'Subaru',
        img: 'https://w7.pngwing.com/pngs/960/170/png-transparent-subaru-logo-subaru-impreza-wrx-car-subaru-xv-fuji-heavy-industries-car-logo-emblem-trademark-logo-thumbnail.png',
        cars: [ {
            name: 'WRX STI',
            img: 'https://icon2.cleanpng.com/20180329/xoq/kisspng-subaru-impreza-wrx-sti-2018-subaru-wrx-sti-2017-su-subaru-5abce3420d2a07.3302556315223283860539.jpg',
            year: 2021,
            price: 38050,
            hp: 310,
            seats: 5
        },],
        avg_cost:0,
        avg_hp: 0
    },
    
    {
        name: 'Honda',
        img: 'https://w7.pngwing.com/pngs/710/441/png-transparent-honda-logo-car-honda-cr-v-honda-accord-honda-angle-text-logo-thumbnail.png',
        cars: [ {
            name: 'Civic Type R',
            img: 'https://icon2.cleanpng.com/20180423/bsq/kisspng-2018-honda-civic-type-r-car-front-wheel-drive-driv-white-2018-5adeabad28a2b1.3429511515245423811665.jpg',
            year: 2019,
            price: 37895,
            hp: 306,
            seats: 5
        },],
    },

    {
        name: 'Ford',
        img: 'https://w7.pngwing.com/pngs/592/644/png-transparent-ford-logo-ford-motor-company-car-ford-mustang-chrysler-ford-logo-icon-miscellaneous-emblem-trademark-thumbnail.png',
        cars: [ {
            name: 'Ford GT',
            img: 'https://www.pngkey.com/png/detail/64-641806_ford-png-hd-wallpaper-ford-gt-2016.png',
            year: 2018,
            price: 450000,
            hp: 647,
            seats: 2
        },],
    },

    {
        name: 'Chevrolet',
        img: 'https://w7.pngwing.com/pngs/332/661/png-transparent-chevrolet-aveo-general-motors-car-chevrolet-express-chevrolet-angle-logo-car-thumbnail.png',
        cars: [{
            name: 'Corvette',
            img: 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/14487/2021-Chevrolet-Corvette-front_14487_032_2400x1800_G8G.png',
            year: 2021,
            price: 59900,
            hp: 495,
            seats: 2
        },],
        avg_cost:0,
        avg_hp: 0
    },

    {
        name: 'Mazda',
        img: 'https://w7.pngwing.com/pngs/627/216/png-transparent-mazda-logo-mazda-rx-8-car-mazda-premacy-mazda-familia-mazda-emblem-text-trademark-thumbnail.png',
        cars: [{
            name: 'RX-7',
            img: 'https://static.cargurus.com/images/site/2008/04/14/23/38/2001_mazda_rx-7-pic-4337-1600x1200.jpeg',
            year: 1995,
            price: 32500,
            hp: 255,
            seats: 4
        },],
        avg_cost:0,
        avg_hp: 0
    },
  ]
    
    // ////////////////////////////////////
    // ////////////////////////////////////
    // ///// Seed for cars here //
    // ////////////////////////////////////

    Manufacturer.deleteMany({Manufacturer})
    .then((deletedManufacturers) => {
        Manufacturer.create(startManufacturers)
        .then((newManufacturer)=>{
            console.log(newManufacturer)
            db.close()
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
            db.close()
        })
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })

    // Car.deleteMany({Car})
    // .then((deletedCars) => {
    //     Car.create(startCars)
    //     .then((newCars)=>{
    //         console.log(newCars)
    //         db.close()
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //         res.json({error})
    //         db.close()
    //     })
    // })
    // .catch((error) => {
    //     console.log(error)
    //     res.json({error})
    // })
})