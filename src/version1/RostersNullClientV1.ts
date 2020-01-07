import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IRostersClientV1 } from './IRostersClientV1';
import { RosterV1 } from './RosterV1';

export class RostersNullClientV1 implements IRostersClientV1 {
            
    public getRosters(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<RosterV1>) => void): void {
        callback(null, new DataPage<RosterV1>([], 0));
    }

    public getRosterById(correlationId: string, orgId: string, rosterId: string, 
        callback: (err: any, roster: RosterV1) => void): void {
        callback(null, null);
    }

    public createRoster(correlationId: string, orgId: string, roster: RosterV1, 
        callback: (err: any, roster: RosterV1) => void): void {
        callback(null, roster);
    }

    public updateRoster(correlationId: string, orgId: string, roster: RosterV1, 
        callback: (err: any, roster: RosterV1) => void): void {
        callback(null, roster);
    }

    public deleteRosterById(correlationId: string, orgId: string, rosterId: string,
        callback: (err: any, roster: RosterV1) => void): void {
        if (callback) callback(null, null);
    }
}