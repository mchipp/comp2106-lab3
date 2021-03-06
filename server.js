// reference required packages
var connect = require('connect');
var url = require('url');

// instantiate a new connect object
var app = connect();

var fallback = function(req, res, next) {
  res.end('All other requests');
};

// get the method and x and y values from the query string
var calculate = function(req, res, next) {
  var qs = url.parse(req.url, true).query;
  var method = qs.method;
  var num1 = qs.x;
  var num2 = qs.y;

  // check the method perform calculations, then display results
  if(method == 'add')
    res.end(num1 + ' + ' + num2 + ' = ' + (parseInt(num1)+parseInt(num2)));
  else if(method == 'subtract')
    res.end(num1 + ' - ' + num2 + ' = ' + (parseInt(num1)-parseInt(num2)));
  else if(method == 'multiply')
    res.end(num1 + ' * ' + num2 + ' = ' + (parseInt(num1)*parseInt(num2)));
  else if(method == 'divide')
    res.end(num1 + ' / ' + num2 + ' = ' + (parseInt(num1)/parseInt(num2)));
  else
    res.end('Error: Please use a valid math operator.');
};

app.use('/lab3', calculate); // for the URL lab3
app.use(fallback);           // for all other URL's

// start the server on port 3000
app.listen(3000);

// display a message that the server is running
console.log('Server running at port 3000');
