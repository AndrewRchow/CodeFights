/*You are given an array of integers representing coordinates of obstacles
situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You
are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.
*/

function avoidObstacles(inputArray) {
	inputArray = inputArray.sort(function(a,b) {
		return a-b;
	});
	var avoided = false;
	var maxVal = inputArray[inputArray.length-1];
	for(var i = 2; i<maxVal; i++){
		for(var j = 0; j<inputArray.length; j++){
			if(inputArray[j]%i==0){
				avoided = false;
				break;
			}
			avoided = true;

		}
		if(avoided) return i;
	}

	return maxVal + 1;
}

console.log(avoidObstacles([49, 607, 611, 815, 378, 200, 731, 252, 295, 175, 676, 244, 713, 701, 208, 662, 672, 896, 534, 476, 745, 231, 497, 398, 913, 145, 211, 886, 693, 384, 843, 937, 76, 407, 733, 647, 96, 226, 117, 359, 525, 15, 298, 341, 503, 823, 952, 483, 457, 223, 436, 89, 427, 91, 584, 902, 989, 968, 498, 983, 749, 742, 608, 967, 422, 945, 763, 355, 600, 702, 666, 195, 333, 157, 228, 828, 874, 948, 565, 625, 859, 394, 652, 804, 853, 113, 347, 772, 10, 855, 446, 156, 19, 306, 555, 663, 177, 917, 829, 12, 388, 212, 644, 997, 444, 696, 806, 754, 550, 820, 980, 297, 536, 474, 609, 617, 656, 755, 681, 776, 871, 120, 439, 758, 869, 925, 371, 260, 863, 362, 229, 775, 591, 642, 148, 237, 812, 999, 798, 387, 729, 272, 222, 594, 314, 197, 373, 963, 67, 469, 250, 166, 841, 246, 538, 527, 898, 954, 14, 440, 265, 454, 546, 20, 52, 985, 74, 399, 17, 927, 351, 802, 814, 613, 393, 796, 708, 632, 994, 279, 332, 334, 788, 412, 512, 179, 470, 597, 220, 60, 350, 659, 138, 146, 711, 259, 224, 951, 773, 766, 523, 263, 575, 370, 935, 132, 114, 6, 573, 897, 97, 864, 84, 671, 210, 585, 435, 560, 567, 724, 249, 844, 533, 595, 619, 243, 582, 11, 915, 667, 757, 974, 16, 92, 669, 127, 603, 66, 771, 845, 892, 726, 910, 420, 154, 620, 161, 352, 116, 214, 181, 490, 943, 105, 56, 848, 381, 7, 464, 817, 944, 319, 499, 932, 734, 227, 292, 94, 519, 190, 789, 740, 23, 962, 811, 41, 909, 1, 187, 610, 238, 736, 837, 686, 885, 126, 799, 137, 934, 655, 838, 107, 544, 426, 274, 628, 169, 689, 960, 692, 756, 630, 590, 38, 884, 627, 783, 900, 561, 718, 196, 759, 541, 316, 438, 51, 664, 217, 186, 93, 106, 346, 697, 235, 988, 408, 312, 405, 1000, 785, 481, 524, 831, 640, 668, 29, 134, 443, 26, 511, 3, 832, 421, 172, 770, 528, 270, 317, 343, 521, 301, 219, 174, 366, 124, 271, 615, 285, 553, 280, 380, 119, 103, 744, 397, 468, 184, 958, 719, 568, 690, 273, 901, 522, 589, 324, 566, 877, 643, 379, 329, 720, 810, 631, 500, 593, 761, 410, 57, 987, 506, 356, 517, 447, 296, 955, 700, 392, 364, 218, 816, 183, 255, 530, 532, 44, 234, 760, 232, 805, 929, 360, 460, 365, 703, 311, 956, 698, 687, 247, 100, 262, 513, 326, 704, 135, 947, 557, 367, 2, 456, 916, 649, 579, 480, 918, 931, 85, 800, 764, 473, 162, 622, 830, 178, 78, 39, 69, 88, 679, 808, 586, 136, 199, 743, 976, 650, 975, 442, 735, 752, 340, 737, 933, 142, 739, 304, 382, 206, 389, 320, 715, 873, 769, 991, 336, 353, 850, 510, 878, 451, 55, 256, 25, 587, 171, 303, 385, 372, 677, 45, 225, 883, 949, 973, 48, 882, 854, 612, 141, 862, 635, 90, 449, 780, 867, 623, 149, 403, 282, 562, 47, 489, 899, 477, 424, 860, 876, 574, 856, 182, 779, 400, 287, 747, 505, 70, 888, 98, 416, 559, 248, 452, 924, 53, 383, 337, 636, 376, 563, 995, 646, 453, 818, 33, 95, 194, 151, 651, 413, 746, 790, 415, 961, 58, 548, 728, 46, 889, 158, 437, 155, 682, 723, 750, 99, 616, 129, 251, 880, 404, 308, 80, 907, 75, 706, 705, 496, 782, 803, 419, 819, 34, 414, 488, 946, 173, 396, 83, 281, 645, 291, 660, 108, 276, 658, 596, 463, 914, 592, 204, 727, 188, 299, 159, 327, 170, 926, 993, 358, 604, 269, 111, 8, 801, 31, 441, 849, 807, 77, 614, 545, 267, 504, 123, 322, 277, 911, 633, 61, 73, 784, 266, 152, 996, 125, 445, 493, 629, 941, 315, 165, 942, 71, 253, 531, 459, 694, 361, 401, 939, 990, 54, 310, 492, 866, 895, 712, 245, 777, 375, 35, 722, 922, 861, 323, 787, 872, 972, 465, 535, 101, 377, 335, 665, 110, 992, 209, 732, 905, 475, 984, 495, 821, 160, 751, 491, 638, 423, 526, 578, 839, 339, 969, 621, 537, 201, 515, 268, 936, 180, 241, 881, 982, 684, 570, 846, 430, 923, 825, 428, 118, 509, 858, 328, 678, 86, 569, 215, 827, 22, 254, 840, 257, 432, 484, 834, 122, 50, 140, 82, 661, 688, 540, 542, 986, 133, 551, 450, 286, 852, 348, 325, 950, 309, 502, 198, 564, 786, 721, 981, 605, 305, 494, 290, 507, 741, 938, 514, 30, 971, 164, 406, 104, 921, 762, 288, 28, 857, 791, 9, 64, 725, 283, 836, 37, 572, 626, 606, 342, 695, 648, 639, 345, 207, 598, 618, 43, 42, 903, 368, 765, 920, 674, 236, 87, 72, 919, 363, 230, 68, 176, 977, 130, 239, 300, 549, 768, 998, 429, 102, 634, 716, 518, 875, 673, 386, 680, 552, 957, 374, 964, 581, 191, 221, 487, 79, 501, 576, 40, 150, 577, 144, 797, 112, 472, 847, 5, 433, 793, 167, 390, 792, 580, 485, 121, 143, 851, 321, 508, 556, 302, 879, 738, 813, 940, 826, 27, 781, 36, 242, 65, 479, 431, 865, 767, 467, 657, 275, 904, 193, 547, 205, 717, 163, 748, 461, 809, 868, 278, 147, 602, 908, 213, 601, 425, 978, 870, 543, 13, 331, 455, 685, 354, 824, 890, 261, 730, 434, 707, 466, 529, 970, 670, 318, 930, 891, 109, 653, 115, 62, 185, 795, 189, 842, 411, 675, 357, 32, 458, 168, 313, 81, 59, 794, 588, 203, 417, 906, 462, 24, 683, 516, 471, 965, 699, 258, 583, 835, 349, 153, 887, 571, 953, 293, 294, 409, 139, 330, 4, 338, 558, 344, 391, 482, 240, 520, 369, 128, 402, 833, 21, 192, 714, 637, 691, 979, 131, 486, 928, 539, 822, 284, 959, 641, 307, 654, 448, 18, 202, 233, 893, 778, 395, 753, 554, 624, 894, 418, 912, 264, 63, 709, 774, 478, 289, 966, 599, 216, 710]));
