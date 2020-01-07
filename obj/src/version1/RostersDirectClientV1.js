"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RostersDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-rosters", "controller", "*", "*", "*"));
    }
    getRosters(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'rosters.get_rosters');
        this._controller.getRosters(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getRosterById(correlationId, orgId, rosterId, callback) {
        let timing = this.instrument(correlationId, 'rosters.get_roster_by_id');
        this._controller.getRosterById(correlationId, rosterId, (err, roster) => {
            timing.endTiming();
            callback(err, roster);
        });
    }
    createRoster(correlationId, orgId, roster, callback) {
        let timing = this.instrument(correlationId, 'rosters.create_roster');
        this._controller.createRoster(correlationId, roster, (err, roster) => {
            timing.endTiming();
            callback(err, roster);
        });
    }
    updateRoster(correlationId, orgId, roster, callback) {
        let timing = this.instrument(correlationId, 'rosters.update_roster');
        this._controller.updateRoster(correlationId, roster, (err, roster) => {
            timing.endTiming();
            callback(err, roster);
        });
    }
    deleteRosterById(correlationId, orgId, rosterId, callback) {
        let timing = this.instrument(correlationId, 'rosters.delete_roster_by_id');
        this._controller.deleteRosterById(correlationId, rosterId, (err, roster) => {
            timing.endTiming();
            callback(err, roster);
        });
    }
}
exports.RostersDirectClientV1 = RostersDirectClientV1;
//# sourceMappingURL=RostersDirectClientV1.js.map