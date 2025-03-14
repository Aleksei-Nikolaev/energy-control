<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/page-sections/TheHeader.vue'
import { ref } from 'vue'



const signal = ref({
  'Id': 12100,
  'date': '2024-06-19 13:39:25.456',
  'o2_slev': { 'V': 2.8703999519348145, 'Valid': true },
  'o2_sprav': { 'V': 3.428800106048584, 'Valid': true },
  'q_gaz': { 'V': 18.635000228881836, 'Valid': true },
  't_para_nitk_a': { 'V': 0, 'Valid': false },
  't_para_nitk_b': { 'V': 0, 'Valid': false },
  'p_para': { 'V': 0, 'Valid': false },
  'q_per_par': { 'V': 0, 'Valid': false },
  'q_pit_voda': { 'V': 0, 'Valid': false },
  't_vozdh_posl_rvpa': { 'V': 288.3740234375, 'Valid': true },
  't_vozdh_posl_rvpb': { 'V': 310.5609130859375, 'Valid': true },
  't_vozdh_posl_tvp_slev': { 'V': 266.2867126464844, 'Valid': true },
  't_vozdh_posl_tvp_sprav': { 'V': 272.5225524902344, 'Valid': true },
  't_posle_ekonomiz_slev': { 'V': 342.52545166015625, 'Valid': true },
  't_posle_ekonomiz_sprav': { 'V': 338.2048645019531, 'Valid': true },
  't_dym_zarvp_slev': { 'V': 113.33415222167969, 'Valid': true },
  't_dym_zarvp_sprav': { 'V': 141.9431610107422, 'Valid': true },
  't_dym_zatvp_slev': { 'V': 114.33468627929688, 'Valid': true },
  't_dym_zatvp_sprav': { 'V': 123.41287994384766, 'Valid': true },
  't_pitvod_kotl': { 'V': 235.12539672851562, 'Valid': true },
  't_uhodgaz_ventur1': { 'V': 102.37945556640625, 'Valid': true },
  't_uhodgaz_ventur2': { 'V': 105.57974243164062, 'Valid': true },
  't_mazut': { 'V': 29.58188247680664, 'Valid': true },
  't_uhodgaz_ventur3': { 'V': 139.1610107421875, 'Valid': true },
  't_uhodgaz_ventur4': { 'V': 141.55287170410156, 'Valid': true },
  't_kontensat_sbor': { 'V': 237.3689422607422, 'Valid': true },
  't_kontensat_vihkollect': { 'V': 235.69363403320312, 'Valid': true },
  't_vod_kollect_slev': { 'V': 323.3871765136719, 'Valid': true },
  't_vod_kollect_sprav': { 'V': 362.55035400390625, 'Valid': true },
  't_gaz_dsa': { 'V': 101.30108642578125, 'Valid': true },
  't_gaz_dsb': { 'V': 127.14057159423828, 'Valid': true },
  't_vozdh_pered_rvpa': { 'V': 36.95256805419922, 'Valid': true },
  't_vozdh_pered_rvpb': { 'V': 39.890869140625, 'Valid': true },
  't_vozdh_pered_tvpslev': { 'V': 56.95329284667969, 'Valid': true },
  't_vozdh_pered_tvpsprav': { 'V': 52.04710006713867, 'Valid': true },
  'h_baraban_slev': { 'V': 23.21807861328125, 'Valid': true },
  'h_baraban_sprav': { 'V': 41.7623291015625, 'Valid': true },
  'p_par_do_sk': { 'V': 100.88999938964844, 'Valid': true },
  'q_par': { 'V': 285.3900146484375, 'Valid': true },
  't_par_posle_sk': { 'V': 550.1599731445312, 'Valid': true },
  'vakum': { 'V': -0.8960312604904175, 'Valid': true },
  't_par_psg1_prov1': { 'V': 85.77693176269531, 'Valid': true },
  't_par_psg1_prov2': { 'V': 85.54236602783203, 'Valid': true },
  't_par_psg2': { 'V': 102.50209045410156, 'Valid': true },
  't_vod_do_psg1': { 'V': 56.736671447753906, 'Valid': true },
  't_vod_posle_psg1': { 'V': 83.98800659179688, 'Valid': true },
  't_vod_vihod_psg12': { 'V': 84.22085571289062, 'Valid': true },
  't_par_posle_ou1': { 'V': 316.58099365234375, 'Valid': true },
  't_par_posle_ou2': { 'V': 314.87359619140625, 'Valid': true },
  't_kondesat_do_kn': { 'V': 45.67630386352539, 'Valid': true },
  't_cirk_vod_posle_kondensat': { 'V': 40.108802795410156, 'Valid': true },
  't_cirk_vod_do_kondensat': { 'V': 33.88996505737305, 'Valid': true },
  't_par_cnd_sprav': { 'V': 45.701839447021484, 'Valid': true },
  't_par_cnd_slev': { 'V': 46.13312530517578, 'Valid': true },
  't_par_uplotn_kollect': { 'V': 147.79261779785156, 'Valid': true },
  't_kondest_posle_pnd4': { 'V': 142.07281494140625, 'Valid': true },
  't_vod_obvod_pvd7': { 'V': 231.50743103027344, 'Valid': true },
  't_par_pered_pn130': { 'V': 86.18014526367188, 'Valid': true },
  't_vod_posle_pvd7': { 'V': 230.35610961914062, 'Valid': true },
  'p_par_k_psg1': { 'V': -0.3569999933242798, 'Valid': true },
  'p_par_k_psg2': { 'V': 0.3314000070095062, 'Valid': true },
  'akt_stal_vozb_paz_7': { 'V': 66.51067352294922, 'Valid': true },
  'akt_stal_vozb_paz_21': { 'V': 66.6993408203125, 'Valid': true },
  'akt_stal_vozb_paz_36': { 'V': 73.21987915039062, 'Valid': true },
  'akt_stal_vozb_paz_50': { 'V': 71.04460906982422, 'Valid': true },
  'akt_stal_vozb_paz_64': { 'V': 71.35133361816406, 'Valid': true },
  'akt_stal_vozb_paz_77': { 'V': 71.1466064453125, 'Valid': true },
  'akt_stal_vozb_paz_3g7': { 'V': 47.53061294555664, 'Valid': true },
  'akt_stal_vozb_paz_25g10': { 'V': 46.5133056640625, 'Valid': true },
  'akt_stal_vozb_paz_44g12': { 'V': 45.932071685791016, 'Valid': true },
  'akt_stal_vozb_paz_3g13': { 'V': 48.37765884399414, 'Valid': true },
  'akt_stal_vozb_paz_25g16': { 'V': 48.206172943115234, 'Valid': true },
  'akt_stal_vozb_paz_44g18': { 'V': 49.252437591552734, 'Valid': true },
  't_vod_sobstv_nuzht': { 'V': 72.58728790283203, 'Valid': true },
  't_vod_glav_korp_truba1': { 'V': 75.28043365478516, 'Valid': true },
  't_vod_glav_korp_truba2': { 'V': 76.87652587890625, 'Valid': true },
  't_vod_za_psn1': { 'V': 77.4510726928711, 'Valid': true },
  't_vod_za_psn2': { 'V': 82.18794250488281, 'Valid': true }
})

