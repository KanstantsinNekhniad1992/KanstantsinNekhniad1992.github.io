/*jshint esversion: 6 */
'use strict';

class Logger {

    constructor() {}

    log(message, type) {

        if (NODE_ENV === 'production') {
            return;
        }

        switch (type) {
            case 'log':
                console.log(message);
                break;
            case 'warn':
                console.warn(message);
                break;
            case 'error':
                console.error(message);
                break;
            case 'dir':
                console.dir(message);
                break;
            default:
                console.log(message);
        }

    }

}

export default new Logger();
