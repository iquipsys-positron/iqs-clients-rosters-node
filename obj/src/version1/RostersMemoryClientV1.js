"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
class RostersMemoryClientV1 {
    constructor() {
        this._rosters = [];
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_node_1.FilterParams();
        let id = filter.getAsNullableString('id');
        let orgId = filter.getAsNullableString('org_id');
        let type = filter.getAsNullableString('type');
        let fromTime = filter.getAsNullableDateTime('from_time');
        let toTime = filter.getAsNullableDateTime('to_time');
        return (item) => {
            if (id && item.id != id)
                return false;
            if (orgId && item.org_id != orgId)
                return false;
            if (type && item.type != type)
                return false;
            if (fromTime && item.start_date < fromTime)
                return false;
            if (toTime && item.start_date >= toTime)
                return false;
            return true;
        };
    }
    getRosters(correlationId, orgId, filter, paging, callback) {
        let rosters = _.filter(this._rosters, this.composeFilter(filter));
        callback(null, new pip_services3_commons_node_2.DataPage(rosters, rosters.length));
    }
    getRosterById(correlationId, orgId, rosterId, callback) {
        let roster = _.find(this._rosters, r => r.id == rosterId);
        callback(null, roster);
    }
    createRoster(correlationId, orgId, roster, callback) {
        roster.id = roster.id || pip_services3_commons_node_3.IdGenerator.nextLong();
        this._rosters.push(roster);
        callback(null, roster);
    }
    updateRoster(correlationId, orgId, roster, callback) {
        this._rosters = _.filter(this._rosters, r => r.id != roster.id);
        this._rosters.push(roster);
        callback(null, roster);
    }
    deleteRosterById(correlationId, orgId, rosterId, callback) {
        let roster = _.find(this._rosters, r => r.id == rosterId);
        this._rosters = _.filter(this._rosters, r => r.id != rosterId);
        if (callback)
            callback(null, roster);
    }
}
exports.RostersMemoryClientV1 = RostersMemoryClientV1;
//# sourceMappingURL=RostersMemoryClientV1.js.map