import HttpClient from '../http/HttpClient';

export default class UnitService {
    static memorySizeList = () => HttpClient.get('unit/memory/size/list');
}
