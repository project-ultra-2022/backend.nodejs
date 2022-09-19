import PlayerInput from "../inputObjects/PlayerInput";
import PlayerOutput from "../outputObjects/PlayerOutput";

export default class PlayerBusiness {
  private readonly data: PlayerInput;

  constructor(data: PlayerInput) {
    this.data = data;
  }

  public async create(): Promise<PlayerOutput> {
    const players: Array<PlayerOutput> = [
      { name: "Neymar", goals: 35, team: "PSG" },
      { name: "Cristiano", goals: 30, team: "Manchester" },
      { name: "Messi", goals: 35, team: "PSG" },
    ];

    let res: any = players.find(
      (player) => player.name === this.data.playerName
    );
    if (!res) res = { name: "", goals: 0, team: "" };
    return res;
  }
}