const fields = {
  o2_slev: { V: 2.8703999519348145, Valid: true },
  o2_sprav: { V: 3.428800106048584, Valid: true },
  q_gaz: { V: 18.635000228881836, Valid: true },
  t_para_nitk_a: { V: 0, Valid: false },
  t_para_nitk_b: { V: 0, Valid: false },
  p_para: { V: 0, Valid: false },
  q_per_par: { V: 0, Valid: false },
  q_pit_voda: { V: 0, Valid: false },
  t_vozdh_posl_rvpa: { V: 288.3740234375, Valid: true },
  t_vozdh_posl_rvpb: { V: 310.5609130859375, Valid: true },
  t_vozdh_posl_tvp_slev: { V: 266.2867126464844, Valid: true },
  t_vozdh_posl_tvp_sprav: { V: 272.5225524902344, Valid: true },
  t_posle_ekonomiz_slev: { V: 342.52545166015625, Valid: true },
  t_posle_ekonomiz_sprav: { V: 338.2048645019531, Valid: true },
  t_dym_zarvp_slev: { V: 113.33415222167969, Valid: true },
  t_dym_zarvp_sprav: { V: 141.9431610107422, Valid: true },
  t_dym_zatvp_slev: { V: 114.33468627929688, Valid: true },
  t_dym_zatvp_sprav: { V: 123.41287994384766, Valid: true },
  t_pitvod_kotl: { V: 235.12539672851562, Valid: true },
  t_uhodgaz_ventur1: { V: 102.37945556640625, Valid: true },
  t_uhodgaz_ventur2: { V: 105.57974243164062, Valid: true },
  t_mazut: { V: 29.58188247680664, Valid: true },
  t_uhodgaz_ventur3: { V: 139.1610107421875, Valid: true },
  t_uhodgaz_ventur4: { V: 141.55287170410156, Valid: true },
  t_kontensat_sbor: { V: 237.3689422607422, Valid: true },
  t_kontensat_vihkollect: { V: 235.69363403320312, Valid: true },
  t_vod_kollect_slev: { V: 323.3871765136719, Valid: true },
  t_vod_kollect_sprav: { V: 362.55035400390625, Valid: true },
  t_gaz_dsa: { V: 101.30108642578125, Valid: true },
  t_gaz_dsb: { V: 127.14057159423828, Valid: true },
  t_vozdh_pered_rvpa: { V: 36.95256805419922, Valid: true },
  t_vozdh_pered_rvpb: { V: 39.890869140625, Valid: true },
  t_vozdh_pered_tvpslev: { V: 56.95329284667969, Valid: true },
  t_vozdh_pered_tvpsprav: { V: 52.04710006713867, Valid: true },
  h_baraban_slev: { V: 23.21807861328125, Valid: true },
  h_baraban_sprav: { V: 41.7623291015625, Valid: true },
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
  t_par_posle_ou1: 'T пара после ОУ1',
  t_par_posle_ou2: 'T пара после ОУ2',
  t_kondesat_do_kn: 'Т конденсата до КН',
  t_cirk_vod_posle_kondensat: 'T цирк воды на входе в кон-р',
  t_cirk_vod_do_kondensat: 'T цирк воды на выходе из кон-ра',
  t_par_cnd_sprav: 'T пара в верхнем ЦНД справа',
  t_par_cnd_slev: 'T пара в верхнем ЦНД слева',
  t_par_uplotn_kollect: 'T пара на уплотнении в кол-ре',
  t_kondest_posle_pnd4: 'T конденсата после ПНД-4',
  t_vod_obvod_pvd7: 'T пит воды за обвод кл ПВД-7',
  t_par_pered_pn130: 'T пара с уплот перед ПН-130',
  t_vod_posle_pvd7: 'T пит воды после ПВД-7',
  p_par_k_psg1: 'Давление пара к ПСГ-1',
  p_par_k_psg2: 'Давление пара к ПСГ-2',
  akt_stal_vozb_paz_7: { V: 66.51067352294922, Valid: true },
  akt_stal_vozb_paz_21: { V: 66.6993408203125, Valid: true },
  akt_stal_vozb_paz_36: { V: 73.21987915039062, Valid: true },
  akt_stal_vozb_paz_50: { V: 71.04460906982422, Valid: true },
  akt_stal_vozb_paz_64: { V: 71.35133361816406, Valid: true },
  akt_stal_vozb_paz_77: { V: 71.1466064453125, Valid: true },
  akt_stal_vozb_paz_3g7: { V: 47.53061294555664, Valid: true },
  akt_stal_vozb_paz_25g10: { V: 46.5133056640625, Valid: true },
  akt_stal_vozb_paz_44g12: { V: 45.932071685791016, Valid: true },
  akt_stal_vozb_paz_3g13: { V: 48.37765884399414, Valid: true },
  akt_stal_vozb_paz_25g16: { V: 48.206172943115234, Valid: true },
  akt_stal_vozb_paz_44g18: { V: 49.252437591552734, Valid: true },
  t_vod_sobstv_nuzht: { V: 72.58728790283203, Valid: true },
  t_vod_glav_korp_truba1: { V: 75.28043365478516, Valid: true },
  t_vod_glav_korp_truba2: { V: 76.87652587890625, Valid: true },
  t_vod_za_psn1: { V: 77.4510726928711, Valid: true },
  t_vod_za_psn2: { V: 82.18794250488281, Valid: true }
}

document.documentElement.classList.add('my-app-dark')

</script>

<template>
  <div class="content">
    <header>
      <TheHeader />
    </header>
    <RouterView :signal="signal" />
  </div>
</template>

<style lang="scss">
.content {
  width: 1400px;
  margin: 0 auto;
  padding: 34px 60px;
}

header {
  display: flex;
  margin-bottom: 10px;
}
</style>
