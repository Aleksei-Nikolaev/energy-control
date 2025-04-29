<script setup lang="ts">
import { computed } from 'vue'
import { fieldNames } from '@/shared/config/constants'
import { Fields, FieldValues } from '@/shared/config/types'

const props = defineProps<({
  shownData: FieldValues
  fields: Fields[]
})>()

const model = defineModel()

const labels = fieldNames;


const normalizedSignal = computed(() => {
  if (props.shownData) {
    return props.fields.reduce((acc, field) => {
      const value = props.shownData[field];
      if (typeof value === 'number' && !isNaN(value)) {
        acc[field] = Math.round(value * 100) / 100;
      } else {
        acc[field] = "n/d";
      }
      return acc;
    }, {} as FieldValues);
  }
})
</script>

<template>
<div class="indicator__container">
  <div class="indicator__group" v-for="(field, index) in fields" v-if="normalizedSignal">
    <div class="indicator__name">  {{labels[field]}}</div>
    <div class="indicator__value">{{normalizedSignal[field]}}</div>
    <Checkbox class="indicator__radio" v-model="model" :value="fields?.[index]" />
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

    @include lg {
      grid-template-columns: repeat(1, 1fr);
    }
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

    @include sm {
      font-size: 36px;
      font-weight: bold;
    }
  }

  &__name {
    background: #ca8a04;
    padding: 10px 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__value {
    width: 70px;
    min-width: 70px;
    align-items: center;
    background: lightgray;
    color: black;
    height: 100%;
    font-weight: bold;

    @include sm {
      min-width: 120px;
    }
  }

  &__radio {
    @include sm {
      display: none;
    }
  }
}

</style>
