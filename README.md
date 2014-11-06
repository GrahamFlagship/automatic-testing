#Automatic Testing

#Programs to install
1. Install Node.js at http://nodejs.org/
2. To verify if installation succeeded, open your command line and type npm --version(the outpur should give you a version number)
3. Next install the Dalek Command Line tools by typing npm install dalek-cli -g.
4. Verify if installation worked by checking with dalek -v
5. Add a package.json file to the root directory with the text displayed below:

{
  "name": "myCssTardis",
  "description": "Flagship",
  "version": "0.0.2",
}

6. Install Dalek base framework with the command npm install dalekjs --save-dev 