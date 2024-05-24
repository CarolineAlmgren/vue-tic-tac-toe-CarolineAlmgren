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
  <h1>Let's play Tic Tac Toe!</h1>  
  <TheGame/>
  <FormPlayer @add="addPlayer"/>
 
  <button @click="showGame" :disabled="players.length !== 2">Spela</button>
  <ul>
    <li v-for="player in players" :key="player.name">
    {{ player.name }} - {{ player.team }}
    </li>
  </ul>
  <Board :player="players" v-if="state.showGame"/>
</template>
<style scoped>
li {
  list-style-type: none;
}

</style>
