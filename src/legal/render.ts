const escape = ( text: string ) => text
  .replace( /&/g, '&amp;' )
  .replace( /</g, '&lt;' )
  .replace( />/g, '&gt;' )
  .replace( /"/g, '&quot;' )

const inline = ( text: string ) => escape( text ).replace( /\*\*(.+?)\*\*/g, '<strong>$1</strong>' )

const cells = ( row: string ) => row.trim().replace( /^\||\|$/g, '' ).split( '|' ).map( ( cell ) => inline( cell.trim() ) )

export function sliceSections( source: string, from: string, until?: string ): string {
  const lines = source.split( '\n' )
  const start = lines.findIndex( ( line ) => line.startsWith( from ) )
  const end = until ? lines.findIndex( ( line, i ) => i > start && line.startsWith( until ) ) : -1
  return lines.slice( start, end === -1 ? undefined : end ).join( '\n' )
}

export function renderVolume( source: string ): string {
  const lines = source.split( '\n' )
  const html: string[] = []
  let paragraph: string[] = []
  let list: { tag: 'ul' | 'ol', items: string[] } | null = null
  let table: string[] = []

  const flush = () => {
    if ( paragraph.length ) html.push( `<p>${paragraph.map( inline ).join( '<br>' )}</p>` )
    paragraph = []
    if ( list ) html.push( `<${list.tag}>${list.items.map( ( item ) => `<li>${inline( item )}</li>` ).join( '' )}</${list.tag}>` )
    list = null
    if ( table.length ) {
      const [ head, , ...body ] = table
      html.push(
        '<div class="legal-table"><table>'
        + `<thead><tr>${cells( head ).map( ( cell ) => `<th>${cell}</th>` ).join( '' )}</tr></thead>`
        + `<tbody>${body.map( ( row ) => `<tr>${cells( row ).map( ( cell ) => `<td>${cell}</td>` ).join( '' )}</tr>` ).join( '' )}</tbody>`
        + '</table></div>',
      )
    }
    table = []
  }

  for ( const raw of lines ) {
    const line = raw.trimEnd()
    if ( line.startsWith( '|' ) ) {
      if ( !table.length ) flush()
      table.push( line )
      continue
    }
    if ( table.length ) flush()

    const heading = line.match( /^(#{1,3}) (.+)$/ )
    const bullet = line.match( /^- (.+)$/ )
    const numbered = line.match( /^\d+\.\s+(.+)$/ )

    if ( heading ) {
      flush()
      const level = heading[ 1 ].length
      const tag = level === 1 ? 'h2 class="legal-part"' : level === 2 ? 'h2' : 'h3'
      html.push( `<${tag}>${inline( heading[ 2 ] )}</${tag.split( ' ' )[ 0 ]}>` )
    } else if ( line === '---' ) {
      flush()
      html.push( '<hr>' )
    } else if ( bullet || numbered ) {
      const tag = bullet ? 'ul' : 'ol'
      if ( paragraph.length || ( list && list.tag !== tag ) ) flush()
      if ( !list ) list = { tag, items: [] }
      list.items.push( ( bullet ?? numbered )![ 1 ] )
    } else if ( line === '' ) {
      flush()
    } else {
      if ( list ) flush()
      paragraph.push( line )
    }
  }
  flush()

  return html.join( '\n' )
}
