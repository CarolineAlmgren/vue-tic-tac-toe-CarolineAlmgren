<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';

interface propsPlayers {
    player: Player[];
}
defineProps<propsPlayers>();

const cells = ref(Array(9).fill(""));

const makeMove = () => {

}
</script>

<template>
<p><b>Spelare 1:</b> {{player[0].name}} ({{ player[0].team }}) </p>
<p><b>Spelare 2:</b> {{ player[1].name }} ({{ player[1].team }})</p>
<div id="board">
    <div class="cell"
      v-for="(cell, index) in cells" :key="index" @click="makeMove(index)">
      {{ cell }}
    </div>
  </div>
<button>Starta nytt spel</button>
</template>

<style scoped>
#board{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    margin:20px;
}
.cell{
    height: 150px;
    width: 150px;
    border: black solid 2px;
    cursor: pointer;
}
</style>