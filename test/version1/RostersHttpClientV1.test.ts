let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { RostersMemoryPersistence } from 'iqs-services-rosters-node';
import { RostersController } from 'iqs-services-rosters-node';
import { RostersHttpServiceV1 } from 'iqs-services-rosters-node';
import { IRostersClientV1 } from '../../src/version1/IRostersClientV1';
import { RostersHttpClientV1 } from '../../src/version1/RostersHttpClientV1';
import { RostersClientFixtureV1 } from './RostersClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('RostersHttpClientV1', ()=> {
    let service: RostersHttpServiceV1;
    let client: RostersHttpClientV1;
    let fixture: RostersClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new RostersMemoryPersistence();
        let controller = new RostersController();

        service = new RostersHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-rosters', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-rosters', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-rosters', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new RostersHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new RostersClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
