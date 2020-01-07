import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { RostersNullClientV1 } from '../version1/RostersNullClientV1';
import { RostersMemoryClientV1 } from '../version1/RostersMemoryClientV1';
import { RostersDirectClientV1 } from '../version1/RostersDirectClientV1';
import { RostersHttpClientV1 } from '../version1/RostersHttpClientV1';
import { RostersLambdaClientV1 } from '../version1/RostersLambdaClientV1';
import { RostersHttpProxyClientV1 } from '../version1/RostersHttpProxyClientV1';

export class RostersClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-rosters', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-rosters', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-rosters', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-rosters', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-rosters', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-rosters', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-rosters', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(RostersClientFactory.NullClientV1Descriptor, RostersNullClientV1);
		this.registerAsType(RostersClientFactory.MemoryClientV1Descriptor, RostersMemoryClientV1);
		this.registerAsType(RostersClientFactory.DirectClientV1Descriptor, RostersDirectClientV1);
		this.registerAsType(RostersClientFactory.HttpClientV1Descriptor, RostersHttpClientV1);
		this.registerAsType(RostersClientFactory.LambdaClientV1Descriptor, RostersLambdaClientV1);
		this.registerAsType(RostersClientFactory.HttpProxyClientV1Descriptor, RostersHttpProxyClientV1);
	}
	
}
