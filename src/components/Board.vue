<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';

interface propsPlayers {
    player: Player[];
}
const props = defineProps<propsPlayers>();

const boxes = ref(Array(9).fill(""));

const currentPlayer = ref<Player>(props.player[0]);

const gameOver = ref(false)

const theWinner = ref<string | null>(null);

const makeMove = (i: number) => {
    if (boxes.value[i] !== '' || gameOver.value) {
        return;
    }
    boxes.value[i] = currentPlayer.value?.team;

    const winner = winnerFunction(boxes.value);
    if (winner) {
      theWinner.value = winner;
      gameOver.value = true;
        return;
    }
    currentPlayer.value = currentPlayer.value === props.player[0] ? props.player[1] : props.player[0];
};

const winnerFunction = (board: string[]): string | null => {
    const winnerCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < winnerCombinations.length; i++) {
        const [a, b, c] = winnerCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
        }
    }
    return null;
};

const itsAtie = () => {
    return boxes.value.every((box) => box !== "") && !theWinner.value;
};

const newGame = () => {
    boxes.value = Array(9).fill("");
    currentPlayer.value = props.player[0];
    gameOver.value = false;
    theWinner.value = null;
};

</script>

<template>
  
<h3 v-if="!gameOver">Nu spelar: {{ currentPlayer?.name }}</h3>
<h3 v-if="theWinner">Grattis {{ currentPlayer.name }}, du vann!</h3>
<h3 v-if="itsAtie()">Oavgjort!</h3>
<div id="board">
    <div class="box" v-for="(box, index) in boxes" :key="index" @click="makeMove(index)">
      {{ box }}
    </div>
</div>
<button @click="newGame">Nytt spel</button>
</template>

<style scoped>
#board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px 5px;
    margin: 20px;
}
.box {
    height: 100px;
    width: 100px;
    border: black solid 2px;
    cursor: pointer;
    font-size: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
