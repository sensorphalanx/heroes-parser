#!/usr/bin/env node

import *  as program from 'commander'

program
  .version("1.0.0")
  .command("parse <source-dir>", "Convert XML elements to JSON", { isDefault: true })

program
  .command("extract <source-dir> <file-name>", "Extract asset file from game storage")

program.parse(process.argv)