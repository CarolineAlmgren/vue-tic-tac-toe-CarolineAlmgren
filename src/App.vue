<script setup lang="ts">
import FormPlayer from './components/FormPlayer.vue';
import TheGame from './components/TheGame.vue';
import { Player } from './models/Player';
import { ref } from 'vue';
import { GameState } from './models/GameState';
import Board from './components/Board.vue';

const state = ref<GameState>({
    showGame: false,
});

const players = ref<Player[]>([]);

const addPlayer = (text:string, team:string) => {
    players.value.push(new Player(text,team))
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
  <button @click="showGame" :disabled="players.length !== 2">Kör</button>
  <Board :player="players" v-if="state.showGame"/>
  <p v-if="state.showGame">Spelet är igång!</p>
</template>

<style scoped>


</style>
