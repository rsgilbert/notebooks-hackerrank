const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = arr.s
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

function activityAlerts(distances, d) {
  let notifications = 0
  distances.map((dist, idx) => {
    if(idx >= d) {
      let l = distances.slice(idx - d, idx)
      let med = median(l)
      
      if(dist >= 2 * med) {
        notifications ++
      }
    }
  })
  return notifications
}

activityAlerts([1, 2, 3, 4, 5], 3)




