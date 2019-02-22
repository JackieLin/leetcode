var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if (j - i > k) break;
            if (Math.abs(nums[j] - nums[i]) > t) continue;

            return true;
        }
    }

    return false;
};