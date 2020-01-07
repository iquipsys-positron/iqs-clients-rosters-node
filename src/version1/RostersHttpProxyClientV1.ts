import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { RosterV1 } from './RosterV1';
import { IRostersClientV1 } from './IRostersClientV1';
import { RostersHttpClientV1 } from './RostersHttpClientV1';

export class RostersHttpProxyClientV1 extends ClustersProxyHttpClientV1<IRostersClientV1>
    implements IRostersClientV1 {       
    
    constructor(config?: any) {
        super(RostersHttpClientV1, 'iqs-services-rosters', 30020);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getRosters(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<RosterV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getRosters(correlationId, orgId, filter, paging, callback);
        });
    }

    public getRosterById(correlationId: string, orgId: string, rosterId: string,
        callback: (err: any, roster: RosterV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getRosterById(correlationId, orgId, rosterId, callback);
        });
    }

    public createRoster(correlationId: string, orgId: string, roster: RosterV1,
        callback: (err: any, roster: RosterV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.createRoster(correlationId, orgId, roster, callback);
        });
    }

    public updateRoster(correlationId: string, orgId: string, roster: RosterV1,
        callback: (err: any, roster: RosterV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.updateRoster(correlationId, orgId, roster, callback);
        });
    }

    public deleteRosterById(correlationId: string, orgId: string, rosterId: string,
        callback: (err: any, roster: RosterV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.deleteRosterById(correlationId, orgId, rosterId, callback);
        });
    }
    
}
