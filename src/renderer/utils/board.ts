import { Cell } from "./cell"
import { Position } from "./position";

export class Board
{
    board: Cell[] = [];

    constructor()
    {
        this.populateExample();
        this.print();
    }

    private print()
    {
        for(var h_pos = 0; h_pos < 9; h_pos++)
        {
            var line = ""
            for(var v_pos = 0; v_pos < 9; v_pos++)
            {
                line += this.board[v_pos + 9 * h_pos].value;
            }
            console.log(line);
        }
    }

    public isValid() : boolean
    {
        for(var i=0; i < this.board.length; i++)
        {
            var cell = this.board[i]
            if(cell.value != 0)
            {
                var isValid = true;
                isValid = this.isValidForNeighbours(cell, cell.block_neighbours);
                if(!isValid)
                {
                    return false;
                }
                isValid = this.isValidForNeighbours(cell, cell.vertical_neighbours);
                if(!isValid)
                {
                    return false;
                }
                isValid = this.isValidForNeighbours(cell, cell.horizontal_neighbours);
                if(!isValid)
                {
                    return false;
                }
            }
        }
        return true;
    }

    private isValidForNeighbours(cell: Cell, neighbour_positions: Position[])
    {
        for(var j = 0; j < neighbour_positions.length; j++)
        {
            var position = neighbour_positions[j];
            var neighbour_pos = position.horizontal_pos * 9 + position.vertical_pos;
            var neighbour_cell = this.board[neighbour_pos]
            if(neighbour_cell.value != 0 && cell.value == neighbour_cell.value)
            {
                return false;
            }    
        }
        return true;
    }

    private populateExample()
    {
        var values = [
            [1,,,4,,,7,8,9],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,]

        ];
        for(var h_pos = 0; h_pos < 9; h_pos++)
        {
            for(var v_pos = 0; v_pos < 9; v_pos++)
            {
                var value = values[h_pos][v_pos];
                if(value == undefined)
                {
                    value = 0;
                }
                this.board.push(new Cell(h_pos, v_pos, value));
            }
        }
    }
}