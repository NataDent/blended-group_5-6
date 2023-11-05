import yargs from 'yargs';
import { createFile } from './files.js';
const { argv } = yargs(process.argv.slice(2));

function invokeAction({ action, fileName, content }) {
  switch (action) {
    case 'create':
      createFile(fileName, content);
      break;

    case '':
      break;

    case '':
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
