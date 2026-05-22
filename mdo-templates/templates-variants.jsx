// templates-variants.jsx — alternate color modes / compositions of the core 13.
// Each variant is its own component so it can be tuned independently. All
// follow the same [PLACEHOLDER] convention.

// ─────────────────────────────────────────────────────────────────────
// sq-02b — SqCitaNavy
// Misma estructura que SqCita pero invertida: navy bg, serif claro
// ─────────────────────────────────────────────────────────────────────
function SqCitaNavy(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    cita: '[CITA]',
    autor: '[AUTOR]',
    rol_autor: '[ROL_AUTOR]',
    handle: '[HANDLE]',
  }, props);

  return (
    <div className="tpl navy" style={{ padding: 44, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Lockup mode="light" size={26} />
        <div className="quote-mark" style={{ fontSize: 96, marginTop: -16, marginRight: -6,
          color: 'var(--blue-lt)' }}>“</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 8 }}>
        <div className="eyebrow" style={{ marginBottom: 22, color: 'var(--blue-lt)' }}>{p.copete}</div>
        <div className="display-serif" style={{ fontSize: 38, color: 'var(--paper)', lineHeight: 1.12 }}>
          <em>{p.cita}</em>
        </div>
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--paper)' }}></span>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12.5, fontWeight: 600,
            letterSpacing: '0.04em', color: 'var(--paper)' }}>
            {p.autor}
            <div style={{ fontWeight: 400, color: 'rgba(247,249,252,0.65)', fontSize: 11.5, marginTop: 2 }}>{p.rol_autor}</div>
          </div>
        </div>
      </div>

      <div className="footer-row" style={{ color: 'rgba(247,249,252,0.55)' }}>
        <span>{p.handle}</span>
        <span>Reflexión · 2026</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// sq-03b — SqNumeroSerif
// Mismo data shape que SqNumero pero el número grande es serif italic
// ─────────────────────────────────────────────────────────────────────
function SqNumeroSerif(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    numero: '[NUMERO]',
    unidad: '[UNIDAD]',
    descripcion: '[DESCRIPCION]',
    pie: '[PIE]',
    handle: '[HANDLE]',
  }, props);

  return (
    <div className="tpl pale" style={{ padding: 44, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup size={26} />
        <div className="mono">EST. 1972</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>{p.copete}</div>

        <div className="display-serif" style={{ fontSize: 220, color: 'var(--navy)', lineHeight: 0.85,
          letterSpacing: '-0.02em' }}>
          <em>{p.numero}</em>
        </div>

        <div style={{ marginTop: 18, fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 500,
          color: 'var(--navy)', letterSpacing: '-0.01em' }}>
          {p.unidad}
        </div>

        <div className="hair-navy" style={{ width: 64, marginTop: 22, marginBottom: 16 }}></div>

        <div className="lede" style={{ fontSize: 15, maxWidth: '90%' }}>{p.descripcion}</div>
      </div>

      <div className="footer-row">
        <span>{p.handle}</span>
        <span>{p.pie}</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// sq-12b — SqNoticiaBreaking
// Noticia square en navy con tira "ÚLTIMO MOMENTO" arriba
// ─────────────────────────────────────────────────────────────────────
function SqNoticiaBreaking(props) {
  const p = Object.assign({
    badge: '[BADGE]',
    categoria: '[CATEGORIA]',
    titular: '[TITULAR]',
    bajada: '[BAJADA]',
    fuente: '[FUENTE]',
    fecha: '[FECHA]',
    handle: '[HANDLE]',
  }, props);

  return (
    <div className="tpl navy" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
      {/* Top urgency strip */}
      <div style={{ background: 'var(--blue-lt)', color: 'var(--navy-deep)',
        padding: '12px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.24em',
          fontWeight: 600, textTransform: 'uppercase' }}>{p.badge}</span>
        <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.12em',
          fontWeight: 500 }}>{p.fecha}</span>
      </div>

      <div style={{ padding: '32px 40px 40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup mode="light" size={24} />
          <span className="eyebrow" style={{ color: 'var(--blue-lt)' }}>{p.categoria}</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
          marginTop: 8 }}>
          <div className="display" style={{ fontSize: 36, fontWeight: 700, color: 'var(--paper)',
            letterSpacing: '-0.018em', lineHeight: 1.08 }}>
            {p.titular}
          </div>
          <div className="lede" style={{ marginTop: 16, fontSize: 14.5, maxWidth: '95%' }}>
            {p.bajada}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 18,
          borderTop: '1px solid rgba(247,249,252,0.20)' }}>
          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '0.18em',
            color: 'rgba(247,249,252,0.55)', textTransform: 'uppercase' }}>Fuente</span>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600,
            color: 'var(--paper)' }}>{p.fuente}</span>
          <span style={{ flex: 1 }}></span>
          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.08em',
            color: 'rgba(247,249,252,0.55)' }}>{p.handle}</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// po-04b — PoServicioNavy
