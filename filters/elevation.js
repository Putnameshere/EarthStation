/*
 * EarthStation v0.3
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/EarthStation
 * License: MIT
 */

function elevation_filter() {
  return function (input) {
    if (typeof input !== 'number') { return input; }
    var degrees = (input/Math.PI*180) % (360);
    if (degrees > 180 && degrees < 360){
      degrees = 360 - degrees;
      degrees *= -1;
      degrees = degrees.toPrecision(4);
      degrees+=" D";
    }
    else {
      degrees = degrees.toPrecision(4);
      degrees+=" U";
    }
    return degrees;
  };
};
