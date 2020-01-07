let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';

import { RostersMemoryPersistence } from 'iqs-services-rosters-node';
import { RostersController } from 'iqs-services-rosters-node';
import { RostersHttpServiceV1 } from 'iqs-services-rosters-node';
import { IRostersClientV1 } from '../../src/version1/IRostersClientV1';
import { RostersHttpProxyClientV1 } from '../../src/version1/RostersHttpProxyClientV1';
import { RostersClientFixtureV1 } from './RostersClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'iqs-services-rosters': 3000 
    },
    active_tenants: ['1']
}

suite('RostersHttpProxyClientV1', ()=> {
    let service: RostersHttpServiceV1;
    let client: RostersHttpProxyClientV1;
    let fixture: RostersClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new RostersMemoryPersistence();
        let controller = new RostersController();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new RostersHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('iqs-services-rosters', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-rosters', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-rosters', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new RostersHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new RostersClientFixtureV1(client);

        service.open(null, (err) => {
            done(err);
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
