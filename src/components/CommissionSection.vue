<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import ScrollReveal from './ScrollReveal.vue'

withDefaults( defineProps<{ cta?: boolean }>(), { cta: false } )

const { t } = useI18n()

const RATE = 2
const MARKET_RATE = 15
const amounts = [ 5000, 20000, 100000 ]
const points = [ 'free', 'delivered', 'earn' ]

const sales = ref( amounts[1] )
const money = ( n: number ) => n.toLocaleString( 'en-US' )
const ours = computed( () => sales.value * RATE / 100 )
const market = computed( () => sales.value * MARKET_RATE / 100 )
</script>

<template>
  <section id="commission" class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <div class="rounded-[2rem] border border-accent/30 overflow-hidden grid lg:grid-cols-[1fr_1fr] shadow-2xl shadow-accent/5">
          <div class="relative p-6 sm:p-12 bg-accent/[0.06] flex flex-col justify-center gap-8">
            <span class="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-sm font-bold">
              <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
              {{ t( 'commission.label' ) }}
            </span>

            <div class="flex items-center gap-6 sm:gap-8">
              <div dir="ltr" class="text-[6.5rem] sm:text-[11rem] leading-[0.8] font-black tracking-tighter text-accent">{{ RATE }}<span class="text-[0.55em] align-top">%</span></div>
              <div role="img" :aria-label="t( 'commission.dots' )" class="grid grid-cols-10 gap-1 sm:gap-1.5 shrink-0">
                <span
                  v-for="i in 100"
                  :key="i"
                  class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
                  :class="i <= RATE ? 'bg-accent ring-4 ring-accent/20 motion-safe:animate-pulse' : 'bg-foreground/10'"
                ></span>
              </div>
            </div>

            <div class="space-y-4">
              <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight">{{ t( 'commission.title' ) }}</h2>
              <p class="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[46ch]">{{ t( 'commission.desc' ) }}</p>
            </div>
          </div>

          <div class="p-6 sm:p-12 bg-card flex flex-col justify-center gap-8">
            <ul class="space-y-3">
              <li v-for="p in points" :key="p" class="flex items-center gap-3 font-semibold">
                <span class="w-7 h-7 shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
                  <svg class="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {{ t( `commission.points.${p}` ) }}
              </li>
            </ul>

            <div class="rounded-2xl border border-border bg-background/60 p-5 sm:p-6 space-y-5">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <h3 class="font-bold">{{ t( 'commission.calc.title' ) }}</h3>
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="text-sm text-muted-foreground me-1">{{ t( 'commission.calc.sales' ) }}</span>
                  <button
                    v-for="a in amounts"
                    :key="a"
                    type="button"
                    class="px-3 py-1.5 rounded-lg text-sm font-bold border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    :class="sales === a ? 'bg-accent text-white border-accent' : 'border-border text-muted-foreground hover:text-foreground hover:border-accent/60'"
                    :aria-pressed="sales === a"
                    @click="sales = a"
                  >
                    {{ money( a ) }} {{ t( 'commission.calc.currency' ) }}
                  </button>
                </div>
              </div>

              <div class="space-y-4">
                <div>
                  <div class="flex items-baseline justify-between gap-4 mb-2">
                    <span class="font-bold">{{ t( 'commission.calc.ours' ) }}</span>
                    <span class="text-3xl font-black text-accent tabular-nums">{{ money( ours ) }} <span class="text-base font-bold">{{ t( 'commission.calc.currency' ) }}</span></span>
                  </div>
                  <div class="h-3.5 rounded-full bg-muted overflow-hidden">
                    <div class="h-full rounded-full bg-accent" :style="{ width: `${RATE / MARKET_RATE * 100}%` }"></div>
                  </div>
                </div>
                <div>
                  <div class="flex items-baseline justify-between gap-4 mb-2 text-muted-foreground">
                    <span class="text-sm">{{ t( 'commission.calc.market', { n: MARKET_RATE } ) }}</span>
                    <span class="font-bold tabular-nums">{{ money( market ) }} {{ t( 'commission.calc.currency' ) }}</span>
                  </div>
                  <div class="h-3.5 rounded-full bg-muted-foreground/30"></div>
                </div>
              </div>

              <p class="rounded-xl bg-accent/10 text-accent font-bold px-4 py-3 tabular-nums">
                {{ t( 'commission.calc.saved', { amount: money( market - ours ) } ) }}
              </p>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4">
              <p class="text-xs text-muted-foreground leading-relaxed max-w-[44ch]">{{ t( 'commission.calc.note', { n: MARKET_RATE } ) }}</p>
              <RouterLink
                v-if="cta"
                to="/dukkan"
                class="px-5 py-2.5 rounded-xl bg-accent text-white font-bold hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {{ t( 'commission.cta' ) }}
              </RouterLink>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
