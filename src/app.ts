import { ExchangeService } from './services/ExchangeService.ts';
import { Bitmex } from './exchanges/bitmex/Bitmex.ts';

const exchange = new ExchangeService();
const contracts = await exchange.getContracts(new Bitmex());

console.log(contracts);
