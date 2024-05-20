<script setup lang="ts">
import { ref } from 'vue';

const userInput = ref("");
const team = ref("");
const error = ref("");

const emit = defineEmits<{
    (e: "add", text:string, team:string):void;
}>();

const handleSubmit = () => {
    if(userInput.value !== ""){
        emit("add", userInput.value, team.value);
        userInput.value="";
        error.value="";
        console.log(userInput.value)
    }else{
        error.value = "Du måste fylla i två namn!";
    }
}
</script>

<template>
    <p>Fyll i två spelare och välj ett lag</p>
    <form  @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" placeholder="Ange spelare">
    <select v-model="team">
      <option value="" disabled>Välj lag</option>
      <option value="X">X</option>
      <option value="O">O</option>
    </select>
    <button type="submit">Lägg till</button>
   
</form>
<p>{{ error }}</p>

</template>

<style scoped>
input{
    margin: 2px;
    width: 250px; 
    height: 38px;
    border-radius: 10px;
    font-size: 20px;
}
select{
    margin: 2px;
    width: 100px;
    height: 43px;
    border: black solid 2px;
    border-radius: 10px;
    font-size: 20px;
}
</style>
