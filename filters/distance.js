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

function distance_filter() {
    return function (input) {
        if (typeof input !== 'number') { return input; }
        var alt = input.toPrecision(4);
        alt += " km";
        return alt;
    };
};
