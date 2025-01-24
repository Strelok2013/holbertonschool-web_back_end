const fs = require('fs');

function readDatabase(filepath)
{
            return new Promise((resolve, reject) => { 
                fs.readFile(
                filepath,
                {encoding: 'utf8', flag: 'r'},
                (err, data) =>
                {
                 if (err) 
                    {
                        // On error, return the error and do a reject
                        reject(Error('Cannot load the database'));
                           return;
                        
                    }   
                    const all = {};
                    all['CS'] = [];
                    all['SWE'] = [];
                    const lines = data.split('\n').slice(1, -1);
                    lines.forEach((line) => 
                    {
                        const list = line.split(',');
                        if (list[3] === "CS")
                        {
                            all['CS'].push(list[0])
                        }
                        if(list[3] === "SWE")
                        {
                            all['SWE'].push(list[0])
                        }
                    })
                    resolve(all);
                }
            )})
}

module.exports = readDatabase;