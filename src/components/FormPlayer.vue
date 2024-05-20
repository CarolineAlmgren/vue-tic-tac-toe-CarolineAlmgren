<script setup lang="ts">
import { ref } from 'vue';

const userInput = ref("");
const error = ref("");

const emit = defineEmits<{
    (e: "add", text:string):void;
}>();

const handleSubmit = () => {
    if(userInput.value !== ""){
        emit("add", userInput.value);
        userInput.value="";
        error.value="";
        console.log(userInput.value)
    }else{
        error.value = "Du måste fylla i ett namn!";
    }
}
</script>

<template>
    <p>Fyll i ditt användarnamn</p>
    <form  @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" placeholder="Ange spelare">
    <button type="submit">Lägg till</button>
   
</form>
<p>{{ error }}</p>

</template>

<style scoped>

</style>
