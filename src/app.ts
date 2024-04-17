import WC from ".";

function main() {
  var filePath = process.argv[3];
  var operation = process.argv[2];
  //console.log(filePath);
  //console.log(operation);

  const res = WC(operation, filePath);
}

main();
