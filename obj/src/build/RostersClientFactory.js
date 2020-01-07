"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const RostersNullClientV1_1 = require("../version1/RostersNullClientV1");
const RostersMemoryClientV1_1 = require("../version1/RostersMemoryClientV1");
const RostersDirectClientV1_1 = require("../version1/RostersDirectClientV1");
const RostersHttpClientV1_1 = require("../version1/RostersHttpClientV1");
const RostersLambdaClientV1_1 = require("../version1/RostersLambdaClientV1");
const RostersHttpProxyClientV1_1 = require("../version1/RostersHttpProxyClientV1");
class RostersClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(RostersClientFactory.NullClientV1Descriptor, RostersNullClientV1_1.RostersNullClientV1);
        this.registerAsType(RostersClientFactory.MemoryClientV1Descriptor, RostersMemoryClientV1_1.RostersMemoryClientV1);
        this.registerAsType(RostersClientFactory.DirectClientV1Descriptor, RostersDirectClientV1_1.RostersDirectClientV1);
        this.registerAsType(RostersClientFactory.HttpClientV1Descriptor, RostersHttpClientV1_1.RostersHttpClientV1);
        this.registerAsType(RostersClientFactory.LambdaClientV1Descriptor, RostersLambdaClientV1_1.RostersLambdaClientV1);
        this.registerAsType(RostersClientFactory.HttpProxyClientV1Descriptor, RostersHttpProxyClientV1_1.RostersHttpProxyClientV1);
    }
}
exports.RostersClientFactory = RostersClientFactory;
RostersClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-rosters', 'factory', 'default', 'default', '1.0');
RostersClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-rosters', 'client', 'null', 'default', '1.0');
RostersClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-rosters', 'client', 'memory', 'default', '1.0');
RostersClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-rosters', 'client', 'direct', 'default', '1.0');
RostersClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-rosters', 'client', 'http', 'default', '1.0');
RostersClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-rosters', 'client', 'lambda', 'default', '1.0');
RostersClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-rosters', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=RostersClientFactory.js.map