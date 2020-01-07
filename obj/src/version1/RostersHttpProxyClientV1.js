"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const RostersHttpClientV1_1 = require("./RostersHttpClientV1");
class RostersHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(RostersHttpClientV1_1.RostersHttpClientV1, 'iqs-services-rosters', 30020);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getRosters(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getRosters(correlationId, orgId, filter, paging, callback);
        });
    }
    getRosterById(correlationId, orgId, rosterId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getRosterById(correlationId, orgId, rosterId, callback);
        });
    }
    createRoster(correlationId, orgId, roster, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.createRoster(correlationId, orgId, roster, callback);
        });
    }
    updateRoster(correlationId, orgId, roster, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.updateRoster(correlationId, orgId, roster, callback);
        });
    }
    deleteRosterById(correlationId, orgId, rosterId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.deleteRosterById(correlationId, orgId, rosterId, callback);
        });
    }
}
exports.RostersHttpProxyClientV1 = RostersHttpProxyClientV1;
//# sourceMappingURL=RostersHttpProxyClientV1.js.map