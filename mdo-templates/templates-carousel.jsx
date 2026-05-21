// templates-carousel.jsx — 2 carousel sets.
// Set A — Calendario impositivo (3 square slides)
// Set B — Tips PyME (4 portrait slides)
// Defaults use [PLACEHOLDER] literals; EXAMPLES_CAROUSEL provides realistic data.

function CarChrome({ idx, total, label, mode = 'dark' }) {
  return (
    <div className="footer-row" style={{
      color: mode === 'light' ? 'rgba(247,249,252,0.55)' : 'var(--ink-55)',
      gridColumn: '1 / -1',
    }}>
      <span style={{ textTransform: 'uppercase' }}>{label}</span>
      <span className="pgindex">
        <span className="num" style={{ color: mode === 'light' ? 'var(--paper)' : 'var(--navy)' }}>
          {String(idx).padStart(2, '0')}
        </span>
        <span className="bar"></span>
        <span>{String(total).padStart(2, '0')}</span>
      </span>
    </div>
  );
}

// ───── Set A — Calendario impositivo ─────

function CalCover(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    mes: '[MES]',
    anio: '[ANIO]',
    bajada: '[BAJADA]',
    swipe: '[SWIPE_CTA]',
    chrome_label: '[CHROME_LABEL]',
  }, props);
  return (
    <div className="tpl navy" style={{ padding: 28, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <IsoWatermark mode="light" size={240} opacity={0.06}
        style={{ position: 'absolute', right: -80, bottom: -40 }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <Lockup mode="light" size={20} />
        <div className="mono" style={{ color: 'rgba(247,249,252,0.55)' }}>{p.copete}</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
        <div className="display-serif" style={{ fontSize: 72, color: 'var(--paper)', lineHeight: 0.92 }}>
          <em>{p.mes}</em>
        </div>
        <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 18, color: 'var(--blue-lt)',
          letterSpacing: '0.16em', marginTop: 4, fontWeight: 500 }}>{p.anio}</div>
        <div className="lede" style={{ marginTop: 18, fontSize: 12.5, maxWidth: '90%' }}>{p.bajada}</div>
        <div style={{ marginTop: 22, fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.16em',
          color: 'var(--blue-lt)', textTransform: 'uppercase' }}>
          {p.swipe}
        </div>
      </div>

      <CarChrome idx={1} total={3} label={p.chrome_label} mode="light" />
    </div>
  );
}

function CalQ1(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    fecha_1: '[FECHA_1]', impuesto_1: '[IMPUESTO_1]', periodo_1: '[PERIODO_1]',
    fecha_2: '[FECHA_2]', impuesto_2: '[IMPUESTO_2]', periodo_2: '[PERIODO_2]',
    fecha_3: '[FECHA_3]', impuesto_3: '[IMPUESTO_3]', periodo_3: '[PERIODO_3]',
    fecha_4: '[FECHA_4]', impuesto_4: '[IMPUESTO_4]', periodo_4: '[PERIODO_4]',
    fecha_5: '[FECHA_5]', impuesto_5: '[IMPUESTO_5]', periodo_5: '[PERIODO_5]',
    chrome_label: '[CHROME_LABEL]',
  }, props);
  const items = [1, 2, 3, 4, 5].map(i => ({
    date: p['fecha_' + i], tax: p['impuesto_' + i], period: p['periodo_' + i],
  })).filter(it => it.date && it.tax);
  return (
    <div className="tpl" style={{ padding: 28, display: 'flex', flexDirection: 'column',
      background: 'var(--paper-warm)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup size={20} />
        <div className="eyebrow">{p.copete}</div>
      </div>

      <div style={{ marginTop: 18, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="hair-navy" style={{ width: 36, marginBottom: 14 }}></div>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr',
            alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid var(--hair)' }}>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 28,
              color: 'var(--navy)', lineHeight: 0.8 }}>{it.date}</div>
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600,
                color: 'var(--navy-ink)' }}>{it.tax}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11,
                color: 'var(--ink-55)', marginTop: 1 }}>{it.period}</div>
            </div>
          </div>
        ))}
      </div>

      <CarChrome idx={2} total={3} label={p.chrome_label} />
    </div>
  );
}

