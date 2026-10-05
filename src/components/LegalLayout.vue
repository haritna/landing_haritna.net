<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import operator from '@/legal/operator.md?raw'
import { renderVolume } from '@/legal/render'

defineProps<{
  title: string
}>()

const { t, locale } = useI18n()

const operatorHtml = renderVolume( operator )
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Haritna" class="h-8 w-auto" />
          <span class="text-sm font-bold text-primary-light">{{ t('legal.company_name') }}</span>
        </RouterLink>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-3xl px-4 pb-20 pt-10">
      <!-- Title -->
      <div class="mb-10 text-center">
        <h1 class="mb-2 text-3xl font-bold tracking-tight">{{ title }}</h1>
        <p class="mt-3 text-xs text-muted-foreground/70">{{ t('legal.source_note') }}</p>
        <p class="mt-3 text-xs text-muted-foreground/70">
          {{ t('legal.last_updated') }}: {{ t('legal.effective_date') }}
        </p>
      </div>

      <!-- Cross-links to other legal pages -->
      <nav class="mb-10 flex flex-wrap justify-center gap-2 text-sm">
        <RouterLink
          to="/privacy"
          class="rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          active-class="bg-primary text-white border-primary hover:bg-primary hover:text-white"
        >
          {{ t('legal.nav.privacy') }}
        </RouterLink>
        <RouterLink
          to="/terms"
          class="rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          active-class="bg-primary text-white border-primary hover:bg-primary hover:text-white"
        >
          {{ t('legal.nav.terms') }}
        </RouterLink>
        <RouterLink
          to="/data-deletion"
          class="rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          active-class="bg-primary text-white border-primary hover:bg-primary hover:text-white"
        >
          {{ t('legal.nav.data_deletion') }}
        </RouterLink>
      </nav>

      <p v-if="locale !== 'ar'" class="mb-8 rounded-xl border border-border bg-muted/40 p-4 text-center text-sm text-muted-foreground">
        {{ t('legal.arabic_only_note') }}
      </p>

      <!-- Body slot -->
      <article class="legal-content max-w-none" dir="rtl" lang="ar">
        <slot />
        <section class="legal-operator" v-html="operatorHtml" />
      </article>

      <!-- Back -->
      <div class="mt-12 text-center">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-primary-light transition-colors hover:bg-muted"
        >
          ← {{ t('legal.back_home') }}
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
.legal-content :deep(h2) {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
}
.legal-content :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}
.legal-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: color-mix(in oklch, var(--color-foreground) 90%, transparent);
}
.legal-content :deep(ul) {
  margin-bottom: 1rem;
  padding-inline-start: 1.5rem;
  list-style-type: disc;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.legal-content :deep(ol) {
  margin-bottom: 1rem;
  padding-inline-start: 1.5rem;
  list-style-type: decimal;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.legal-content :deep(li) {
  line-height: 1.7;
  color: color-mix(in oklch, var(--color-foreground) 90%, transparent);
}
.legal-content :deep(li strong) {
  color: var(--color-foreground);
  font-weight: 600;
}
.legal-content :deep(h2.legal-part) {
  margin-top: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
  font-size: 1.5rem;
  font-weight: 800;
}
.legal-content :deep(strong) {
  color: var(--color-foreground);
  font-weight: 700;
}
.legal-content :deep(hr) {
  margin: 2rem 0;
  border-color: var(--color-border);
}
.legal-content :deep(.legal-table) {
  margin-bottom: 1rem;
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
}
.legal-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}
.legal-content :deep(th),
.legal-content :deep(td) {
  padding: 0.6rem 0.9rem;
  border-bottom: 1px solid var(--color-border);
  text-align: start;
  vertical-align: top;
  line-height: 1.6;
}
.legal-content :deep(th) {
  background: color-mix(in oklch, var(--color-muted) 60%, transparent);
  font-weight: 700;
}
.legal-content :deep(tr:last-child td) {
  border-bottom: 0;
}
.legal-operator {
  margin-top: 3rem;
}
</style>
