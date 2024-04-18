import * as fs from "fs";
import { Readable } from "stream";

function displayFile(file: Readable): void {
  file.on("data", (chunk) => {
    console.log(chunk);
  });
}

function wordCount(file: Readable): number {
  var wordcount = 0;
  file.on("data", (chunk) => {
    const words = chunk.toString().match(/[a-zA-Z0-9]+/g);
    wordcount += words.length;
  });
  return wordcount;
}

function lineCount(file: Readable): number {
  var linecount = 0;
  return linecount;
}

function byteCount(file: Readable): number {
  var bytecount = 0;
  file.on("data", (chunk) => {
    bytecount += Buffer.byteLength(chunk);
  });
  return bytecount;
}

function characterCount(file: Readable): number {
  var charcount = 0;
  file.on("data", (chunk) => {
    charcount += chunk.toString().length;
  });
  return charcount;
}

export default function WC(operation: string, filePath: string): string {
  const file = fs.createReadStream(filePath, "utf8");
  return "";
}
