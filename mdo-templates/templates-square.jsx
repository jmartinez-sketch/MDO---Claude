// templates-square.jsx — 3 square (1:1) IG post templates for MDO Consultores.
// Artboard size: 540 × 540 (real IG = 1080×1080, same ratio).
//
// DEFAULTS use [LITERAL_PLACEHOLDERS] (square brackets, uppercase) so Claude
// Code can find/replace in the exported HTML. The canvas preview overrides
// these via the EXAMPLES object below to show realistic content.

// ─────────────────────────────────────────────────────────────────────
// 01 — Vencimiento impositivo
// Slots: COPETE, DIA, MES, ANIO, IMPUESTO, DESCRIPCION_VENC, HORARIO, CHIP_MES, HANDLE
// ─────────────────────────────────────────────────────────────────────
function SqVencimiento(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    dia: '[DIA]',
    mes: '[MES]',
    anio: '[ANIO]',
    impuesto: '[IMPUESTO]',
    descripcion: '[DESCRIPCION_VENC]',
    horario: '[HORARIO]',
    chip_mes: '[CHIP_MES]',
    handle: '[HANDLE]',
  }, props);

  return (
    <div className="tpl navy" style={{ padding: 44, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup mode="light" size={26} />
        <div className="chip">{p.chip_mes}</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 18 }}>
        <div className="eyebrow" style={{ marginBottom: 22 }}>{p.copete}</div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 14 }}>
          <div className="number-xl" style={{ fontSize: 180, color: 'var(--paper)' }}>{p.dia}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 14, letterSpacing: '0.22em',
              color: 'var(--blue-lt)', fontWeight: 500 }}>{p.mes}</div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.18em',
              color: 'rgba(247,249,252,0.55)' }}>{p.anio}</div>
          </div>
        </div>

        <div className="hair" style={{ margin: '6px 0 18px', background: 'rgba(247,249,252,0.30)' }}></div>

        <div className="display" style={{ fontSize: 56, color: 'var(--paper)', fontWeight: 600, marginBottom: 10 }}>
          {p.impuesto}
        </div>
        <div className="lede" style={{ fontSize: 16, maxWidth: '85%' }}>{p.descripcion}</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
          <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%',
            background: 'var(--blue-lt)' }}></span>
          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11.5, letterSpacing: '0.1em',
            color: 'var(--blue-lt)' }}>{p.horario}</span>
        </div>
      </div>

      <div className="footer-row" style={{ color: 'rgba(247,249,252,0.55)' }}>
        <span>{p.handle}</span>
        <span>mdo-consultores.com.ar</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// 02 — Cita / Reflexión profesional
// Slots: COPETE, CITA, AUTOR, ROL_AUTOR, HANDLE
// ─────────────────────────────────────────────────────────────────────
function SqCita(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    cita: '[CITA]',
    autor: '[AUTOR]',
    rol_autor: '[ROL_AUTOR]',
    handle: '[HANDLE]',
  }, props);

  return (
    <div className="tpl" style={{ padding: 44, display: 'flex', flexDirection: 'column', background: 'var(--paper-warm)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Lockup size={26} />
        <div className="quote-mark" style={{ fontSize: 96, marginTop: -16, marginRight: -6, color: 'var(--blue)' }}>“</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 8 }}>
        <div className="eyebrow" style={{ marginBottom: 22 }}>{p.copete}</div>
        <div className="display-serif" style={{ fontSize: 38, color: 'var(--navy-ink)', lineHeight: 1.12 }}>
          <em>{p.cita}</em>
        </div>
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--ink)' }}></span>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.04em',
            color: 'var(--ink)' }}>
            {p.autor}
            <div style={{ fontWeight: 400, color: 'var(--ink-55)', fontSize: 11.5, marginTop: 2 }}>{p.rol_autor}</div>
          </div>
        </div>
      </div>

      <div className="footer-row">
        <span>{p.handle}</span>
        <span>Reflexión · 2026</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// 03 — Número clave / stat destacado
// Slots: COPETE, NUMERO, UNIDAD, DESCRIPCION, PIE, HANDLE
// ─────────────────────────────────────────────────────────────────────
function SqNumero(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    numero: '[NUMERO]',
    unidad: '[UNIDAD]',
    descripcion: '[DESCRIPCION]',
    pie: '[PIE]',
    handle: '[HANDLE]',
  }, props);

  return (
    <div className="tpl tint" style={{ padding: 44, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup size={26} />
        <div className="mono">EST. 1972</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{p.copete}</div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 22 }}>
          <div className="number-xl" style={{ fontSize: 200, color: 'var(--navy)' }}>{p.numero}</div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: 170,
            paddingBottom: 14 }}>
            <div className="display-serif" style={{ fontSize: 44, color: 'var(--navy)' }}>
              <em>{p.unidad}</em>
            </div>
          </div>
        </div>

        <div className="hair-navy" style={{ width: 64, marginBottom: 18 }}></div>

        <div className="lede" style={{ fontSize: 17, maxWidth: '90%', color: 'var(--ink-70)' }}>
          {p.descripcion}
        </div>
      </div>

      <div className="footer-row">
        <span>{p.handle}</span>
        <span>{p.pie}</span>
      </div>
    </div>
  );
}

// Example data — used by the design canvas to preview realistic content.
const EXAMPLES_SQUARE = {
  SqVencimiento: {
    copete: 'Calendario AFIP · Vencimiento',
    dia: '21', mes: 'JUN', anio: '2026',
    impuesto: 'IVA',
    descripcion: 'Posición mensual · Período 05/2026',
    horario: 'Hasta las 23:59 h',
    chip_mes: 'Calendario · 06/26',
    handle: '@mdoconsultores',
  },
  SqCita: {
    copete: 'Pensamiento',
    cita: 'La planificación impositiva no es un costo, es la primera decisión estratégica del año.',
    autor: 'Estudio MDO',
    rol_autor: 'Consultores en gestión',
    handle: '@mdoconsultores',
  },
  SqNumero: {
    copete: 'En cifras · MDO Consultores',
    numero: '+50', unidad: 'años',
    descripcion: 'acompañando empresas argentinas en la gestión impositiva, contable y previsional.',
    pie: 'Desde 1972 · Buenos Aires',
    handle: '@mdoconsultores',
  },
};

Object.assign(window, { SqVencimiento, SqCita, SqNumero, EXAMPLES_SQUARE });