function CalQ2(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    fecha_1: '[FECHA_1]', impuesto_1: '[IMPUESTO_1]', periodo_1: '[PERIODO_1]',
    fecha_2: '[FECHA_2]', impuesto_2: '[IMPUESTO_2]', periodo_2: '[PERIODO_2]',
    fecha_3: '[FECHA_3]', impuesto_3: '[IMPUESTO_3]', periodo_3: '[PERIODO_3]',
    fecha_4: '[FECHA_4]', impuesto_4: '[IMPUESTO_4]', periodo_4: '[PERIODO_4]',
    fecha_5: '[FECHA_5]', impuesto_5: '[IMPUESTO_5]', periodo_5: '[PERIODO_5]',
    cta: '[CTA]',
    chrome_label: '[CHROME_LABEL]',
  }, props);
  const items = [1, 2, 3, 4, 5].map(i => ({
    date: p['fecha_' + i], tax: p['impuesto_' + i], period: p['periodo_' + i],
  })).filter(it => it.date && it.tax);
  return (
    <div className="tpl" style={{ padding: 28, display: 'flex', flexDirection: 'column',
      background: 'var(--paper-warm)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup size={20} />
        <div className="eyebrow">{p.copete}</div>
      </div>

      <div style={{ marginTop: 18, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="hair-navy" style={{ width: 36, marginBottom: 14 }}></div>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr',
            alignItems: 'baseline', padding: '8px 0', borderBottom: '1px solid var(--hair)' }}>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 26,
              color: 'var(--navy)', lineHeight: 0.8 }}>{it.date}</div>
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12.5, fontWeight: 600,
                color: 'var(--navy-ink)' }}>{it.tax}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10.5,
                color: 'var(--ink-55)', marginTop: 1 }}>{it.period}</div>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 12, padding: '12px 14px', background: 'var(--navy)',
          color: 'var(--paper)', borderRadius: 2, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11.5, fontWeight: 500 }}>
            {p.cta}
          </span>
          <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 18 }}>→</span>
        </div>
      </div>

      <CarChrome idx={3} total={3} label={p.chrome_label} />
    </div>
  );
}

// ───── Set B — Tips PyME ─────

function TipCover(props) {
  const p = Object.assign({
    copete: '[COPETE]',
    titulo_sans: '[TITULO_SANS]',
    titulo_serif: '[TITULO_SERIF]',
    bajada: '[BAJADA]',
    swipe: '[SWIPE_CTA]',
    chrome_label: '[CHROME_LABEL]',
  }, props);
  return (
    <div className="tpl tint" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup size={20} />
        <div className="mono">{p.copete}</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>{p.copete}</div>
        <div className="display" style={{ fontSize: 36, fontWeight: 700, color: 'var(--navy-ink)',
          letterSpacing: '-0.025em', lineHeight: 1.0 }}>
          {p.titulo_sans}
        </div>
        <div className="display-serif" style={{ fontSize: 56, color: 'var(--blue-mid)', lineHeight: 0.9,
          marginTop: 4 }}>
          <em>{p.titulo_serif}</em>
        </div>
        <div className="lede" style={{ marginTop: 22, fontSize: 13.5, maxWidth: '90%' }}>{p.bajada}</div>
        <div style={{ marginTop: 28, fontFamily: 'Geist Mono, monospace', fontSize: 10.5,
          letterSpacing: '0.16em', color: 'var(--blue-mid)', textTransform: 'uppercase' }}>{p.swipe}</div>
      </div>

      <CarChrome idx={1} total={4} label={p.chrome_label} />
    </div>
  );
}

function TipSlide({ idx, total = 4, tip_num, titular, cuerpo, takeaway, chrome_label, mode = 'paper' }) {
  const isNavy = mode === 'navy';
  return (
    <div className={`tpl ${isNavy ? 'navy' : ''}`} style={{ padding: 28, display: 'flex',
      flexDirection: 'column', background: isNavy ? 'var(--navy)' : 'var(--paper-warm)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Lockup mode={isNavy ? 'light' : 'dark'} size={20} />
        <div className="mono" style={{ color: isNavy ? 'rgba(247,249,252,0.55)' : 'var(--ink-55)' }}>
          Tip · {String(tip_num).padStart(2, '0')}
        </div>
      </div>

      <div style={{ marginTop: 16, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
          <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 96,
            color: isNavy ? 'var(--blue-lt)' : 'var(--blue-mid)', lineHeight: 0.75 }}>
            {tip_num}
          </div>
          <div style={{ width: 1, alignSelf: 'stretch',
            background: isNavy ? 'rgba(247,249,252,0.25)' : 'var(--hair-2)', marginTop: 10, marginBottom: 10 }}></div>
          <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 9.5, letterSpacing: '0.18em',
            color: isNavy ? 'var(--blue-lt)' : 'var(--blue-mid)', textTransform: 'uppercase',
            paddingTop: 14 }}>
            {`Tip ${tip_num} de ${total - 1}`}
          </div>
        </div>

        <div className="display" style={{ fontSize: 22, fontWeight: 700,
          color: isNavy ? 'var(--paper)' : 'var(--navy-ink)', letterSpacing: '-0.015em',
          lineHeight: 1.08, marginBottom: 12 }}>
          {titular}
        </div>

        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12.5, lineHeight: 1.5,
          color: isNavy ? 'rgba(247,249,252,0.78)' : 'var(--ink-70)' }}>
          {cuerpo}
        </div>

        {takeaway && (
          <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span className="asterisk" style={{ fontSize: 32,
              color: isNavy ? 'var(--blue-lt)' : 'var(--blue-mid)' }}>*</span>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 18,
              lineHeight: 1.2, color: isNavy ? 'var(--paper)' : 'var(--navy-ink)' }}>
              {takeaway}
            </div>
          </div>
        )}
      </div>

      <CarChrome idx={idx} total={total} label={chrome_label} mode={isNavy ? 'light' : 'dark'} />
    </div>
  );
}

