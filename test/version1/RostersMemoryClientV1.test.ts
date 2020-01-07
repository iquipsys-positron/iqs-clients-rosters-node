let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { IRostersClientV1 } from '../../src/version1/IRostersClientV1';
import { RostersMemoryClientV1 } from '../../src/version1/RostersMemoryClientV1';
import { RostersClientFixtureV1 } from './RostersClientFixtureV1';

suite('RostersMemoryClientV1', ()=> {
    let client: RostersMemoryClientV1;
    let fixture: RostersClientFixtureV1;

    setup(() => {
        client = new RostersMemoryClientV1();
        fixture = new RostersClientFixtureV1(client);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
