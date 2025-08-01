const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');


const app = express();
const PORT = 8000;

// Middleware --> Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
   fs.appendFile('log.text', `${Date.now()}:${req.ip}: ${req.method}: ${req.path}\n`, (err, data) => {
      next()
   })
   // console.log('Hello From Middleware 1');
   // req.myUserName = 'Shazaib'
   //return res.json({msg: 'Hello From Middleware 1'})

})

// app.use((req, res, next) => {
//    console.log('Hello From Middleware 2', req.myUserName);
//    //return res.json({msg: 'Hello From Middleware 1'})
//    //return res.end('Hey')
//    // db query
//    // credit card info
//    //req.creditCardNumber = '1239'
//    next()
// })

app.get('/users', (req, res) => {
   const html = `
   <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join('')}
   </ul>
   `;
   return res.send(html);
})

// REST API
app.get('/api/users', (req, res) => {
   // console.log('I am in get route', req.myUserName)
   return res.json(users);
});

// app.get('/api/users/:id', (req, res) => {
//    const id = req.params.id;
//    const user = users.find(user => user.id === parseInt(id));
//    return res.json(user);
// });



// app.patch('/api/users:id', (req, res) => {
// //  TODO: Edit the users with id
//    return res.json({status: 'Pending...'});
// });

// app.delete('/api/users:id', (req, res) => {
// //  TODO: Delete the users with id
//    return res.json({status: 'Pending...'});
// });

app.route('/api/users/:id')
   .get((req, res) => {
      const id = Number(req.params.id);
      const user = users.find(user => user.id === id);
      return res.json(user);
   })
   // .post((req, res) => {
   //    //  TODO: Create new user
   //    return res.json({status: 'Pending...'});
   // })
   .patch((req, res) => {
      //  TODO: Edit the users with id
      return res.json({ status: 'Pending...' });
   })
   .delete((req, res) => {
      //  TODO: Delete the users with id
      return res.json({ status: 'Pending...' });
   });


app.post('/api/users', (req, res) => {
   //  TODO: Create new user
   const body = req.body;
   users.push({ ...body, id: users.length + 1 });
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.json({ status: 'success...', id: users.length })
   })

});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