// Guía/Servicio en navy
// ─────────────────────────────────────────────────────────────────────
function PoServicioNavy(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    titulo: '[TITULO]',
    bajada: '[BAJADA]',
    bullet_1: '[BULLET_1]',
    bullet_2: '[BULLET_2]',
    bullet_3: '[BULLET_3]',
    bullet_4: '[BULLET_4]',
    cta: '[CTA]',
    handle: '[HANDLE]',
  }, props);

  const bullets = [p.bullet_1, p.bullet_2, p.bullet_3, p.bullet_4].filter(Boolean);

  return (
    <div className="tpl navy" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup mode="light" size={26} />
        <div className="mono" style={{ color: 'rgba(247,249,252,0.55)' }}>{p.copete}</div>
      </div>

      <div style={{ marginTop: 30 }}>
        <div className="display" style={{ fontSize: 52, fontWeight: 600, color: 'var(--paper)',
          whiteSpace: 'pre-line' }}>
          {p.titulo}
        </div>
        <div className="lede" style={{ marginTop: 14, fontSize: 16, maxWidth: '88%' }}>{p.bajada}</div>
      </div>

      <div className="hair" style={{ width: 56, marginTop: 26, marginBottom: 18,
        background: 'var(--paper)' }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {bullets.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--blue-lt)',
              minWidth: 22, fontWeight: 500, letterSpacing: '0.04em' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15.5,
              color: 'var(--paper)', lineHeight: 1.4 }}>{b}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, padding: '14px 18px', background: 'var(--paper)', color: 'var(--navy)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 2 }}>
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600,
          letterSpacing: '0.02em' }}>{p.cta}</span>
        <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, fontStyle: 'italic' }}>→</span>
      </div>

      <div className="footer-row" style={{ marginTop: 14, color: 'rgba(247,249,252,0.55)' }}>
        <span>{p.handle}</span>
        <span>Buenos Aires</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// po-05b — PoAnuncioLight
