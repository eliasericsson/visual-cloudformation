const { Command } = require('commander');
const program = new Command();

console.log('Visual CloudFormation');

program
  .version('0.0.1')
  .description('Convert a CloudFormation template to a diagram to better visualize the resources and their relationships')
  .option('-f, --file <file>', 'path to the CloudFormation template')
  .parse(process.argv);

const options = program.opts();

if (!options.file) {
  console.error('Please provide a path to the CloudFormation template using the -f flag');
  process.exit(1);
}
