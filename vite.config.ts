import { defineConfig, type Plugin } from 'vite'
import { resolve } from 'path'
import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import ar from './src/i18n/ar.ts'
import storiesAr from './src/dukkan/i18n/stories-ar.ts'
import { professionList } from './src/dukkan/data/index.ts'

const SITE = 'https://haritna.net'

type RouteMeta = {
  path: string
  title: string
  description: string
  image: 'haritna' | 'dukkan'
  imageAlt: string
}

/** Resolve a dotted i18n key ("stories.barber.name") against a messages object. */
function message( messages: object, key: string ): string {
  const value = key.split( '.' ).reduce<unknown>( ( node, part ) => ( node as Record<string, unknown> | undefined )?.[part], messages )
  if ( typeof value !== 'string' ) throw new Error( `og meta: missing i18n key ${key}` )
  return value
}

function escapeAttr( text: string ): string {
  return text.replace( /&/g, '&amp;' ).replace( /"/g, '&quot;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' )
}

function routes(): RouteMeta[] {
  const list: RouteMeta[] = [
    {
      path: '/',
      title: `حارتنا تكنولوجي | دُكّان: ${ar.hero.slogan}`,
      description: ar.hero.description,
      image: 'haritna',
      imageAlt: 'حارتنا تكنولوجي',
    },
    {
      path: '/guide',
      title: `${ar.guide.title} | حارتنا`,
      description: ar.guide.subtitle,
      image: 'dukkan',
      imageAlt: 'دُكّان',
    },
    {
      path: '/privacy',
      title: `${ar.legal.nav.privacy} | حارتنا`,
      description: `${ar.legal.nav.privacy} لمنصة دُكّان من حارتنا تكنولوجي.`,
      image: 'haritna',
      imageAlt: 'حارتنا تكنولوجي',
    },
    {
      path: '/terms',
      title: `${ar.legal.nav.terms} | حارتنا`,
      description: `${ar.legal.nav.terms} لاستخدام منصة دُكّان من حارتنا تكنولوجي.`,
      image: 'haritna',
      imageAlt: 'حارتنا تكنولوجي',
    },
    {
      path: '/data-deletion',
      title: `${ar.legal.nav.data_deletion} | حارتنا`,
      description: 'طريقة طلب حذف بياناتك من منصة دُكّان.',
      image: 'haritna',
      imageAlt: 'حارتنا تكنولوجي',
    },
    {
      path: '/company',
      title: `${ar.company.title} | حارتنا`,
      description: ar.company.subtitle,
      image: 'haritna',
      imageAlt: 'حارتنا تكنولوجي',
    },
    {
      path: '/dukkan',
      title: `دُكّان: ${ar.hero.slogan} | حارتنا`,
      description: ar.wt.hero.desc,
      image: 'dukkan',
      imageAlt: 'دُكّان',
    },
    {
      path: '/dukkan/stories',
      title: `${message( storiesAr, 'stories.index.title' )} | دُكّان`,
      description: message( storiesAr, 'stories.index.subtitle' ),
      image: 'dukkan',
      imageAlt: 'دُكّان',
    },
  ]
  for ( const profession of professionList ) {
    list.push( {
      path: `/dukkan/stories/${profession.slug}`,
      title: `${message( storiesAr, profession.nameKey )} | قصص دُكّان`,
      description: message( storiesAr, profession.subtitleKey ),
      image: 'dukkan',
      imageAlt: 'دُكّان',
    } )
  }
  return list
}

function metaBlock( route: RouteMeta ): string {
  const url = `${SITE}${route.path}`
  const image = `${SITE}/og/${route.image}.png`
  const title = escapeAttr( route.title )
  const description = escapeAttr( route.description )
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="حارتنا تكنولوجي" />`,
    `<meta property="og:locale" content="ar_EG" />`,
    `<meta property="og:locale:alternate" content="en_US" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr( route.imageAlt )}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join( '\n    ' )
}

/**
 * After the build, write one dist/<route>/index.html per public route with its own
 * title, description, canonical, Open Graph and Twitter tags. The host serves the
 * static file before the SPA fallback, so link previews get route-specific tags.
 */
function routeMeta(): Plugin {
  let outDir = 'dist'
  return {
    name: 'haritna-route-meta',
    apply: 'build',
    configResolved( config ) {
      outDir = resolve( config.root, config.build.outDir )
    },
    closeBundle() {
      const template = readFileSync( resolve( outDir, 'index.html' ), 'utf8' )
      const pattern = /<!-- meta:start -->[\s\S]*?<!-- meta:end -->/
      if ( !pattern.test( template ) ) throw new Error( 'og meta: markers missing in index.html' )
      for ( const route of routes() ) {
        const html = template.replace( pattern, metaBlock( route ) )
        const dir = resolve( outDir, `.${route.path}` )
        mkdirSync( dir, { recursive: true } )
        writeFileSync( resolve( dir, 'index.html' ), html )
      }
    },
  }
}

export default defineConfig({
  plugins: [vue(), tailwindcss(), routeMeta()],
  resolve: {
    alias: {
      '@': resolve( __dirname, 'src' ),
    },
  },
  server: {
    port: 5174,
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
