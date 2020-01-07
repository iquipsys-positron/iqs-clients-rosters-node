import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { RosterV1 } from './RosterV1';
import { IRostersClientV1 } from './IRostersClientV1';
export declare class RostersHttpClientV1 extends CommandableHttpClient implements IRostersClientV1 {
    constructor(config?: any);
    getRosters(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<RosterV1>) => void): void;
    getRosterById(correlationId: string, orgId: string, rosterId: string, callback: (err: any, roster: RosterV1) => void): void;
    createRoster(correlationId: string, orgId: string, roster: RosterV1, callback: (err: any, roster: RosterV1) => void): void;
    updateRoster(correlationId: string, orgId: string, roster: RosterV1, callback: (err: any, roster: RosterV1) => void): void;
    deleteRosterById(correlationId: string, orgId: string, rosterId: string, callback: (err: any, roster: RosterV1) => void): void;
}
