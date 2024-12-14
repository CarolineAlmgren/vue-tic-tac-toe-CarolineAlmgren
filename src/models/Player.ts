export class Player {
    id: number;
    team: string;
    constructor(public name: string, team: string) {
    this.id = Date.now();
    this.team = team;
    }
  }