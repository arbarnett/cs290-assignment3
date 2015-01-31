/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value that should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here
function uselessFunction() {
    return null;
}
//end your code

var bar = 'not a function';
var barType = typeof bar;

/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

//your code here
bar = function (doubleArray) {
    var i;

    for (i = 0; i < doubleArray.length; ++i) {
        if (typeof doubleArray[i] === "number") {
            doubleArray[i] *= 2;
        } else { 
            return false;
        }
    }
    return true;
};
//end your code

/**
* Creates a new GitLog
* @class
* @property {string} hash - the hash of the commit
* @property {Date} date - the date of the commit as a JS Date object
* @property {string} message - the commit message
*/
function GitLog(hash, date, message) {
    this.hash = hash;   //the hash of the commit
    this.date = date;   //the date of the commit as a JS Date object
    this.message = message; //the commit message
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here
function parseGit(logArray){
    var gitLogs = new Array();

    for(var i=0; i<logArray.length; i++){
        
        var splitArray = logArray[i].split(' ');
        var toSendHash = splitArray[0];
        var toSendDate = new Date(splitArray.slice(1,7).join(" "));     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        var toSendMessage = splitArray.slice(7).join(" ");
        toSendMessage = toSendMessage.substr(1, (toSendMessage.length - 2));
        
        gitLogs.push(new GitLog(toSendHash, toSendDate, toSendMessage));
    }

    return gitLogs;
}
//end your code
