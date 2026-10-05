<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LegalLayout from '@/components/LegalLayout.vue'
import terms from '@/legal/terms.md?raw'
import { renderVolume, sliceSections } from '@/legal/render'

const { t } = useI18n()

const html = renderVolume( sliceSections( terms, '## تمهيد' ) )
</script>

<template>
  <LegalLayout :title="t('legal.nav.terms')">
    <div v-html="html" />
  </LegalLayout>
</template>
