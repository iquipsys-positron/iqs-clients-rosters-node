import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { RosterV1 } from './RosterV1';
import { IRostersClientV1 } from './IRostersClientV1';

export class RostersHttpClientV1 extends CommandableHttpClient implements IRostersClientV1 {       
    
    constructor(config?: any) {
        super('v1/rosters');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getRosters(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<RosterV1>) => void): void {
        this.callCommand( 
            'get_rosters', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getRosterById(correlationId: string, orgId: string, rosterId: string,
        callback: (err: any, roster: RosterV1) => void): void {
        this.callCommand( 
            'get_roster_by_id',
            correlationId,
            {
                roster_id: rosterId
            }, 
            callback
        );        
    }

    public createRoster(correlationId: string, orgId: string, roster: RosterV1,
        callback: (err: any, roster: RosterV1) => void): void {
        this.callCommand(
            'create_roster',
            correlationId,
            {
                roster: roster
            }, 
            callback
        );
    }

    public updateRoster(correlationId: string, orgId: string, roster: RosterV1,
        callback: (err: any, roster: RosterV1) => void): void {
        this.callCommand(
            'update_roster', 
            correlationId,
            {
                roster: roster
            }, 
            callback
        );
    }

    public deleteRosterById(correlationId: string, orgId: string, rosterId: string,
        callback: (err: any, roster: RosterV1) => void): void {
        this.callCommand(
            'delete_roster_by_id', 
            correlationId,
            {
                roster_id: rosterId
            }, 
            callback
        );
    }
    
}
