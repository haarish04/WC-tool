import * as fs from "fs";
import { Readable } from "stream";
import { Buffer } from "buffer";

function displayFile(file: Readable): void {
  file.on("data", (chunk) => {
    console.log(chunk);
  });
}

async function wordCount(file: Readable): Promise<number> {
  return new Promise((resolve, reject) => {
    var wordcount = 0;
    file.on("data", (chunk) => {
      const words = chunk.toString().match(/[a-zA-Z0-9]+/g);
      wordcount += words.length;
    });
    file.on("end", () => {
      resolve(wordcount);
    });
    file.on("error", (err) => {
      reject(err);
    });
  });
}

async function lineCount(file: Readable): Promise<number> {
  return new Promise((resolve, reject) => {
    let linecount = 0;
    file.on("data", (chunk) => {
      var Line = chunk.toString().split(/\r\n|\r|\n/);
      linecount += Line.length;
    });
    file.on("end", () => {
      resolve(linecount);
    });
    file.on("error", (err) => {
      reject(err);
    });
  });
}

async function byteCount(file: Readable): Promise<number> {
  return new Promise((resolve, reject) => {
    var bytecount = 0;
    file.on("data", (chunk) => {
      bytecount += Buffer.byteLength(chunk);
    });
    file.on("end", () => {
      resolve(bytecount);
    });
    file.on("error", (err) => {
      reject(err);
    });
  });
}

async function characterCount(file: Readable): Promise<number> {
  return new Promise((resolve, reject) => {
    let charcount = 0;
    file.on("data", (chunk) => {
      charcount += chunk.toString().length;
    });
    file.on("end", () => {
      resolve(charcount);
    });
    file.on("error", (err) => {
      reject(err);
    });
  });
}

export default async function WC(
  operation: string,
  filePath: string
): Promise<String> {
  const file = fs.createReadStream(filePath, "utf8");
  file.on("error", (err) => {
    console.error("An error occurred:", err.message);
  });

  var res: string = "";

  switch (operation) {
    case "-c":
      var bytecount = await byteCount(file);
      res = `Byte count in file ${filePath} : ${bytecount}`;
      return res;

    case "-l":
      var linecount = await lineCount(file);
      res = `Line count in file ${filePath} : ${linecount}`;
      return res;

    case "-w":
      var wordcount = await wordCount(file);
      res = `Word count in file ${filePath} : ${wordcount}`;
      return res;

    case "-m":
      var charcount = await characterCount(file);
      res = `Character count in file ${filePath} : ${charcount}`;
      return res;

    case "all":
      var bytecount = await byteCount(file);
      var linecount = await lineCount(file);
      var wordcount = await wordCount(file);
      var charcount = await characterCount(file);

      res = `Byte count in file ${filePath} : ${bytecount}\nLine count in file ${filePath} : ${linecount}\nWord count in file ${filePath} : ${wordcount}\nCharacter count in file ${filePath} : ${charcount}`;
      return res;

    default:
      return "";
  }
}
