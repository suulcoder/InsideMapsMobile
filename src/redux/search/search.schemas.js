import {schema} from 'normalizr';

export const place = new schema.Entity('places', {}, {idAttribute: '_id'});
export const places = new schema.Array(place);
