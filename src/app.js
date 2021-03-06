const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
	res.render('index', {
		author: 'Christopher Lampert',
		title: 'About Me',
		job: 'Test Manager'
	});
});

app.get('/education', (req, res) => {
	res.render('education', {
		title: 'Education',
		author: 'Christopher Lampert',
		job: 'Test Manager'
	});
});

app.get('/work', (req, res) => {
	res.render('work-experience', {
		title: 'Work Experience',
		author: 'Christopher Lampert',
		job: 'Test Manager'
	})
});


app.get('*', (req, res) => {
	res.render('404', {
		title: '404 - Page not found',
		error: 'Oops the page you are looking for cannot be found',
		author: 'Christopher Lampert',
		job: 'Test Manager'
	});
});


app.listen(port, () => {
	console.log('Server is up on port ' + port);
});