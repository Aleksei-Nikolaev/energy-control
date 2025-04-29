<script setup lang="ts">
import { TheControlPanel } from '@/widgets'
import { FieldNames, Fields } from '@/shared/config/types'
import { LastSensorValues } from '@/app/providers/api/types'

defineProps<{
  signal?: LastSensorValues
  fieldNames?: FieldNames
}>()

const fields = [
  'o2_slev',
  'o2_sprav',
  'q_gaz',
  'p_para',
  't_para_nitk_a',
  't_para_nitk_b',
  'q_per_par',
  'q_pit_voda',
  't_vozdh_posl_rvpa',
  't_vozdh_posl_rvpb',
  't_vozdh_posl_tvp_slev',
  't_vozdh_posl_tvp_sprav',
  't_posle_ekonomiz_slev',
  't_posle_ekonomiz_sprav',
  't_dym_zarvp_slev',
  't_dym_zarvp_sprav',
  't_dym_zatvp_slev',
  't_dym_zatvp_sprav',
  't_pitvod_kotl',
  't_uhodgaz_ventur1',
  't_uhodgaz_ventur2',
  't_mazut',
  't_uhodgaz_ventur3',
  't_uhodgaz_ventur4',
  't_kontensat_sbor',
  't_kontensat_vihkollect',
  't_vod_kollect_slev',
  't_vod_kollect_sprav',
  't_gaz_dsa',
  't_gaz_dsb',
  't_vozdh_pered_rvpa',
  't_vozdh_pered_rvpb',
  't_vozdh_pered_tvpslev'
] as Fields[]

</script>

<template>
    <TheControlPanel :signal="signal" :fields="fields" />
</template>

<style lang="scss"></style>
