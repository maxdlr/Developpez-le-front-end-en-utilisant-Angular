// TODO: create here a typescript interface for an olympic country
/*
example of an olympic country:
{
    id: 1,
    country: "Italy",
    participations: []
}
*/

import {Participation} from './Participation';

export class Olympic {
  public id!: number;
  public country!: string;
  public participations!: Participation[];

  public getOlympic() {
    return {
      id: this.id,
      country: this.country,
      participations: this.participations,
    };
  }
}
