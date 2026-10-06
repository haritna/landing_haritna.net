<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { professionList } from '@/dukkan/data'
import { useScreenshotPath } from '@/dukkan/composables/useScreenshotPath'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import PhoneMockup from '@/dukkan/components/PhoneMockup.vue'
import BrowserMockup from '@/dukkan/components/BrowserMockup.vue'
import DukkanExplainer from '@/dukkan/components/DukkanExplainer.vue'

const { t, te, locale } = useI18n()
const { desktopBase: D, mobileBase: M } = useScreenshotPath()
const isScrolled = ref( false )
const activeFlow = ref( '' )

type Shot = { d?: string, m?: string[], url?: string, og?: string[] }
type Block =
  | { kind: 'split', key?: string, shot?: Shot }
  | { kind: 'cards', keys: string[], cols: 2 | 3, shots?: Record<string, string> }
  | { kind: 'tiles', keys: string[], steps?: boolean }
  | { kind: 'shot', shot: Shot }
  | { kind: 'gallery', key: string, og: Record<string, string> }
type Flow = { id: string, scenario?: string, blocks: Block[] }
type Chapter = { id: string, flows: Flow[] }

const chapters: Chapter[] = [
  { id: 'start', flows: [
    { id: 'register', scenario: '👩', blocks: [
      { kind: 'split', key: 's1', shot: { m: [ 'register' ] } },
      { kind: 'split', key: 's2', shot: { m: [ 'login' ] } },
    ] },
    { id: 'company', scenario: '👩', blocks: [
      { kind: 'split', key: 's1', shot: { m: [ 'dashboard', 'company-create' ] } },
      { kind: 'split', key: 's2', shot: { d: 'company-members', url: 'Team' } },
      { kind: 'split', key: 's3', shot: { d: 'company-kyb', url: 'Verification' } },
    ] },
    { id: 'catalog', blocks: [
      { kind: 'split', key: 'cats', shot: { d: 'company-categories', m: [ 'category-tree' ] } },
      { kind: 'split', key: 'prods', shot: { d: 'company-products', url: 'Products' } },
      { kind: 'cards', keys: [ 'stock', 'media' ], cols: 2 },
    ] },
    { id: 'types', blocks: [
      { kind: 'cards', keys: [ 'standard', 'custom_order', 'service', 'auction', 'used', 'space' ], cols: 3 },
      { kind: 'shot', shot: { m: [ 'product-create' ] } },
    ] },
  ] },
  { id: 'show', flows: [
    { id: 'builder', blocks: [
      { kind: 'split', key: 'sections', shot: { d: 'page-builder', url: 'Page Builder' } },
      { kind: 'split', key: 'result', shot: { d: 'public-page', url: 'dukkan.haritna.net/elegance-fashion' } },
    ] },
    { id: 'share', scenario: '👩', blocks: [
      { kind: 'split', key: 'card', shot: { og: [ 'evening-gown', 'leather-tote-bag' ] } },
      { kind: 'gallery', key: 'kinds', og: { company: 'elegance-fashion', branch: 'cairo-branch', category: 'dresses', member: 'sara' } },
      { kind: 'tiles', keys: [ 's1', 's2', 's3' ] },
      { kind: 'split', key: 'stats' },
      { kind: 'shot', shot: { d: 'share-analytics', url: 'Share Analytics' } },
    ] },
    { id: 'market', scenario: '👨', blocks: [
      { kind: 'split', key: 's1', shot: { d: 'storefront', url: 'dukkan.haritna.net' } },
      { kind: 'split', key: 's2', shot: { d: 'products', m: [ 'products' ] } },
      { kind: 'split', key: 's3', shot: { m: [ 'storefront' ] } },
    ] },
    { id: 'social', blocks: [
      { kind: 'cards', keys: [ 'follow', 'wishlist', 'reviews' ], cols: 3, shots: { follow: 'following', wishlist: 'wishlist', reviews: 'profile' } },
    ] },
  ] },
  { id: 'sell', flows: [
    { id: 'cart', blocks: [
      { kind: 'tiles', keys: [ 's1', 's2', 's3', 's4' ], steps: true },
      { kind: 'shot', shot: { m: [ 'cart' ] } },
    ] },
    { id: 'orders', blocks: [
      { kind: 'split', key: 'board', shot: { d: 'company-orders', url: 'Orders' } },
      { kind: 'split', key: 'detail', shot: { m: [ 'order-detail' ] } },
      { kind: 'cards', keys: [ 'aftersale', 'document' ], cols: 2 },
    ] },
    { id: 'shipping', blocks: [
      { kind: 'tiles', keys: [ 's1', 's2', 's3' ] },
      { kind: 'shot', shot: { d: 'shipping-settings', url: 'Shipping' } },
    ] },
    { id: 'spaces', scenario: '📸', blocks: [
      { kind: 'split', key: 's1', shot: { d: 'venue-spaces', url: 'Spaces' } },
      { kind: 'split', key: 's2', shot: { m: [ 'public-space' ] } },
    ] },
    { id: 'pos', scenario: '🛒', blocks: [
      { kind: 'cards', keys: [ 's1', 's2', 's3' ], cols: 3 },
      { kind: 'shot', shot: { d: 'pos-terminal', url: 'POS' } },
    ] },
  ] },
  { id: 'grow', flows: [
    { id: 'analytics', blocks: [
      { kind: 'shot', shot: { d: 'analytics', url: 'Analytics' } },
      { kind: 'cards', keys: [ 's1', 's2', 's3' ], cols: 3 },
    ] },
    { id: 'coupons', scenario: '🎫', blocks: [
      { kind: 'cards', keys: [ 's1', 's2', 's3' ], cols: 3 },
      { kind: 'shot', shot: { d: 'coupons', url: 'Coupons' } },
    ] },
    { id: 'automation', scenario: '👩', blocks: [
      { kind: 'shot', shot: { d: 'automations', url: 'Automation' } },
      { kind: 'cards', keys: [ 's1', 's2', 's3' ], cols: 3 },
    ] },
    { id: 'tickets', blocks: [
      { kind: 'cards', keys: [ 's1', 's2', 's3' ], cols: 3 },
      { kind: 'shot', shot: { d: 'tickets', url: 'Tickets' } },
    ] },
    { id: 'notifications', blocks: [
      { kind: 'split', shot: { d: 'notifications', m: [ 'notifications' ] } },
    ] },
    { id: 'credits', blocks: [
      { kind: 'cards', keys: [ 's1', 's2' ], cols: 2 },
      { kind: 'shot', shot: { d: 'credits', url: 'Credits' } },
    ] },
  ] },
]

