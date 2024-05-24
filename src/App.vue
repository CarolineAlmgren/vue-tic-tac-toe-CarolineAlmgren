<script setup lang="ts">
import FormPlayer from './components/FormPlayer.vue';
import { Player } from './models/Player';
import { ref } from 'vue';
import { GameState } from './models/GameState';
import Board from './components/Board.vue';

const state = ref<GameState>({
    showGame: false,
});

const players = ref<Player[]>([]);

const addPlayer = (text:string) => {
  const teams = players.value.length === 0 ? "X" : "O";
    players.value.push(new Player(text,teams))
}

const showGame = () => {
    if(players.value.length === 2) {
      state.value.showGame = !state.value.showGame
        
    } else{
      alert("Spelet kunde ej starta!")
    }
}
</script>

<template>
  <div class="container">
    <div class="form-section" v-if="!state.showGame">
    <h1>Let's play Tic Tac Toe!</h1>  
    <FormPlayer @add="addPlayer"/>
    <button @click="showGame" :disabled="players.length !== 2">Spela</button>
    </div>
    <ul>
      <li v-for="player in players" :key="player.name">
      {{ player.name }} - {{ player.team }}
      </li>
    </ul>
    <div class="board-section">
      <Board :player="players" v-if="state.showGame"/>
    </div>
  
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-section {
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

button {
    font-size: 16px;
}
</style>

