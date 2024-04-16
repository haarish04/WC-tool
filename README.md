# Challenge 1 - Build Your Own wc Tool

This application is my solution to the first part of the Coding Challenges series by John Crickett. The page to the challenge can be found [here](https://codingchallenges.fyi/challenges/challenge-wc).

## Description

Wc (short for word count) is a command in Unix that calculates a file's word, line, character, and/or byte count. The goal was to write wc. wc is contained in `src/app.ts`, and the command line version is contained in `src/index.ts`.

## Usage

The wc tool supports the following options:

- `-c` ouputs the number of bytes in a file
- `-l` ouputs the number of lines in a file
- `-w` ouputs the number of words in a file
- `-m` ouputs the number of characters in a file

When no options are provided, all the functions are executed and all the statistics are prsented
