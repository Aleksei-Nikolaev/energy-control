<script setup lang="ts">
import { TheControlPanel } from '@/widgets'

defineProps<{
  signal?: any
  fieldNames?: any
}>()


const fields = [
  'p_par_do_sk',
  'q_par',
  't_par_posle_sk',
  'vakum',
  't_par_psg1_prov1',
  't_par_psg1_prov2',
  't_par_psg2',
  't_vod_do_psg1',
  't_vod_posle_psg1',
  't_vod_vihod_psg12',
  't_kondesat_do_kn',
  'p_par_k_psg1',
  't_cirk_vod_posle_kondensat',
  't_cirk_vod_do_kondensat',
  't_par_posle_ou1',
  't_par_posle_ou2',
  't_par_cnd_sprav',
  't_par_cnd_slev',
  't_par_uplotn_kollect',
  't_kondest_posle_pnd4',
  't_vod_obvod_pvd7',
  't_par_pered_pn130',
  't_vod_posle_pvd7',
  'p_par_k_psg2',
]
</script>

<template>
    <TheControlPanel :signal="signal" :fields="fields" />
</template>

<style lang="scss"></style>
