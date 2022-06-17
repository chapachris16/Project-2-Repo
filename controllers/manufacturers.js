const express = require("express");
const { Types } = require("mongoose");
const manufacturer = require("../models/manufacturers");
const Manufacturer = require("../models/manufacturers");
const ObjectId = require("mongodb").ObjectId;
// Create route
const router = express.Router();

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/");
  }
});

// INDEX OF MANUFACTURERS

router.get("/", (req, res) => {
  Manufacturer.find({})
    .then((manufacturers) => {
      console.log(manufacturers);
      res.render("manufacturers/index.liquid", { manufacturers });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});
// NEW ROUTE FOR MANUFACTURERS
router.get("/new", (req, res) => {
  res.render("manufacturers/new.liquid");
});
// NEW ROUTE FOR CARS
router.get("/:id/new", (req, res) => {
  Manufacturer.findById(req.params.id).then((manufacturer) => {
    res.render("cars/new.liquid", { manufacturer });
  });
});

// POST NEW CAR
router.post("/:id", (req, res) => {
  const id = req.params.id;
  Manufacturer.findById(id)
    .then((manufacturer) => {
        manufacturer.cars.push(req.body);
        manufacturer.save((error) => {
        res.redirect(`/manufacturers/${manufacturer.id}`);
    });
  });
});

// POST NEW MANUFACTURER TO INDEX
router.post('/', (req,res) => {
    Manufacturer.create(req.body)
        .then((manufacturer) => {
            res.redirect('/manufacturers')
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})

// UPDATE MANUFACTURERS ROUTE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Manufacturer.findByIdAndUpdate(id, req.body, { new: true }).then(
    (manufacturer) => {
      res.redirect(`/manufacturers/${manufacturer._id}`);
    }
  );
});

// // UPDATE CARS ROUTE
// router.put('/:id/cars/:car_id', (req, res) => {
//     const id = req.params.id
//     const car_id = req.params.car_id
//     Manufacturer.findById(id)
//         .then((manufacturer) => {
//             const cars = manufacturer.cars
//             let index = cars.findIndex(cars => cars.id === `${car_id}`)
//             cars[index].name = req.body.name
//             cars[index].img = req.body.img
//             cars[index].year = req.body.year
//             cars[index].hp = req.body.hp
//             cars[index].seats = req.body.seats
//             manufacturer.save((error) => {
//                 res.redirect(`/manufacturers/${id}/cars/${car_id}`);
//             })
//         })
// })

// // EDIT CARS ROUTE
// router.get("/:id/cars/:car_id/edit", (req, res) => {
//   const id = req.params.id;
//   const car_id = req.params.car_id;
//   Manufacturer.findById(id)
//     .then((manufacturer) => {
//       const cars = manufacturer.cars;
//       let index = cars.findIndex((cars) => cars.id === `${car_id}`);
//       res.render("cars/edit.liquid", { manufacturer, index });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });

// EDIT MANUFACTURERS ROUTE

router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  Manufacturer.findById(id)
    .then((manufacturer) => {
      res.render("manufacturers/edit.liquid", { manufacturer });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// DELETE MANUFACTURER
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Manufacturer.findByIdAndRemove(id)
    .then((manufacturer) => {
      res.redirect("/manufacturers");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});


// DELETE CARS
router.delete('/:id/cars/:car_id', (req, res) => {
    const id = req.params.id
    const car_id = req.params.car_id
    Manufacturer.findById(id)
        .then((manufacturer) => {
            const cars = manufacturer.cars;
            let index = cars.findIndex((cars) => cars.id === `${car_id}`)
            cars.splice(index,1)
            manufacturer.save((error) => {
                res.redirect(`/manufacturers/${id}`);
            });
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
        
})

// SHOW ROUTE FOR SPECIFIC MANUFACTURER
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Manufacturer.findById(id)
    .then((manufacturer) => {
      res.render("manufacturers/show.liquid", { manufacturer });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// SHOW ROUTE FOR SPECIFIC CAR
router.get("/:id/cars/:car_id", (req, res) => {
  const id = req.params.id;
  const car_id = req.params.car_id;
  console.log(`This is car id ${car_id}`);
  console.log(`This is manufacturer id ${id}`);

  Manufacturer.findById(id)
    .then((manufacturer) => {
      const cars = manufacturer.cars;
      console.log(cars);
      let index = cars.findIndex((cars) => cars.id === `${car_id}`);
      // let index = cars.findIndex((cars) => cars._id === `${car_id}`); WRONGGGGGGGGGGGGG
      //     // console.log(car_id)
      console.log(index);
      console.log(manufacturer.cars[index]);
      res.render("cars/show.liquid", { manufacturer, index });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});
module.exports = router;
