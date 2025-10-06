import type {StepData} from "../interface/StepData.ts";

export const trips: StepData[] = [
    { date: "2025-03-12", departure: "Paris", arrival: "Lyon", distanceKm: 465 },
    { date: "2024-11-05", departure: "Marseille", arrival: "Nice", distanceKm: 200 },
    { date: "2026-01-22", departure: "Bordeaux", arrival: "Toulouse", distanceKm: 245 },
    { date: "2023-07-18", departure: "Lille", arrival: "Strasbourg", distanceKm: 520 },
    { date: "2024-08-30", departure: "Nantes", arrival: "Rennes", distanceKm: 110 },
    { date: "2025-04-03", departure: "Montpellier", arrival: "Perpignan", distanceKm: 160 },
    { date: "2023-12-25", departure: "Grenoble", arrival: "Clermont-Ferrand", distanceKm: 220 },
    { date: "2026-06-14", departure: "Dijon", arrival: "Besançon", distanceKm: 90 },
    { date: "2024-05-20", departure: "Tours", arrival: "Le Mans", distanceKm: 95 },
    { date: "2025-09-08", departure: "Rouen", arrival: "Caen", distanceKm: 130 },
    { date: "2023-10-17", departure: "Reims", arrival: "Metz", distanceKm: 190 },
    { date: "2024-02-13", departure: "Amiens", arrival: "Lille", distanceKm: 150 },
    { date: "2025-11-21", departure: "Limoges", arrival: "Poitiers", distanceKm: 130 },
    { date: "2024-07-01", departure: "Angers", arrival: "La Rochelle", distanceKm: 170 },
    { date: "2026-04-19", departure: "Brest", arrival: "Quimper", distanceKm: 70 },
    { date: "2023-11-23", departure: "Avignon", arrival: "Nîmes", distanceKm: 45 },
    { date: "2024-09-10", departure: "Saint-Étienne", arrival: "Lyon", distanceKm: 65 },
    { date: "2025-02-27", departure: "Bayonne", arrival: "Pau", distanceKm: 115 },
    { date: "2026-05-06", departure: "Mulhouse", arrival: "Colmar", distanceKm: 40 },
    { date: "2023-08-14", departure: "Chambéry", arrival: "Annecy", distanceKm: 55 },
    { date: "2024-03-29", departure: "Paris", arrival: "Rouen", distanceKm: 135 },
    { date: "2025-06-11", departure: "Bordeaux", arrival: "La Rochelle", distanceKm: 180 },
    { date: "2026-07-02", departure: "Toulouse", arrival: "Albi", distanceKm: 75 },
    { date: "2023-05-19", departure: "Marseille", arrival: "Aix-en-Provence", distanceKm: 30 },
    { date: "2024-10-24", departure: "Nice", arrival: "Cannes", distanceKm: 35 },
    { date: "2025-12-13", departure: "Nantes", arrival: "Vannes", distanceKm: 120 },
    { date: "2026-02-28", departure: "Rennes", arrival: "Saint-Malo", distanceKm: 70 },
    { date: "2023-09-09", departure: "Clermont-Ferrand", arrival: "Le Puy-en-Velay", distanceKm: 130 },
    { date: "2024-06-15", departure: "Grenoble", arrival: "Valence", distanceKm: 110 },
    { date: "2025-03-05", departure: "Dijon", arrival: "Chalon-sur-Saône", distanceKm: 75 },
    { date: "2026-09-26", departure: "Tours", arrival: "Blois", distanceKm: 65 },
    { date: "2023-06-21", departure: "Rouen", arrival: "Evreux", distanceKm: 60 },
    { date: "2024-04-07", departure: "Reims", arrival: "Troyes", distanceKm: 130 },
    { date: "2025-08-30", departure: "Amiens", arrival: "Beauvais", distanceKm: 70 },
    { date: "2026-11-16", departure: "Limoges", arrival: "Brive-la-Gaillarde", distanceKm: 95 },
    { date: "2023-04-12", departure: "Angers", arrival: "Cholet", distanceKm: 65 },
    { date: "2024-12-03", departure: "Brest", arrival: "Morlaix", distanceKm: 60 },
    { date: "2025-10-19", departure: "Avignon", arrival: "Orange", distanceKm: 35 },
    { date: "2026-03-08", departure: "Saint-Étienne", arrival: "Roanne", distanceKm: 80 },
    { date: "2023-02-27", departure: "Bayonne", arrival: "Dax", distanceKm: 50 }
];

