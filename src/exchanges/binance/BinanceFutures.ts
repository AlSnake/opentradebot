import { URI, Endpoint } from './Gateway.ts';

import logger from '../../core/logger.ts';

export class BinanceFutures {
	private uri: URI;

	constructor() {
		this.uri = URI.BINANCE_FUTURES_API;
	}

	async getContracts() {
		const data = await (
			await fetch(`${this.uri}/${Endpoint.EXCHANGE_INFO}`, {
				method: 'get',
			})
		).json();

		return data.symbols.map((c: any) => {
			return c.pair;
		});
	}
}
