const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next()
  // otherwise pass control to the next middleware function in this stack
  else next('route')
}, (req, res, next) => {
  res.send('It is user 0')
});

router.get('/user/:id', (req, res, next) => {
    // if the user ID is 1, skip to the next router
    if (req.params.id === '1') next()
    // otherwise pass control to the next middleware function in this stack
    else next('route')
  }, (req, res, next) => {
    res.send('It is user 1')
  });

  router.get('/user/:id', (req, res, next) => {
    // if the user ID is 1, skip to the next router
    if (req.params.id === '2') next()
    // otherwise pass control to the next middleware function in this stack
    else next('route')
  }, (req, res, next) => {
    res.send('It is user 2')
  });

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id);
  res.send('User Id > 2');
});

router.use((req, res, next) => {
    res.status(404).send('Invalid URL');
})
router.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// mount the router on the app
app.use('/', router);

app.listen(3000, () => console.log('3000.....'));