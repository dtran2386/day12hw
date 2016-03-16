function makeNormalCar(make, model) {
    return {
        make: make,
        model: model,
        size: 1,
    };
}

function makeHugeCar(make, model) {
    return {
        make: make,
        model: model,
        size: 2,
    };
}

function makeGarage(lotsize) {
    return {
        lotsize: lotsize,
        spaces: [],
        park: function(car) {
            var available = this.lotsize - 1;
            for (var i = 1; i < this.spaces.length; i++) {
                if (this.spaces > this.available) {
                   this.spaces.push(car); 
                }
            }
        },
        full: function() {
            for (var i = 0; i < this.spaces.length; i++) {
                if (this.spaces[i] === this.size) {
                    return 'the lot is full';
                }
            }
        },
    };
}

var clunker = makeHugeCar('Hummer', 'H2');
var pinto = makeNormalCar('Ford', 'Pinto');

var lot = makeGarage(10);
/*for (var i = 0; i < 4; i++) {
   // Create new cars
   var car = makeNormalCar('Jeep', 'Cherokee');
   var suv = makeHugeCar('Chevy', 'Suburban');

   // Park the car. If there was space, say it was parked successfully.
   if (lot.park(car)) {
      console.log('Parked the ' + car.make);
   // If there wasn't space, say it wasn't parked successfully.
   } else {
      console.log('Couldnt park the ' + car.make);
   }

   // Do the same thing with the SUV.
   if (lot.park(suv)) {
      console.log('Parked the ' + suv.make);
   } else {
      console.log('Couldnt the ' + suv.make);
   }

   console.log('Is the lot full now?' + lot.full());
}*/