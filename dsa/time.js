function findSmallestClockAngle(hour, minute) {
  // Validate input
  if (hour < 0 || hour > 12 || minute < 0 || minute > 59) {
    return "Invalid input. Hour should be between 0 and 12, and minute should be between 0 and 59.";
  }

  const hourAngle = 0.5 * (60 * hour + minute); // hour hand move 30 degree in a hour, so it will move 0.5 degree in a minute(360/12=30/60=0.5)
  const minuteAngle = 6 * minute; // minute hand move 30 degree in a minute(360/60=6)

  const difference = Math.abs(hourAngle - minuteAngle);
  const smallestAngle = Math.min(difference, 360-difference)

  return smallestAngle;
}

// Example usage:
const hour = 6;     // Replace with the desired hour (0-12)
const minute = 30;  // Replace with the desired minute (0-59)

const smallestAngle = findSmallestClockAngle(hour, minute);
console.log(`The smallest angle between the hour and minute hands is ${smallestAngle} degrees.`);
