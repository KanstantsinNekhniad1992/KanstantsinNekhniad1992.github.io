'use strict';
let express = require('express'),
    config,
    app = express();

config = require('./server/config/config');

require('./server/config/express.js')(app, config);

require('./server/config/mongoose.js')(config);

require('./server/config/routes.js')(app);

require('./server/config/passport')();

app.listen(config.port);
console.log('Server running on port ' + config.port);
