import { Participation } from './Participation';

/*
example of an olympic country:
{
    id: 1,
    country: "Italy",
    participations: []
}
*/
/**
 * Interface used to represent an Olympic Country from the API
 */
export interface Olympic {
  id: number;
  country: string;
  participations: Participation[];
}
