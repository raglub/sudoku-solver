import { Position } from "./position"

export class Cell
{
    position: Position;
    value: number;
    vertical_neighbours: Position[] = [];
    horizontal_neighbours: Position[] = [];
    block_neighbours: Position[] = [];

    constructor(horizontal_pos: number, vertical_pos: number, value: number = 0)
    {
        this.position = new Position(horizontal_pos, vertical_pos);
        this.value = value;
        this.populateHorizontalNeighbours();
        this.populateVerticalNeighbours();
        this.populateBlockNeighbours();
    }

    private populateVerticalNeighbours()
    {
        for(var index: number = 0; index < 9; index++)
        {
            var position = new Position(index, this.position.vertical_pos);
            if(position.horizontal_pos != this.position.horizontal_pos || position.vertical_pos != this.position.vertical_pos )
            {
                this.vertical_neighbours.push(position);
            }
        }
    }

    private populateHorizontalNeighbours()
    {
        for(var index: number = 0; index < 9; index++)
        {
            var position = new Position(this.position.horizontal_pos, index);
            if(position.horizontal_pos != this.position.horizontal_pos || position.vertical_pos != this.position.vertical_pos )
            {
                this.horizontal_neighbours.push(position);
            }
        }
    }

    private populateBlockNeighbours()
    {
        var horizontal_section = Math.floor(this.position.horizontal_pos / 3);
        var vertical_section = Math.floor(this.position.vertical_pos / 3);
        for(var vertical: number = 0; vertical < 3; vertical++)
        {
            for(var horizontal: number = 0; horizontal < 3; horizontal++)
            {
                var horizontal_pos = horizontal_section * 3 + horizontal;
                var vertical_pos = vertical_section * 3 + vertical;
                var position = new Position(horizontal_pos, vertical_pos);
                if(position.horizontal_pos != this.position.horizontal_pos || position.vertical_pos != this.position.vertical_pos )
                {
                    this.block_neighbours.push(position);
                }
            }
        }
    }
}