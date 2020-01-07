let _ = require('lodash');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdGenerator } from 'pip-services3-commons-node';

import { IRostersClientV1 } from './IRostersClientV1';
import { RosterV1 } from './RosterV1';

export class RostersMemoryClientV1 implements IRostersClientV1 {
    private _rosters: RosterV1[] = [];

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
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

    public getRosters(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<RosterV1>) => void): void {
        let rosters = _.filter(this._rosters, this.composeFilter(filter));
        callback(null, new DataPage<RosterV1>(rosters, rosters.length));
    }

    public getRosterById(correlationId: string, orgId: string, rosterId: string, 
        callback: (err: any, roster: RosterV1) => void): void {
        let roster = _.find(this._rosters, r => r.id == rosterId);
        callback(null, roster);
    }

    public createRoster(correlationId: string, orgId: string, roster: RosterV1, 
        callback: (err: any, roster: RosterV1) => void): void {

        roster.id = roster.id || IdGenerator.nextLong();
        this._rosters.push(roster);

        callback(null, roster);
    }

    public updateRoster(correlationId: string, orgId: string, roster: RosterV1, 
        callback: (err: any, roster: RosterV1) => void): void {

        this._rosters = _.filter(this._rosters, r => r.id != roster.id);
        this._rosters.push(roster);

        callback(null, roster);
    }

    public deleteRosterById(correlationId: string, orgId: string, rosterId: string,
        callback: (err: any, roster: RosterV1) => void): void {

        let roster = _.find(this._rosters, r => r.id == rosterId);
        this._rosters = _.filter(this._rosters, r => r.id != rosterId);

        if (callback) callback(null, roster);
    }
}