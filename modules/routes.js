//Importing modules
const fs = require('fs');
const pages = require('../public/pages');

module.exports = ( req, res ) => { 
    switch( req.url ) {
        case '/':
            fs.readFile( 'public/index.html', (error, data) => {

                if ( error ) {
                    res.writeHead('404');
                    res.write('404');
                    res.end();
            
                } else {
                    res.write(data);
                    res.end();
                }
            } );

        

            break;
        
        case '/about':
            fs.readFile( 'public/about.html', (error, data) => {

                if ( error ) {
                    res.writeHead('404');
                    res.write('404');
                    res.end();
            
                } else {
                    res.write(data);
                    res.end();
                }
            } );

            break;
        
        default : 
        fs.readFile( 'public/404.html', (error, data) => {

            if ( error ) {
                res.writeHead('404');
                res.write('404');
                res.end();
        
            } else {
                res.write(data);
                res.end();
            }
        } );

            break;
    }
}
