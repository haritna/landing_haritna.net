<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LegalLayout from '@/components/LegalLayout.vue'
import privacy from '@/legal/privacy.md?raw'
import { renderVolume, sliceSections } from '@/legal/render'

const { t } = useI18n()

const html = renderVolume( sliceSections( privacy, '## تمهيد' ) )
</script>

<template>
  <LegalLayout :title="t('legal.nav.privacy')">
    <div v-html="html" />
  </LegalLayout>
</template>
