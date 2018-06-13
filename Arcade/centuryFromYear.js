// Given a year, return the century it is in. The first century spans from the
// year 1 up to and including the year 100, the second - from the year 101 up to
// and including the year 200, etc.

// Example
// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

input = 2017;
function centuryFromYear(year) {
	var isExact = year%100;
	var century = year/100;
	if (isExact == 0) {
		console.log(century);
		return century;
	}else {
		console.log(Math.floor(century) +1);
		return Math.floor(century) +1;
	}
}
centuryFromYear(input);