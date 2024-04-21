import WC from ".";

async function main() {
  var filePath = process.argv[3];
  var operation = process.argv[2];

  const res = await WC(operation, filePath);
  console.log(res);
}

main();
