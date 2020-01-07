let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { RosterV1 } from '../../src/version1/RosterV1';
import { RosterObjectV1 } from '../../src/version1/RosterObjectV1';
import { IRostersClientV1 } from '../../src/version1/IRostersClientV1';

let now = new Date();
let ROSTER1: RosterV1 = {
    id: '1',
    org_id: '1',
    name: 'Test roster 1',
    start_time: new Date(now.getTime()),
    end_time: new Date(now.getTime() + 8 * 3600000)
};
let ROSTER2: RosterV1 = {
    id: '2',
    org_id: '1',
    name: 'Test roster 2',
    start_time: new Date(now.getTime()),
    end_time: new Date(now.getTime() + 8 * 3600000)
};

export class RostersClientFixtureV1 {
    private _client: IRostersClientV1;
    
    constructor(client: IRostersClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let roster1, roster2: RosterV1;

        async.series([
        // Create one roster
            (callback) => {
                this._client.createRoster(
                    null,
                    '1',
                    ROSTER1,
                    (err, roster) => {
                        assert.isNull(err);

                        assert.isObject(roster);
                        assert.equal(roster.org_id, ROSTER1.org_id);
                        assert.equal(roster.name, ROSTER1.name);

                        roster1 = roster;

                        callback();
                    }
                );
            },
        // Create another roster
            (callback) => {
                this._client.createRoster(
                    null,
                    '1',
                    ROSTER2,
                    (err, roster) => {
                        assert.isNull(err);

                        assert.isObject(roster);
                        assert.equal(roster.org_id, ROSTER2.org_id);
                        assert.equal(roster.name, ROSTER2.name);

                        roster2 = roster;

                        callback();
                    }
                );
            },
        // Get all rosters
            (callback) => {
                this._client.getRosters(
                    null,
                    '1',
                    null,
                    new PagingParams(0,5,false),
                    (err, rosters) => {
                        assert.isNull(err);

                        assert.isObject(rosters);
                        assert.isTrue(rosters.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the roster
            (callback) => {
                roster1.name = 'Updated roster 1';

                this._client.updateRoster(
                    null,
                    '1',
                    roster1,
                    (err, roster) => {
                        assert.isNull(err);

                        assert.isObject(roster);
                        assert.equal(roster.name, 'Updated roster 1');
                        assert.equal(roster.id, ROSTER1.id);

                        roster1 = roster;

                        callback();
                    }
                );
            },
        // Delete roster
            (callback) => {
                this._client.deleteRosterById(
                    null,
                    '1',
                    roster1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete roster
            (callback) => {
                this._client.getRosterById(
                    null,
                    '1',
                    roster1.id,
                    (err, roster) => {
                        assert.isNull(err);
                        
                        assert.isNull(roster || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
