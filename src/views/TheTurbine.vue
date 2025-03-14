<script setup lang="ts">
import TheControlPanel from '@/components/common/TheControlPanel.vue'

defineProps<{
  signal?: any
}>()

const labels = {
  p_par_do_sk: 'P перегретого пара до СК',
  q_par: 'Q острого пара к Т/Г',
  t_par_posle_sk: 'T острого пара после СК',
  vakum: 'Вакуум',
  t_par_psg1_prov1: 'Т пара к ПСГ-1 паропровод-1',
  t_par_psg1_prov2: 'Т пара к ПСГ-1 паропровод-2',
  t_par_psg2: 'Т пара к ПСГ-2',
  t_vod_do_psg1: 'Т сет воды на входе ПСГ-1',
  t_vod_posle_psg1: 'Т сет воды после ПСГ-1',
  t_vod_vihod_psg12: 'Т сет воды на выходе ПСГ-1,2',
  t_kondesat_do_kn: 'Т конденсата до КН',
  p_par_k_psg1: 'Давление пара к ПСГ-1',
  t_cirk_vod_posle_kondensat: 'T цирк воды на входе в кон-р',
  t_cirk_vod_do_kondensat: 'T цирк воды на выходе из кон-ра',
  t_par_posle_ou1: 'T пара после ОУ1',
  t_par_posle_ou2: 'T пара после ОУ2',
  t_par_cnd_sprav: 'T пара в верхнем ЦНД справа',
  t_par_cnd_slev: 'T пара в верхнем ЦНД слева',
  t_par_uplotn_kollect: 'T пара на уплотнении в кол-ре',
  t_kondest_posle_pnd4: 'T конденсата после ПНД-4',
  t_vod_obvod_pvd7: 'T пит воды за обвод кл ПВД-7',
  t_par_pered_pn130: 'T пара с уплот перед ПН-130',
  t_vod_posle_pvd7: 'T пит воды после ПВД-7',
  p_par_k_psg2: 'Давление пара к ПСГ-2',
}

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
  <TheControlPanel :signal="signal" :fields="fields" :labels="labels"/>
  <div>Турбина</div>

</template>

<style lang="scss"></style>