export const cyclists = [
    {
        id: 1,
        name: "Baptiste Perrot",
        nationality: "Allemagne",
        ranking: 10,
        age: 29,
        bestTime: "4h51",
        results: [
            { date: "2024-06-01", departure: "Paris", arrival: "Lyon", distanceKm: 465, time: "4h42" },
            { date: "2024-05-31", departure: "Marseille", arrival: "Nice", distanceKm: 200, time: "6h36" }
        ]
    },
    {
        id: 2,
        name: "Marc Bouvet",
        nationality: "Pays-Bas",
        ranking: 2,
        age: 31,
        bestTime: "5h46",
        results: [
            { date: "2022-02-12", departure: "Bordeaux", arrival: "Toulouse", distanceKm: 245, time: "6h34" },
            { date: "2022-07-26", departure: "Lille", arrival: "Strasbourg", distanceKm: 520, time: "6h29" }
        ]
    },
    {
        id: 3,
        name: "Gabriel Fabre",
        nationality: "Luxembourg",
        ranking: 3,
        age: 25,
        bestTime: "4h46",
        results: [
            { date: "2023-09-09", departure: "Nantes", arrival: "Rennes", distanceKm: 110, time: "4h28" },
            { date: "2023-08-10", departure: "Montpellier", arrival: "Perpignan", distanceKm: 160, time: "6h18" }
        ]
    },
    {
        id: 4,
        name: "Antoine Charrier",
        nationality: "Belgique",
        ranking: 4,
        age: 33,
        bestTime: "4h23",
        results: [
            { date: "2022-08-08", departure: "Grenoble", arrival: "Clermont-Ferrand", distanceKm: 220, time: "5h44" },
            { date: "2024-09-12", departure: "Dijon", arrival: "Besançon", distanceKm: 90, time: "5h55" }
        ]
    },
    {
        id: 5,
        name: "Théo Lefèvre",
        nationality: "Suisse",
        ranking: 5,
        age: 32,
        bestTime: "4h33",
        results: [
            { date: "2022-03-20", departure: "Tours", arrival: "Le Mans", distanceKm: 95, time: "4h23" },
            { date: "2024-04-08", departure: "Rouen", arrival: "Caen", distanceKm: 130, time: "6h41" }
        ]
    },
    {
        id: 6,
        name: "Mathieu Bertrand",
        nationality: "France",
        ranking: 1,
        age: 31,
        bestTime: "5h53",
        results: [
            { date: "2024-01-31", departure: "Reims", arrival: "Metz", distanceKm: 190, time: "5h22" },
            { date: "2022-10-23", departure: "Amiens", arrival: "Lille", distanceKm: 150, time: "5h53" }
        ]
    },
    {
        id: 7,
        name: "Hugo Lambert",
        nationality: "Suisse",
        ranking: 7,
        age: 34,
        bestTime: "4h32",
        results: [
            { date: "2023-06-07", departure: "Limoges", arrival: "Poitiers", distanceKm: 130, time: "6h56" },
            { date: "2023-07-27", departure: "Angers", arrival: "La Rochelle", distanceKm: 170, time: "5h27" }
        ]
    },
    {
        id: 8,
        name: "Jean Blanchard",
        nationality: "Allemagne",
        ranking: 8,
        age: 25,
        bestTime: "4h14",
        results: [
            { date: "2023-11-06", departure: "Brest", arrival: "Quimper", distanceKm: 70, time: "6h37" },
            { date: "2022-06-12", departure: "Avignon", arrival: "Nîmes", distanceKm: 45, time: "5h08" }
        ]
    },
    {
        id: 9,
        name: "Louis Girard",
        nationality: "Suisse",
        ranking: 9,
        age: 28,
        bestTime: "5h52",
        results: [
            { date: "2022-10-10", departure: "Saint-Étienne", arrival: "Lyon", distanceKm: 65, time: "4h40" },
            { date: "2024-02-01", departure: "Bayonne", arrival: "Pau", distanceKm: 115, time: "4h26" }
        ]
    },
    {
        id: 10,
        name: "Paul Marchand",
        nationality: "Espagne",
        ranking: 6,
        age: 34,
        bestTime: "4h36",
        results: [
            { date: "2023-04-25", departure: "Mulhouse", arrival: "Colmar", distanceKm: 40, time: "6h22" },
            { date: "2023-05-17", departure: "Chambéry", arrival: "Annecy", distanceKm: 55, time: "5h47" }
        ]
    }
];
