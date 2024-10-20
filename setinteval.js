const interValId = setInterval(() => {
  console.log("Thiss code will run every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interValId);
  console.log("This interval is cleared");
}, 10000);
