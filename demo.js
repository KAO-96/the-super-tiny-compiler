const {
    tokenizer,
    parser,
    transformer,
    codeGenerator,
    compiler,
} = require('./the-super-tiny-compiler');

const parser = require("@babel/parser");
const generate = require("@babel/generator");
const traverse = require('@babel/traverse');

console.log(
    parser.parse('const a = 1;')
);