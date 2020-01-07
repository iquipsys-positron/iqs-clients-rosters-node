import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IRostersClientV1 } from './IRostersClientV1';
//import { IRostersController } from 'iqs-services-rosters-node';
import { RosterV1 } from './RosterV1';

export class RostersDirectClientV1 extends DirectClient<any> implements IRostersClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-rosters", "controller", "*", "*", "*"))
    }

    public getRosters(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<RosterV1>) => void): void {
        let timing = this.instrument(correlationId, 'rosters.get_rosters');
        this._controller.getRosters(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getRosterById(correlationId: string, orgId: string, rosterId: string, 
        callback: (err: any, roster: RosterV1) => void): void {
        let timing = this.instrument(correlationId, 'rosters.get_roster_by_id');
        this._controller.getRosterById(correlationId, rosterId, (err, roster) => {
            timing.endTiming();
            callback(err, roster);
        });
    }

    public createRoster(correlationId: string, orgId: string, roster: RosterV1, 
        callback: (err: any, roster: RosterV1) => void): void {
        let timing = this.instrument(correlationId, 'rosters.create_roster');
        this._controller.createRoster(correlationId, roster, (err, roster) => {
            timing.endTiming();
            callback(err, roster);
        });
    }

    public updateRoster(correlationId: string, orgId: string, roster: RosterV1, 
        callback: (err: any, roster: RosterV1) => void): void {
        let timing = this.instrument(correlationId, 'rosters.update_roster');
        this._controller.updateRoster(correlationId, roster, (err, roster) => {
            timing.endTiming();
            callback(err, roster);
        });
    }

    public deleteRosterById(correlationId: string, orgId: string, rosterId: string,
        callback: (err: any, roster: RosterV1) => void): void {
        let timing = this.instrument(correlationId, 'rosters.delete_roster_by_id');
        this._controller.deleteRosterById(correlationId, rosterId, (err, roster) => {
            timing.endTiming();
            callback(err, roster);
        });
    }
}