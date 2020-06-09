<template>
  <div>
    <h1>{{ title }}</h1>
    <p>
      <table id="example-2">
        <tr v-for="row in 9" :key="row">
          <td v-for="column in 9" :key="column">
            <input v-model="board.board[(row - 1) * 9 + column - 1].value" />
          </td>
        </tr>
      </table>
      <button @click="handleValidation">Check</button>
    </p>
  </div>

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Cell } from '../utils/cell';
import { Board } from '../utils/board';

@Component
export default class BoardView extends Vue {
  
  private title = "Sudoku Solver";
  private cell: Cell = new Cell(0, 0, 9);
  private board: Board = new Board();
  
  public handleValidation(): void {
      console.log(this.board.isValid())
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  width: 20px;
}
</style>
