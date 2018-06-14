// Ratiorg got statues of different sizes as a present from CodeMaster for his
// birthday, each statue having an non-negative integer size. Since he likes to
// make things perfect, he wants to arrange them from smallest to largest so that
// each statue will be bigger than the previous one exactly by 1. He may need
// some additional statues to be able to accomplish that. Help him figure out the
// minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

input = [1,5,2,6];

function makeArrayConsecutive2(statues) {
    statues.sort(function (a, b) {
        return a - b;
    });
	let counter = 0;
	let max = statues[statues.length-1];
	let min=statues[0];
	for(i=min; i<max; i++) {
		if(!statues.includes(i)) {
			counter++;
		}
	}
	console.log(counter);
	return counter;
}
makeArrayConsecutive2(input);