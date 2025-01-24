class Appcontroller
{
    static getHomepage(request, response) 
    {
        // Is this correct?
        response.status(200);
        response.send('Hello Holberton School!');
    }
}

module.exports = Appcontroller