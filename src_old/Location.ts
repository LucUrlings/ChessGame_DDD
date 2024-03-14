// Value Object

type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

enum Column {
    'A',
    'B' ,
    'C',
    'D',
    'E',
    'F',
    'G',
    'H'
}

export class Location {
    public row: Row;
    public column: Column;

    constructor(row: Row, column: Column) {
        this.row = row;
        this.column = column
    }

    static fromString(location: string) {

        // Validate...
        // Has been validated successfully 💥✅
        const column: Column = Column[location.charAt(0).toUpperCase()]
        const row: Row = parseInt(location.charAt(1)) as Row

        return new Location(row, column)
    }
}