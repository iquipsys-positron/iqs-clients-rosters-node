"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RostersHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/rosters');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getRosters(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_rosters', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getRosterById(correlationId, orgId, rosterId, callback) {
        this.callCommand('get_roster_by_id', correlationId, {
            roster_id: rosterId
        }, callback);
    }
    createRoster(correlationId, orgId, roster, callback) {
        this.callCommand('create_roster', correlationId, {
            roster: roster
        }, callback);
    }
    updateRoster(correlationId, orgId, roster, callback) {
        this.callCommand('update_roster', correlationId, {
            roster: roster
        }, callback);
    }
    deleteRosterById(correlationId, orgId, rosterId, callback) {
        this.callCommand('delete_roster_by_id', correlationId, {
            roster_id: rosterId
        }, callback);
    }
}
exports.RostersHttpClientV1 = RostersHttpClientV1;
//# sourceMappingURL=RostersHttpClientV1.js.map