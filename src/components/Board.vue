<script setup lang="ts">
import { computed, ref } from 'vue';
import { Player } from '../models/Player';

interface propsPlayers {
    player: Player[];
}
const props = defineProps<propsPlayers>();

const boxes = ref(Array(9).fill(""));

//hanterar speldragen
const currentPlayer = ref<Player>(props.player[0])

const makeMove = (i:number) => {
    if (boxes.value[i] !== '') {
    return;
  }
  
  boxes.value[i] = currentPlayer?.value?.team;
  if(currentPlayer.value === props.player[0]) {
    currentPlayer.value = props.player[1];
  }else currentPlayer.value = props.player[0] 

};

//hanterar vinnardragen
const winnerFunction = (box:(string[])| null[]): string | null => {
const winnerCombinations =[[0,1,2], [3,4,5], [6,7,8], [1,4,7], [0,3,6],[2,5,8], [0,4,8],[2,4,6]]
for (let i = 0; i < winnerCombinations.length; i++) {
    const [a,b,c] = winnerCombinations[i];
    if(box[a] && box[a] === box[b] && box[a]=== box[c]) {
        return box[a]
    }
}
 return null;

}
const theWinner = computed(() => winnerFunction(boxes.value.flat()))

const itsAtie = () => {
   return boxes.value.every((box) => box !=="") && !theWinner.value;
}

//återställer spelplanen
const newGame = () => {
    for (let i = 0; i < boxes.value.length; i++) {
        boxes.value[i] = '';
    }
}
</script>

<template>
<p><b>Spelare 1:</b> {{player[0].name}} ({{ player[0].team }}) </p>
<p><b>Spelare 2:</b> {{ player[1].name }} ({{ player[1].team }})</p>
<h3>Nu spelar: {{ currentPlayer?.name }}</h3>
<h2 v-if ="theWinner">Vinnaren är: {{ theWinner }} !</h2>
<p v-if="itsAtie()">Oavgjort</p>
<div id="board">
    <div class="box" v-for="(box, index) in boxes" :key="index" @click="makeMove(index)">
      {{ box }}
    </div>
  </div>
<button @click="newGame()">Nytt spel</button>
</template>

<style scoped>
#board{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    margin:20px;
}
.box{
    height: 150px;
    width: 150px;
    border: black solid 2px;
    cursor: pointer;
    font-size: 90px;
}
</style>