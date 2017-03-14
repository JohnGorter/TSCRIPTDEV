import { Customer } from './Customer';
import { Bank } from './Bank';
import * as express from 'express';
import * as bodyParser from 'body-parser';

export class BankServer {

    private app: express.Express;

    constructor(private bank: Bank) {
        this.app = express();
    }

    listen() {
        const router = this.createRouter();
        this.app.use(bodyParser.json());
        this.app.use('/api', router);
        this.app.use(express.static('public'));
        this.app.listen(this.bank.config.port);
        console.log(`Bank ${this.bank.config.name} listening on port ${this.bank.config.port}`);
    }

    private createRouter() {
        const router = express.Router({ caseSensitive: false });
        router.get('/bank', (_, response) => response.json(this.bank.config));
        router.route('/accounts')
            .get((_, response) => response.json(this.bank.accounts))
            .post((request, response) => {
                if (this.customerIsValid(request.body)) {
                    response.json(this.bank.createAccount(new Customer(request.body)));
                } else {
                    response.status(522);
                    response.end('Customer entity invalid');
                }
            });
        return router;
    }

    private customerIsValid(customer: any): customer is Customer {
        return customer
            && customer.firstName && typeof customer.firstName === 'string'
            && customer.lastName && typeof customer.lastName === 'string' &&
            (!customer.preposition || typeof customer.preposition === 'string');
    }
}
