<template>
  <el-container id="app">
    <el-header class="bg-header">
      <el-menu
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item>Sudoku Solver</el-menu-item>
        <el-menu-item index="2">About</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <Board msg="Welcome to SudokuSolver"/>  
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Board from './components/Board.vue';

export default {
  name: 'App',
  components: {
    Board,
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.bg-header {
  background-color: #545c64;
}
</style>
