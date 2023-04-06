<template>
    <div class="admin-wraper form-wraper">

<div class="add-course">
{{title}}
<h1>Add Course </h1>
<InputControlVue name="title" @emitInput="handleChage('title')" modelValue="title" />
<InputControlVue name="desc" @emitInput="handleChage('desc')" modelValue="desc"  />
<InputControlVue />
</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputControlVue from "../InputControl.vue";
const title=ref('')

const handleChage=(val,e)=>{
console.log('event',e)
title.value=val


}

</script>

<style  scoped>
.add-course{
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
}

.form-wraper{
    background: #fff;
    margin: 10px 20px;
    width: 400px;
}

</style>

