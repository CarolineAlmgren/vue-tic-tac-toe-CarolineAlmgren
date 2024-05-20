<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';

interface propsPlayers {
    player: Player[];
}
defineProps<propsPlayers>();
</script>

<template>
<p>Spelare 1:{{player[0].name}}</p>
<p>Spelare 2:{{ player[1].name }}</p>
<div id="board">
    <div class="cell" id="1"></div>
    <div class="cell" id="2"></div>
    <div class="cell" id="3"></div>
    <div class="cell" id="4"></div>
    <div class="cell" id="5"></div>
    <div class="cell" id="6"></div>
    <div class="cell" id="7"></div>
    <div class="cell" id="8"></div>
    <div class="cell" id="9"></div>
   
</div>
<button>Rensa allt</button>
</template>

<style scoped>
#board{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2px;
    margin:20px;
}
.cell{
    height: 150px;
    width: 150px;
    border: black solid 2px;
    cursor: pointer;
}
</style>