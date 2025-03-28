export interface Tournament {
    id: number;
    name: string;
    participatingTeams: number;
    maxTeams: number;
    gameId: number;
    prizePool: number;
    startTime: string;
    endTime: string;
}