// Anuncio institucional en papel (light)
// ─────────────────────────────────────────────────────────────────────
function PoAnuncioLight(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    titulo: '[TITULO]',
    subtitulo: '[SUBTITULO]',
    tema: '[TEMA]',
    bloque_1: '[BLOQUE_1]',
    bloque_2: '[BLOQUE_2]',
    bloque_3: '[BLOQUE_3]',
    fecha_hora: '[FECHA_HORA]',
    handle: '[HANDLE]',
  }, props);

  const bloques = [p.bloque_1, p.bloque_2, p.bloque_3].filter(Boolean);

  return (
    <div className="tpl" style={{ padding: 40, display: 'flex', flexDirection: 'column',
      background: 'var(--paper-warm)', position: 'relative' }}>
      <IsoWatermark mode="dark" size={360} opacity={0.05}
        style={{ position: 'absolute', right: -100, bottom: -60 }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <Lockup size={26} />
        <div className="chip">{p.copete}</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        position: 'relative' }}>
        <div className="eyebrow" style={{ marginBottom: 22 }}>Anuncio</div>

        <div className="display-serif" style={{ fontSize: 68, color: 'var(--navy-ink)', lineHeight: 0.98 }}>
          <em>{p.titulo}</em>
        </div>
        <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 14, letterSpacing: '0.18em',
          color: 'var(--ink-55)', marginTop: 10, textTransform: 'uppercase' }}>
          {p.subtitulo}
        </div>

        <div className="hair-navy" style={{ marginTop: 26, marginBottom: 20, width: '60%' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', rowGap: 12, columnGap: 16,
          fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: 'var(--ink)' }}>
          <div style={{ color: 'var(--ink-55)', fontFamily: 'Geist Mono, monospace', fontSize: 11,
            letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tema</div>
          <div>{p.tema}</div>
          <div style={{ color: 'var(--ink-55)', fontFamily: 'Geist Mono, monospace', fontSize: 11,
            letterSpacing: '0.1em', textTransform: 'uppercase' }}>Bloques</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {bloques.map((b, i) => (
              <span key={i} className="chip" style={{ fontSize: 9.5 }}>{b}</span>
            ))}
          </div>
          <div style={{ color: 'var(--ink-55)', fontFamily: 'Geist Mono, monospace', fontSize: 11,
            letterSpacing: '0.1em', textTransform: 'uppercase' }}>Cuándo</div>
          <div>{p.fecha_hora}</div>
        </div>
      </div>

      <div className="footer-row" style={{ position: 'relative' }}>
        <span>{p.handle}</span>
        <span>mdo-consultores.com.ar</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// po-13b — PoNoticiaNavy
// Noticia portrait en navy con take callout invertido (papel sobre navy)
// ─────────────────────────────────────────────────────────────────────
function PoNoticiaNavy(props) {
  const p = Object.assign({
    categoria: '[CATEGORIA]',
    titular: '[TITULAR]',
    bajada: '[BAJADA]',
    fuente: '[FUENTE]',
    fecha: '[FECHA]',
    que_saber_label: '[QUE_SABER_LABEL]',
    que_saber: '[QUE_SABER]',
    handle: '[HANDLE]',
  }, props);

  return (
    <div className="tpl navy" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup mode="light" size={26} />
        <div className="chip">Noticia · MDO</div>
      </div>

      <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--blue-lt)' }}></span>
        <span className="eyebrow" style={{ color: 'var(--blue-lt)' }}>{p.categoria}</span>
      </div>

      <div className="display" style={{ marginTop: 14, fontSize: 38, fontWeight: 700, color: 'var(--paper)',
        letterSpacing: '-0.02em', lineHeight: 1.08 }}>
        {p.titular}
      </div>

      <div className="lede" style={{ marginTop: 18, fontSize: 15.5, maxWidth: '96%' }}>
        {p.bajada}
      </div>

      <div style={{ flex: 1 }}></div>

      {/* Take callout — paper bg over navy (inverted) */}
      <div style={{ marginTop: 22, marginBottom: 18, padding: '18px 22px',
        background: 'var(--paper)', color: 'var(--navy-ink)', borderRadius: 2 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: 22, color: 'var(--blue-mid)', fontStyle: 'italic',
            fontFamily: 'Instrument Serif, serif' }}>*</span>
          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--blue-mid)' }}>{p.que_saber_label}</span>
        </div>
        <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 22,
          lineHeight: 1.22, color: 'var(--navy-ink)' }}>
          {p.que_saber}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 14,
        borderTop: '1px solid rgba(247,249,252,0.20)' }}>
        <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '0.18em',
          color: 'rgba(247,249,252,0.55)', textTransform: 'uppercase' }}>Fuente</span>
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600,
          color: 'var(--paper)' }}>{p.fuente}</span>
        <span style={{ flex: 1 }}></span>
        <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.08em',
          color: 'rgba(247,249,252,0.55)' }}>{p.fecha}</span>
      </div>

      <div className="footer-row" style={{ marginTop: 12, color: 'rgba(247,249,252,0.55)' }}>
        <span>{p.handle}</span>
        <span>mdo-consultores.com.ar</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// st-08b — StCitaNavy
// Cita story en navy
// ─────────────────────────────────────────────────────────────────────
function StCitaNavy(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    cita: '[CITA]',
    autor: '[AUTOR]',
    rol_autor: '[ROL_AUTOR]',
    handle: '[HANDLE]',
  }, props);

  return (
    <div className="tpl navy" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup mode="light" size={24} />
        <div className="mono" style={{ color: 'rgba(247,249,252,0.55)' }}>06 · 2026</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
        <div className="quote-mark" style={{ fontSize: 200, color: 'rgba(126,179,247,0.20)',
          position: 'absolute', top: -50, left: -16, zIndex: 0 }}>“</div>

        <div className="eyebrow" style={{ marginBottom: 30, position: 'relative', color: 'var(--blue-lt)' }}>
          {p.copete}
        </div>

        <div className="display-serif" style={{ fontSize: 52, color: 'var(--paper)',
          position: 'relative', lineHeight: 1.05 }}>
          <em>{p.cita}</em>
        </div>

        <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <span style={{ display: 'inline-block', width: 36, height: 1, background: 'var(--paper)' }}></span>
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 600,
              color: 'var(--paper)' }}>{p.autor}</div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12,
              color: 'rgba(247,249,252,0.65)', marginTop: 2 }}>{p.rol_autor}</div>
          </div>
        </div>
      </div>

      <div className="footer-row" style={{ color: 'rgba(247,249,252,0.55)' }}>
        <span>{p.handle}</span>
        <span>Reflexión · 2026</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// st-09b — StCTANavy
