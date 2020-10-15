import {schema} from 'normalizr';

export const logbookitem = new schema.Entity('logbookitems', {}, {idAttribute: '_id'});
export const logbookitems = new schema.Array(logbookitem);