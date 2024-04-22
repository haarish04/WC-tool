import WC from ".";

async function main() {
  var operation: string = "";
  var filePath: string = "";

  if (process.argv.length == 4) {
    filePath = process.argv[3];
    operation = process.argv[2];
  } else if (process.argv.length == 3) {
    filePath = process.argv[2];
    operation = "All";
  } else {
    console.log("Invalid number of arguments");
    return;
  }

  console.log(operation);
  console.log(filePath);

  const res = await WC(operation, filePath);
  console.log(res);
}

main();
