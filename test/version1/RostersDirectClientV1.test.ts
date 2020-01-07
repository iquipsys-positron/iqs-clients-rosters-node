let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { RostersMemoryPersistence } from 'iqs-services-rosters-node';
import { RostersController } from 'iqs-services-rosters-node';
import { IRostersClientV1 } from '../../src/version1/IRostersClientV1';
import { RostersDirectClientV1 } from '../../src/version1/RostersDirectClientV1';
import { RostersClientFixtureV1 } from './RostersClientFixtureV1';

suite('RostersDirectClientV1', ()=> {
    let client: RostersDirectClientV1;
    let fixture: RostersClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new RostersMemoryPersistence();
        let controller = new RostersController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-rosters', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-rosters', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new RostersDirectClientV1();
        client.setReferences(references);

        fixture = new RostersClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
