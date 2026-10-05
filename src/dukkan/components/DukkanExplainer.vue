<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ScrollReveal from '@/components/ScrollReveal.vue'

defineEmits<{
  start: []
}>()

const { t } = useI18n()

const K = 'dukkan_about'

const points = [ 'one', 'two', 'three' ]

const audiences = [
  { key: 'merchant', icon: 'M3 9l1-5h16l1 5M3 9h18M3 9v11h18V9M9 20v-6h6v6', tone: 'text-accent bg-accent/10 border-accent/20' },
  { key: 'buyer', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z', tone: 'text-sky-400 bg-sky-400/10 border-sky-400/20' },
  { key: 'staff', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', tone: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  { key: 'team', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', tone: 'text-violet-400 bg-violet-400/10 border-violet-400/20' },
]

const sellTypes = [ 'standard', 'custom_order', 'service', 'auction', 'used', 'space' ]

const steps = [ 'browse', 'checkout', 'prepare', 'deliver', 'receive', 'after' ]

const tools = [ 'pos', 'branches', 'catalog', 'storefront', 'analytics', 'automation', 'coupons', 'delivery' ]

const earnItems = [ 'credits', 'commission', 'payment' ]

const trustItems = [ 'scope', 'signin', 'roles', 'verification', 'review' ]

const platforms = [ 'web', 'mobile', 'desktop', 'pwa' ]
</script>

<template>
  <section id="about" class="py-16 border-b border-border">
    <div class="mx-auto max-w-[1100px] px-5">
      <ScrollReveal>
        <div class="mb-12">
          <span class="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-3">{{ t( `${K}.badge` ) }}</span>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{{ t( `${K}.title` ) }}</h2>
          <p class="text-muted-foreground max-w-[65ch] leading-loose">{{ t( `${K}.intro` ) }}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="p in points" :key="p" class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold">
              <span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
              {{ t( `${K}.points.${p}` ) }}
            </span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h3 class="text-xl font-bold mb-5">{{ t( `${K}.who.title` ) }}</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div v-for="a in audiences" :key="a.key" class="rounded-2xl border border-border bg-card p-5">
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border" :class="a.tone">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
                <path stroke-linecap="round" stroke-linejoin="round" :d="a.icon" />
              </svg>
            </div>
            <h4 class="font-bold mb-1.5">{{ t( `${K}.who.${a.key}.title` ) }}</h4>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( `${K}.who.${a.key}.desc` ) }}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h3 class="text-xl font-bold mb-5">{{ t( `${K}.sell.title` ) }}</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          <div v-for="( s, i ) in sellTypes" :key="s" class="rounded-2xl border border-border bg-card p-5">
            <div class="mb-2 text-xs font-black text-accent">0{{ i + 1 }}</div>
            <h4 class="font-bold mb-1.5">{{ t( `${K}.sell.${s}.title` ) }}</h4>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( `${K}.sell.${s}.desc` ) }}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h3 class="text-xl font-bold mb-5">{{ t( `${K}.journey.title` ) }}</h3>
        <ol class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          <li v-for="( step, i ) in steps" :key="step" class="relative rounded-2xl border border-border bg-card p-5 ps-16">
            <span class="absolute start-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-black text-white">{{ i + 1 }}</span>
            <h4 class="font-bold mb-1.5">{{ t( `${K}.journey.steps.${step}.title` ) }}</h4>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( `${K}.journey.steps.${step}.desc` ) }}</p>
          </li>
        </ol>
      </ScrollReveal>

      <ScrollReveal>
        <div class="grid lg:grid-cols-2 gap-6 mb-6">
          <div class="rounded-2xl border border-border bg-card p-6">
            <h3 class="text-lg font-bold mb-4">{{ t( `${K}.tools.title` ) }}</h3>
            <ul class="grid sm:grid-cols-2 gap-x-4 gap-y-3">
              <li v-for="tool in tools" :key="tool" class="flex gap-2.5 text-sm leading-relaxed">
                <svg class="mt-1 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ t( `${K}.tools.${tool}` ) }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 to-transparent p-6">
            <h3 class="text-lg font-bold mb-2">{{ t( `${K}.earn.title` ) }}</h3>
            <p class="text-sm font-semibold mb-4">{{ t( `${K}.earn.desc` ) }}</p>
            <ul class="space-y-3">
              <li v-for="e in earnItems" :key="e" class="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                <span>{{ t( `${K}.earn.${e}` ) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div class="grid lg:grid-cols-2 gap-6 mb-12">
          <div class="rounded-2xl border border-border bg-card p-6">
            <h3 class="text-lg font-bold mb-4">{{ t( `${K}.trust.title` ) }}</h3>
            <ul class="space-y-3">
              <li v-for="item in trustItems" :key="item" class="flex gap-2.5 text-sm leading-relaxed">
                <svg class="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>{{ t( `${K}.trust.${item}` ) }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-border bg-card p-6">
            <h3 class="text-lg font-bold mb-4">{{ t( `${K}.platforms.title` ) }}</h3>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="p in platforms" :key="p" class="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-semibold text-center">
                {{ t( `${K}.platforms.${p}` ) }}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div class="text-center">
        <button
          type="button"
          class="inline-flex items-center gap-2 px-7 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105"
          @click="$emit( 'start' )"
        >
          {{ t( `${K}.cta` ) }}
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