function TipSlide2(props) {
  return <TipSlide
    idx={2} tip_num={1}
    titular={props.titular || '[TITULAR]'}
    cuerpo={props.cuerpo || '[CUERPO]'}
    takeaway={props.takeaway || '[TAKEAWAY]'}
    chrome_label={props.chrome_label || '[CHROME_LABEL]'}
    mode={props.mode || 'paper'}
  />;
}
function TipSlide3(props) {
  return <TipSlide
    idx={3} tip_num={2}
    titular={props.titular || '[TITULAR]'}
    cuerpo={props.cuerpo || '[CUERPO]'}
    takeaway={props.takeaway || '[TAKEAWAY]'}
    chrome_label={props.chrome_label || '[CHROME_LABEL]'}
    mode={props.mode || 'navy'}
  />;
}
function TipSlide4(props) {
  return <TipSlide
    idx={4} tip_num={3}
    titular={props.titular || '[TITULAR]'}
    cuerpo={props.cuerpo || '[CUERPO]'}
    takeaway={props.takeaway || '[TAKEAWAY]'}
    chrome_label={props.chrome_label || '[CHROME_LABEL]'}
    mode={props.mode || 'paper'}
  />;
}

const EXAMPLES_CAROUSEL = {
  CalCover: {
    copete: 'Calendario impositivo',
    mes: 'Junio', anio: '2026',
    bajada: 'Vencimientos AFIP, IGJ y previsionales del mes en un solo lugar.',
    swipe: 'Deslizá →',
    chrome_label: 'Cover',
  },
  CalQ1: {
    copete: 'Primera quincena',
    fecha_1: '07', impuesto_1: 'Aportes autónomos',     periodo_1: 'Cat. I-V · 05/26',
    fecha_2: '11', impuesto_2: 'Ingresos Brutos',       periodo_2: 'CABA · Anticipo 05/26',
    fecha_3: '12', impuesto_3: 'Convenio Multilateral', periodo_3: 'CM05 · 05/26',
    fecha_4: '13', impuesto_4: 'IVA',                   periodo_4: 'Posición 05/2026',
    fecha_5: '14', impuesto_5: 'Sueldos · F.931',       periodo_5: 'Devengado 05/2026',
    chrome_label: '07 al 14 · Junio 2026',
  },
  CalQ2: {
    copete: 'Segunda quincena',
    fecha_1: '17', impuesto_1: 'Monotributo',          periodo_1: 'Cuota mensual',
    fecha_2: '18', impuesto_2: 'SICORE',               periodo_2: 'Retenciones 05/26',
    fecha_3: '20', impuesto_3: 'Ganancias · Personas', periodo_3: 'Anticipo · Junio',
    fecha_4: '22', impuesto_4: 'Bienes Personales',    periodo_4: 'Anticipo · Junio',
    fecha_5: '26', impuesto_5: 'IVA · Grandes contr.', periodo_5: 'Posición 05/2026',
    cta: '¿Tu equipo tiene esto cubierto?',
    chrome_label: '17 al 26 · Junio 2026',
  },
  TipCover: {
    copete: 'Tips PyME · Monotributo',
    titulo_sans: 'Monotributo',
    titulo_serif: '2026',
    bajada: 'Cuatro cosas que tu contador quisiera que entiendas antes de fin de año.',
    swipe: 'Deslizá →',
    chrome_label: 'Cover · 06/2026',
  },
  TipSlide2: {
    titular: 'La categoría no es para siempre.',
    cuerpo: 'AFIP revisa cada seis meses tu facturación, alquileres y consumos. Si te corrés de la escala, hay que recategorizar — sino llega la baja de oficio.',
    takeaway: 'Revisalo en enero y en julio.',
    chrome_label: 'Recategorización semestral',
    mode: 'paper',
  },
  TipSlide3: {
    titular: 'Tu obra social también suma.',
    cuerpo: 'El componente de obra social del monotributo cubre el grupo familiar primario, pero por cada integrante adicional pagás un aporte extra. Revisalo antes de incluir nuevos beneficiarios.',
    takeaway: 'Pedí el detalle a tu contador.',
    chrome_label: 'Componente OS',
    mode: 'navy',
  },
  TipSlide4: {
    titular: 'Facturación + medios de pago.',
    cuerpo: 'Los topes incluyen ingresos por todo concepto: ventas, alquileres, intereses. Y AFIP cruza tu CBU, billeteras y tarjetas. Lo que ves no es necesariamente lo que ellos ven.',
    takeaway: 'Conciliá todos tus canales.',
    chrome_label: 'Topes y cruces',
    mode: 'paper',
  },
};

Object.assign(window, {
  CalCover, CalQ1, CalQ2,
  TipCover, TipSlide2, TipSlide3, TipSlide4,
  EXAMPLES_CAROUSEL,
});
