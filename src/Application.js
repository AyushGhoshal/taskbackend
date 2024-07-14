const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');
const PORT = process.env.PORT || 8080

class Application {
    constructor(){
        this.app = express();
    }

    #init(){
        this.app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}`);
        });
    }
    #useMiddleware(){
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use('/api', apiRoutes);
    }

    async main(){
        this.#init();
        this.#useMiddleware();
    }
}
module.exports = Application;