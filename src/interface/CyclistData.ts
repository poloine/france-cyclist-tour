export interface CyclistData {
    id: number;
    name: string;
    nationality: string;
    ranking: number;
    age: number;
    bestTime: string;
    results: {
        date: string;
        departure: string;
        arrival: string;
        distanceKm: number;
        time: string;
    }[];
}