"use strict"

function tri(list, order){
    let nums = new Uint8Array(list.length)
    for (let index = 0; index < list.length; index++) {
        nums[index] = list[index]        
    }
    nums.sort()

    if (order == "asc"){
        console.log(nums)
    }
    else if (order == "desc"){
        nums.reverse()
        console.log(nums)
    }
}

tri([3, 7, 1, 6, 4, 2], "asc")
tri([3, 7, 1, 6, 4, 2], "desc")