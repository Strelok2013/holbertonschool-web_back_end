const fs = require('fs');

function countStudents(filepath)
{
    try 
    {
        const csv = fs.readFileSync(filepath, { encoding: 'utf8' });
        // Split the string read in via a regex that 
        // splits on carriage return + newline or newlines
        // and create an array from that
        const headerArray = csv.split(/\r?\n|\n/);
        // Create a list of headers (firstname, lastname, age, field)
        const headers = headerArray[0].split(',');
  
        
        const dictList = [];
        // Separate the headers and create a list
        const noHeaderArray = headerArray.slice(1);
        // Iterate and check each row
        // if the row is valid, then create a dict and add it the list
        for (let i = 0; i < noHeaderArray.length; i += 1) {
            const data = noHeaderArray[i].split(',');
            if (data.length === headers.length) {
                const row = {};
                for (let j = 0; j < headers.length; j += 1) {
                    row[headers[j].trim()] = data[j].trim();
                }
                dictList.push(row);
            }
        }
  
        let countCS = 0;
        let countSWE = 0;
        const studentsCS = [];
        const studentsSWE = [];
  
        // Count each element in the dictionary list and 
        // populate the lists according to the fields
        dictList.forEach((element) => {
            if (element.field === 'CS') {
                countCS += 1;
                studentsCS.push(element.firstname);
            } else if (element.field === 'SWE') {
                countSWE += 1;
                studentsSWE.push(element.firstname);
            }
        });
        // Calculate total number of students
        const countStudents = countCS + countSWE;
  
        //log results to stdout
        console.log(`Number of students: ${countStudents}`);
        console.log(`Number of students in CS: ${countCS}. List: ${studentsCS.toString().split(',').join(', ')}`);
        console.log(`Number of students in SWE: ${countSWE}. List: ${studentsSWE.toString().split(',').join(', ')}`);
    }
    catch (err)
    {
        //If any error occurs, then throw an error
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents