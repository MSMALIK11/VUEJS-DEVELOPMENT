<template>
    <div>
    <input type="text" :value="modelValue" placeholder="Enter Course Title*"
    @input="$emit('emitInput',$event.target.value)"

    >

    </div>
</template>

<script setup>

defineProps(['modelValue'])
defineEmits(['update:modelValue'])



</script>

<style  scoped>
input{
    outline: none;
    background: transparent;
    border-bottom: 2px solid rgba(224, 195, 195, 0.775);
    padding: 5px;
}
input:focus{
        border-bottom: 2px solid rgba(25, 44, 192, 0.794);

}
input:vi{
        border-bottom: 2px solid aqua;

}

</style>