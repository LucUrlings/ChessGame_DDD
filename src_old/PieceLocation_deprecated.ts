// Value Object

type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 // Row Y

enum File { // Column X
    'A',
    'B' ,
    'C',
    'D',
    'E',
    'F',
    'G',
    'H'
}

export class PieceLocation {
    public Rank: Rank;
    public File: File;

    constructor(row: Rank, column: File) {
        this.Rank = row;
        this.File = column
    }

    static fromString(location: string) {
        // Validate...
        // Has been validated successfully 💥✅
        const File: File = File[location.charAt(0).toUpperCase()]
        const Rank: Rank = parseInt(location.charAt(1)) as Rank

        return new PieceLocation(Rank, File)
    }
}