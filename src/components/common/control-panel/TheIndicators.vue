<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import { fieldNames } from '../../../types/fieldNames.ts'

const props = defineProps<({
  shownData?: any
  fields?: string[]
})>()

const model = defineModel()

const labels = fieldNames;


const normalizedSignal = computed(() => {
  if (props.shownData) {
    return  props.fields.reduce((acc, field) => {
      acc[field] = (props.shownData[field] && isNaN(props.shownData[field]) ? "n/d" : Math.round(props.shownData[field] * 100) / 100)
      return acc
    }, {})
  }
  return  props.fields.reduce((acc, field) => {
    acc[field] = "n/d"
    return acc
  }, {})
})



</script>

<template>
<div class="indicator__container">
  <div class="indicator__group" v-for="(field, index) in fields" v-if="normalizedSignal">
    <div class="indicator__name">  {{labels[field]}}</div>
    <div class="indicator__value">{{normalizedSignal[field]}}</div>
    <RadioButton v-model="model" :value="fields[index]" />
  </div>
</div>
</template>

<style scoped lang="scss">
.indicator {
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;
  }

  &__group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__name,
  &__value {
    display: flex;
    justify-content: center;
    font-size: 18px;
    border-radius: 4px;
    box-sizing: border-box;
    color: black;
  }

  &__name {
    background: #ca8a04;
    padding: 10px 0;
    width: 100%;
  }

  &__value {
    width: 70px;
    min-width: 70px;
    align-items: center;
    background: lightgray;
    color: black;
    height: 100%;
    font-weight: bold;
  }
}

</style>
