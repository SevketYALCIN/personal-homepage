import express from 'express';
import serverRenderer from './middleware/renderer';

const PORT = 5000;
const path = require('path');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// initialize the application and create the routes
const app = express();
const router = express.Router();

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);
router.use('^/fr/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// add contact form mailing route
app.post('/contact', function (req, res) {
        const msg = {
          to: 'sevket.yalcin@outlook.com',
          from: 'contact@sevketyalcin.com',
          subject: 'Test',
          text: 'Test',
        };

        sgMail.send(msg).then((t) => {
            res.json({"status": t});
        });
})

// tell the app to use the above rules
app.use(router);

// redirect unmatched requests to EN version
app.use(function (req, res) {
    res.redirect("/");
});

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});
