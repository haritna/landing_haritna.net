<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const { t, tm, rt } = useI18n()

const CR_NUMBER = '301205'
const TAX_NUMBER = '769-522-572'
const LEGAL_NAME_EN = 'Haritna Smart Systems Technology and AI Solutions'

type Row = { key: string, value: string, mono?: boolean, rtl?: boolean }

const sections = computed<{ key: string, rows: Row[] }[]>( () => [
  {
    key: 'identity',
    rows: [
      { key: 'legal_name_ar', value: t( 'company.values.legal_name_ar' ), rtl: true },
      { key: 'legal_name_en', value: LEGAL_NAME_EN },
      { key: 'legal_form', value: t( 'company.values.legal_form' ) },
      { key: 'law', value: t( 'company.values.law' ) },
      { key: 'authority', value: t( 'company.values.authority' ) },
    ],
  },
  {
    key: 'registration',
    rows: [
      { key: 'cr_number', value: CR_NUMBER, mono: true },
      { key: 'cr_office', value: t( 'company.values.cr_office' ) },
      { key: 'cr_date', value: t( 'company.values.cr_date' ) },
      { key: 'cr_valid', value: t( 'company.values.cr_valid' ) },
      { key: 'cert_number', value: t( 'company.values.cert_number' ) },
      { key: 'contract_number', value: '26-47900-05-1-01', mono: true },
    ],
  },
  {
    key: 'tax',
    rows: [
      { key: 'tax_number', value: TAX_NUMBER, mono: true },
      { key: 'tax_office', value: t( 'company.values.tax_office' ) },
      { key: 'activity_code', value: '6209', mono: true },
      { key: 'activity', value: t( 'company.values.activity' ) },
    ],
  },
  {
    key: 'address',
    rows: [
      { key: 'address', value: t( 'company.values.address' ), rtl: true },
      { key: 'country', value: t( 'company.values.country' ) },
    ],
  },
  {
    key: 'capital',
    rows: [
      { key: 'capital', value: t( 'company.values.capital' ) },
      { key: 'ownership', value: t( 'company.values.ownership' ) },
      { key: 'term', value: t( 'company.values.term' ) },
    ],
  },
] )

const purpose = computed( () => ( tm( 'company.purpose' ) as string[] ).map( ( item ) => rt( item ) ) )
const email = 'support@haritna.net'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Haritna" class="h-8 w-auto" />
          <span class="text-sm font-bold text-primary-light">{{ t( 'legal.company_name' ) }}</span>
        </RouterLink>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 pb-20 pt-10">
      <div class="mb-10 text-center">
        <span class="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
          {{ t( 'company.badge' ) }}
        </span>
        <h1 class="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{{ t( 'company.title' ) }}</h1>
        <p class="mx-auto max-w-2xl leading-relaxed text-muted-foreground">{{ t( 'company.subtitle' ) }}</p>
      </div>

      <div class="mb-8 grid gap-4 sm:grid-cols-2">
        <div class="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-6 text-center">
          <div class="mb-1 text-xs font-semibold text-muted-foreground">{{ t( 'company.fields.cr_number' ) }}</div>
          <div class="font-mono text-3xl font-black tracking-wider text-primary-light" dir="ltr">{{ CR_NUMBER }}</div>
        </div>
        <div class="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 p-6 text-center">
          <div class="mb-1 text-xs font-semibold text-muted-foreground">{{ t( 'company.fields.tax_number' ) }}</div>
          <div class="font-mono text-3xl font-black tracking-wider text-accent" dir="ltr">{{ TAX_NUMBER }}</div>
        </div>
      </div>

      <div class="space-y-6">
        <section v-for="section in sections" :key="section.key" class="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <h2 class="border-b border-border bg-muted/40 px-5 py-3 text-base font-bold">{{ t( `company.sections.${section.key}` ) }}</h2>
          <dl class="divide-y divide-border">
            <div v-for="row in section.rows" :key="row.key" class="grid gap-1 px-5 py-3 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-4">
              <dt class="text-sm text-muted-foreground">{{ t( `company.fields.${row.key}` ) }}</dt>
              <dd
                class="min-w-0 text-sm font-semibold leading-relaxed [overflow-wrap:anywhere]"
                :class="{ 'font-mono tracking-wide': row.mono }"
                :dir="row.rtl ? 'rtl' : undefined"
              >
                <span v-if="row.mono" dir="ltr" class="inline-block">{{ row.value }}</span>
                <template v-else>{{ row.value }}</template>
              </dd>
            </div>
          </dl>
        </section>

        <section class="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <h2 class="border-b border-border bg-muted/40 px-5 py-3 text-base font-bold">{{ t( 'company.sections.purpose' ) }}</h2>
          <div class="px-5 py-4">
            <ul class="space-y-2">
              <li v-for="( item, i ) in purpose" :key="i" class="flex gap-3 text-sm leading-relaxed">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <p class="mt-4 text-xs text-muted-foreground">{{ t( 'company.purpose_note' ) }}</p>
          </div>
        </section>

        <section class="rounded-2xl border border-border bg-muted/30 p-5">
          <h2 class="mb-2 text-base font-bold">{{ t( 'company.copies_title' ) }}</h2>
          <p class="text-sm leading-relaxed text-muted-foreground">
            {{ t( 'company.copies_body' ) }}
            <a :href="`mailto:${email}`" class="font-semibold text-accent hover:underline" dir="ltr">{{ email }}</a>
          </p>
        </section>
      </div>

      <div class="mt-12 text-center">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-primary-light transition-colors hover:bg-muted"
        >
          ← {{ t( 'legal.back_home' ) }}
        </RouterLink>
      </div>
    </main>
  </div>
</template>
