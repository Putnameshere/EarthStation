/*
 * EarthStation v1.0
 * (c) 2014 William Ye & Julie T. Do @ UCSC
 * https://github.com/Putnameshere/EarthStation
 *
 * EarthStation v0.3
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/EarthStation
 * License: MIT
 */

function longitude_filter() {
  return function (input){
    if (typeof input !== 'number') { return input; }
    var degrees = (input/Math.PI*180) % (360);
    if (degrees > 180){
      degrees = 360 - degrees;
    }
    else if (degrees < -180){
      degrees = 360 + degrees;
    }
    degrees = degrees.toPrecision(4);
    if (degrees > 0) {
      degrees += " E"
    }
    else if (degrees <= 0){
      degrees *= -1;
      degrees += " W"
    }
    return degrees;
  };
};