// CTA story en navy con bloque de canales invertido
// ─────────────────────────────────────────────────────────────────────
function StCTANavy(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    titular_1: '[TITULAR_1]',
    titular_2: '[TITULAR_2]',
    titular_3: '[TITULAR_3]',
    bajada: '[BAJADA]',
    canal_1_label: '[CANAL_1_LABEL]', canal_1_valor: '[CANAL_1_VALOR]',
    canal_2_label: '[CANAL_2_LABEL]', canal_2_valor: '[CANAL_2_VALOR]',
    canal_3_label: '[CANAL_3_LABEL]', canal_3_valor: '[CANAL_3_VALOR]',
    handle: '[HANDLE]',
  }, props);

  const channels = [
    { label: p.canal_1_label, value: p.canal_1_valor },
    { label: p.canal_2_label, value: p.canal_2_valor },
    { label: p.canal_3_label, value: p.canal_3_valor },
  ].filter(c => c.label && c.value);

  return (
    <div className="tpl navy" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup mode="light" size={24} />
        <div className="mono" style={{ color: 'rgba(247,249,252,0.55)' }}>Consultanos</div>
      </div>

      <div style={{ marginTop: 60 }}>
        <div className="eyebrow" style={{ marginBottom: 18, color: 'var(--blue-lt)' }}>{p.copete}</div>

        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 72, fontWeight: 700,
          color: 'var(--paper)', letterSpacing: '-0.025em', lineHeight: 0.95 }}>
          {p.titular_1}
        </div>
        <div className="display-serif" style={{ fontSize: 92, color: 'var(--blue-lt)', lineHeight: 0.9,
          marginTop: -4 }}>
          <em>{p.titular_2}</em>
        </div>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 72, fontWeight: 700,
          color: 'var(--paper)', letterSpacing: '-0.025em', lineHeight: 0.95, marginTop: -4 }}>
          {p.titular_3}
        </div>
      </div>

      <div className="lede" style={{ marginTop: 30, fontSize: 16, maxWidth: '88%' }}>
        {p.bajada}
      </div>

      <div style={{ flex: 1 }}></div>

      <div style={{ background: 'var(--paper)', color: 'var(--navy-ink)', padding: '24px 26px', borderRadius: 2 }}>
        {channels.map((c, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            padding: '10px 0', borderBottom: i < channels.length - 1 ? '1px solid var(--hair)' : 'none' }}>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10.5, letterSpacing: '0.16em',
              color: 'var(--blue-mid)', textTransform: 'uppercase' }}>{c.label}</span>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13.5, fontWeight: 500,
              color: 'var(--navy-ink)' }}>{c.value}</span>
          </div>
        ))}
      </div>

      <div className="footer-row" style={{ marginTop: 18, color: 'rgba(247,249,252,0.55)' }}>
        <span>{p.handle}</span>
        <span>Buenos Aires, Argentina</span>
      </div>
    </div>
  );
}

const EXAMPLES_VARIANTS = {
  SqCitaNavy: { ...EXAMPLES_SQUARE.SqCita },
  SqNumeroSerif: { ...EXAMPLES_SQUARE.SqNumero },
  SqNoticiaBreaking: {
    badge: 'Último momento',
    categoria: 'AFIP · Normativa',
    titular: 'Régimen simplificado para PyMEs: cambios desde julio.',
    bajada: 'Las pequeñas y medianas empresas tendrán nuevo umbral de facturación y categorías ampliadas.',
    fuente: 'Ámbito Financiero',
    fecha: '20 jun 2026',
    handle: '@mdoconsultores',
  },
  PoServicioNavy: { ...EXAMPLES_PORTRAIT.PoServicio },
  PoAnuncioLight: { ...EXAMPLES_PORTRAIT.PoAltaCliente },
  PoNoticiaNavy: { ...EXAMPLES_NEWS.PoNoticia },
  StCitaNavy: { ...EXAMPLES_STORY.StCita },
  StCTANavy: { ...EXAMPLES_STORY.StCTA },
};

Object.assign(window, {
  SqCitaNavy, SqNumeroSerif, SqNoticiaBreaking,
  PoServicioNavy, PoAnuncioLight, PoNoticiaNavy,
  StCitaNavy, StCTANavy,
  EXAMPLES_VARIANTS,
});
