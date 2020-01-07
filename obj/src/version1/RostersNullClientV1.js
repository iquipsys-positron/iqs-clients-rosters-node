"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class RostersNullClientV1 {
    getRosters(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getRosterById(correlationId, orgId, rosterId, callback) {
        callback(null, null);
    }
    createRoster(correlationId, orgId, roster, callback) {
        callback(null, roster);
    }
    updateRoster(correlationId, orgId, roster, callback) {
        callback(null, roster);
    }
    deleteRosterById(correlationId, orgId, rosterId, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.RostersNullClientV1 = RostersNullClientV1;
//# sourceMappingURL=RostersNullClientV1.js.map