const numbered = chapters.flatMap( ( c ) => c.flows.map( ( f ) => f.id ) )
const why = [ 'one_app', 'details', 'help', 'share' ]

function splitCols( shot: Shot | undefined, bi: number ) {
  if ( !shot ) return ''
  if ( shot.d && !shot.m ) return bi % 2 ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr]'
  return 'md:grid-cols-2'
}
const flowNumber = ( id: string ) => numbered.indexOf( id ) + 1
const k = ( ...parts: ( string | undefined )[] ) => [ 'wt.flow', ...parts ].filter( Boolean ).join( '.' )
const bullets = ( base: string ) => [ 'b1', 'b2', 'b3', 'b4' ].filter( ( b ) => te( `${base}.${b}` ) ).map( ( b ) => `${base}.${b}` )

function handleScroll() {
  isScrolled.value = window.scrollY > 50
  const sections = document.querySelectorAll( 'section[id]' )
  let current = ''
  sections.forEach( ( s ) => {
    if ( window.scrollY >= ( s as HTMLElement ).offsetTop - 140 ) current = s.id
  } )
  activeFlow.value = current
}

function goTo( id: string ) {
  document.getElementById( id )?.scrollIntoView( { behavior: 'smooth' } )
}

onMounted( () => window.addEventListener( 'scroll', handleScroll, { passive: true } ) )
onUnmounted( () => window.removeEventListener( 'scroll', handleScroll ) )
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">

    <nav class="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b"
      :class="isScrolled ? 'bg-background/90 backdrop-blur-xl border-border shadow-lg' : 'bg-transparent border-transparent'">
      <div class="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5">
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Haritna" class="h-8 w-auto" />
          <span class="text-sm font-bold"><span class="text-accent">Dukkan</span><span class="text-muted-foreground ms-1 hidden sm:inline">Walkthrough</span></span>
        </RouterLink>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
      <div class="hidden md:flex mx-auto max-w-[1200px] flex-wrap justify-center items-center gap-x-4 gap-y-1 px-5 pb-2.5">
        <div v-for="c in chapters" :key="c.id" class="flex flex-wrap items-center gap-1">
          <span class="px-1 text-xs font-bold text-foreground">{{ t( `wt.chapters.${c.id}.title` ) }}</span>
          <button v-for="f in c.flows" :key="f.id" @click="goTo( f.id )"
            class="whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-semibold transition-colors"
            :class="activeFlow === f.id ? 'bg-accent/15 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'">
            {{ t( k( f.id, 'nav' ) ) }}
          </button>
        </div>
      </div>
    </nav>

    <section class="relative pt-28 md:pt-40 pb-16 overflow-hidden text-center">
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-40 blur-[60px] pointer-events-none"
        style="background: radial-gradient(ellipse at 40% 50%, rgba(232,97,58,.15), transparent 65%), radial-gradient(ellipse at 60% 40%, rgba(42,63,106,.2), transparent 60%);"></div>
      <div class="relative mx-auto max-w-[1100px] px-5">
        <ScrollReveal>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-semibold text-muted-foreground mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px] shadow-accent"></span>
            {{ t( 'wt.hero.badge', { n: numbered.length } ) }}
          </div>
        </ScrollReveal>
        <ScrollReveal :delay="100">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5">
            {{ t( 'wt.hero.title1' ) }}<span class="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">Dukkan</span>{{ t( 'wt.hero.title2' ) }}
          </h1>
        </ScrollReveal>
        <ScrollReveal :delay="200">
          <p class="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">{{ t( 'wt.hero.desc' ) }}</p>
        </ScrollReveal>
        <ScrollReveal :delay="300">
          <div class="relative max-w-[900px] mx-auto" style="perspective: 1200px;">
            <BrowserMockup :src="`${D}/products.png`" url="dukkan.haritna.net/shop/products" alt="Browse Products" />
            <div class="absolute -right-2 -bottom-6 z-10 hidden sm:block">
              <PhoneMockup :src="`${M}/storefront.png`" alt="Mobile storefront" size="sm" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <div class="mx-auto max-w-[1100px] px-5">
      <ScrollReveal>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-10 border-y border-border">
          <div v-for="s in [{v:String( numbered.length ),l:'wt.stats.flows'},{v:'6',l:'wt.stats.types'},{v:'EN/AR',l:'wt.stats.bilingual'},{v:'4',l:'wt.stats.platforms'}]" :key="s.l" class="text-center">
            <div class="text-2xl sm:text-3xl font-black bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent">{{ s.v }}</div>
            <div class="text-xs text-muted-foreground mt-1">{{ t( s.l ) }}</div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <section class="py-16">
      <div class="mx-auto max-w-[1100px] px-5">
        <ScrollReveal>
          <div class="text-center mb-10">
            <span class="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-3">{{ t( 'wt.why.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{{ t( 'wt.why.title' ) }}</h2>
            <p class="text-muted-foreground max-w-lg mx-auto">{{ t( 'wt.why.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="rounded-3xl border border-accent/40 bg-accent/5 p-6 sm:p-10 mb-10 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 items-center">
            <h3 class="text-3xl sm:text-4xl font-black tracking-tight text-accent">{{ t( 'wt.why.free.title' ) }}</h3>
            <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[60ch]">{{ t( 'wt.why.free.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          <ScrollReveal v-for="w in why" :key="w">
            <div class="h-full border-t-2 border-border pt-5">
              <h3 class="font-bold mb-2">{{ t( `wt.why.${w}.title` ) }}</h3>
              <p class="text-[0.95rem] text-muted-foreground leading-relaxed">{{ t( `wt.why.${w}.desc` ) }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <DukkanExplainer @start="goTo( 'register' )" />

    <section class="py-16 border-b border-border">
      <div class="mx-auto max-w-[1100px] px-5">
        <ScrollReveal>
          <div class="text-center mb-10">
            <span class="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-3">{{ t( 'stories.index.title' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{{ t( 'wt.stories_cta.title' ) }}</h2>
            <p class="text-muted-foreground max-w-lg mx-auto">{{ t( 'wt.stories_cta.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <RouterLink
              v-for="prof in professionList"
              :key="prof.slug"
              :to="`/dukkan/stories/${prof.slug}`"
              class="block bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
            >
              <div class="text-4xl mb-3">{{ prof.emoji }}</div>
              <h3 class="font-bold mb-1">{{ t( prof.nameKey ) }}</h3>
              <p class="text-xs text-muted-foreground">{{ t( prof.subtitleKey ) }}</p>
            </RouterLink>
          </div>
          <div class="text-center">
            <RouterLink to="/dukkan/stories" class="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline">
              {{ t( 'wt.stories_cta.all' ) }} →
            </RouterLink>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <main class="mx-auto max-w-[1100px] px-5">

      <template v-for="c in chapters" :key="c.id">
        <ScrollReveal>
          <div class="pt-20 pb-2 border-b border-border">
            <h2 class="text-3xl sm:text-4xl font-black tracking-tight">{{ t( `wt.chapters.${c.id}.title` ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-[65ch] pb-6">{{ t( `wt.chapters.${c.id}.desc` ) }}</p>
          </div>
        </ScrollReveal>

        <section v-for="f in c.flows" :id="f.id" :key="f.id" class="scroll-mt-16 md:scroll-mt-32 py-20 border-b border-border">
          <ScrollReveal>
            <div class="mb-12">
              <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">{{ flowNumber( f.id ) }}</div>
              <span class="block text-sm font-semibold text-accent mb-1">{{ t( k( f.id, 'label' ) ) }}</span>
              <h3 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( k( f.id, 'title' ) ) }}</h3>
              <p class="text-muted-foreground mt-2 max-w-lg">{{ t( k( f.id, 'desc' ) ) }}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal v-if="f.scenario">
            <div class="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 mb-12">
              <div class="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-xl shrink-0">{{ f.scenario }}</div>
              <p class="text-sm leading-relaxed"><strong class="text-foreground">{{ t( 'wt.scenario' ) }}:</strong> {{ t( k( f.id, 'scenario' ) ) }}</p>
            </div>
          </ScrollReveal>

          <template v-for="( b, bi ) in f.blocks" :key="bi">
            <div v-if="b.kind === 'split'" class="grid gap-12 items-center mb-16 last:mb-0" :class="splitCols( b.shot, bi )">
              <ScrollReveal :direction="bi % 2 ? 'right' : 'left'" :class="bi % 2 && b.shot ? 'md:order-2' : ''">
                <div :class="b.shot ? '' : 'max-w-[65ch] border-s-2 border-accent ps-5'">
                  <template v-if="b.key">
                    <span v-if="te( k( f.id, b.key, 'tag' ) )" class="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-3">{{ t( k( f.id, b.key, 'tag' ) ) }}</span>
                    <h4 class="text-xl font-bold mb-3">{{ t( k( f.id, b.key, 'title' ) ) }}</h4>
                    <p class="text-[0.95rem] text-muted-foreground leading-relaxed mb-4">{{ t( k( f.id, b.key, 'desc' ) ) }}</p>
                  </template>
                  <ul class="space-y-2">
                    <li v-for="bl in bullets( k( f.id, b.key ) )" :key="bl" class="flex items-start gap-2.5 text-sm">
                      <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                      {{ t( bl ) }}
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal v-if="b.shot" :direction="bi % 2 ? 'left' : 'right'" :class="bi % 2 ? 'md:order-1' : ''">
                <div class="flex items-center gap-4 justify-center">
                  <div v-if="b.shot.og" class="w-full rounded-3xl border border-border bg-muted/60 p-4 sm:p-6 space-y-5">
                    <figure v-for="o in b.shot.og" :key="o" class="ms-auto w-[88%] rounded-2xl rounded-se-sm bg-card border border-border p-1.5 shadow-md">
                      <img :src="`/walkthrough/og/${o}-${locale === 'ar' ? 'ar' : 'en'}.png`" :alt="t( k( f.id, b.key, 'title' ) )" width="1200" height="630" loading="lazy" class="block w-full h-auto rounded-xl" />
                      <figcaption class="flex items-center justify-between gap-3 px-2 pt-2 pb-0.5 text-xs text-muted-foreground">
                        <span dir="ltr" class="truncate text-accent">dukkan.haritna.net</span>
                        <span dir="ltr" class="shrink-0">9:41 ✓✓</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div v-if="b.shot.d" :class="b.shot.m ? 'max-w-[340px]' : 'w-full'">
                    <BrowserMockup :src="`${D}/${b.shot.d}.png`" :url="b.shot.url" :alt="t( k( f.id, b.key, 'title' ) )" />
                  </div>
                  <div v-for="( m, mi ) in b.shot.m" :key="m" :class="b.shot.d && mi === 0 ? 'hidden sm:block' : ''">
                    <PhoneMockup :src="`${M}/${m}.png`" :alt="t( k( f.id, 'title' ) )" :size="b.shot.d || b.shot.m!.length > 1 ? 'sm' : undefined" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div v-else-if="b.kind === 'cards'" class="grid sm:grid-cols-2 gap-4 mb-14 last:mb-0" :class="b.cols === 3 ? 'lg:grid-cols-3' : ''">
              <ScrollReveal v-for="( key, i ) in b.keys" :key="key" :delay="i * 80">
                <div class="h-full bg-card border border-border rounded-2xl p-6">
                  <span v-if="te( k( f.id, key, 'tag' ) )" class="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-3">{{ t( k( f.id, key, 'tag' ) ) }}</span>
                  <h4 class="font-bold mb-2">{{ t( k( f.id, key, 'title' ) ) }}</h4>
                  <p class="text-[0.95rem] text-muted-foreground leading-relaxed">{{ t( k( f.id, key, 'desc' ) ) }}</p>
                  <ul v-if="bullets( k( f.id, key ) ).length" class="space-y-2 mt-4">
                    <li v-for="bl in bullets( k( f.id, key ) )" :key="bl" class="flex items-start gap-2.5 text-sm">
                      <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                      {{ t( bl ) }}
                    </li>
                  </ul>
                  <div v-if="b.shots?.[key]" class="flex justify-center mt-4">
                    <PhoneMockup :src="`${M}/${b.shots[key]}.png`" :alt="t( k( f.id, key, 'title' ) )" size="sm" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal v-else-if="b.kind === 'tiles'" class="mb-14 last:mb-0">
              <div v-if="b.steps" class="grid grid-cols-2 gap-3" :class="b.keys.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'">
                <div v-for="( key, i ) in b.keys" :key="key" class="bg-card border border-border rounded-xl p-5 text-center">
                  <div class="w-9 h-9 rounded-lg bg-accent/10 text-accent font-black text-sm inline-flex items-center justify-center mb-3">{{ i + 1 }}</div>
                  <h4 class="text-sm font-bold mb-1">{{ t( k( f.id, key, 'title' ) ) }}</h4>
                  <p class="text-sm text-muted-foreground leading-relaxed">{{ t( k( f.id, key, 'desc' ) ) }}</p>
                </div>
              </div>
              <div v-else class="grid sm:grid-cols-3 gap-x-8 gap-y-6">
                <div v-for="key in b.keys" :key="key" class="border-s-2 border-accent ps-4">
                  <h4 class="font-bold mb-1">{{ t( k( f.id, key, 'title' ) ) }}</h4>
                  <p class="text-sm text-muted-foreground leading-relaxed">{{ t( k( f.id, key, 'desc' ) ) }}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal v-else-if="b.kind === 'gallery'" class="mb-16 last:mb-0">
              <div class="max-w-[65ch] mb-8">
                <h4 class="text-xl font-bold mb-3">{{ t( k( f.id, b.key, 'title' ) ) }}</h4>
                <p class="text-[0.95rem] text-muted-foreground leading-relaxed">{{ t( k( f.id, b.key, 'desc' ) ) }}</p>
              </div>
              <div class="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                <figure v-for="( o, id ) in b.og" :key="id">
                  <img :src="`/walkthrough/og/${o}-${locale === 'ar' ? 'ar' : 'en'}.png`" :alt="t( k( f.id, b.key, id ) )" width="1200" height="630" loading="lazy" class="block w-full h-auto rounded-2xl border border-border shadow-md" />
                  <figcaption class="mt-3 text-sm font-semibold">{{ t( k( f.id, b.key, id ) ) }}</figcaption>
                </figure>
              </div>
            </ScrollReveal>

            <ScrollReveal v-else class="mb-14 last:mb-0">
              <div class="flex items-center gap-4 justify-center">
                <BrowserMockup v-if="b.shot.d" :src="`${D}/${b.shot.d}.png`" :url="b.shot.url" :alt="t( k( f.id, 'title' ) )" />
                <PhoneMockup v-for="m in b.shot.m" :key="m" :src="`${M}/${m}.png`" :alt="t( k( f.id, 'title' ) )" />
              </div>
            </ScrollReveal>
          </template>
        </section>
      </template>

      <section class="py-20">
        <ScrollReveal>
          <div class="text-center mb-10">
            <span class="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-3">{{ t( 'wt.tech.label' ) }}</span>
            <h2 class="text-2xl font-bold">{{ t( 'wt.tech.title' ) }}</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="grid sm:grid-cols-3 gap-4">
            <div v-for="item in ['dark','rtl','platforms']" :key="item" class="bg-card border border-border rounded-2xl p-6">
              <h4 class="font-bold mb-2">{{ t( `wt.tech.${item}.title` ) }}</h4>
              <p class="text-[0.95rem] text-muted-foreground leading-relaxed">{{ t( `wt.tech.${item}.desc` ) }}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>

    <footer class="py-12 text-center border-t border-border">
      <p class="text-lg font-black" dir="ltr"><span class="text-accent">Dukkan</span><span class="text-muted-foreground ms-1">by Haritna Technologies</span></p>
      <p class="text-sm text-muted-foreground mt-1">{{ t( 'wt.footer' ) }}</p>
    </footer>
  </div>
</template>
