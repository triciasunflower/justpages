const $ = (id) => document.getElementById(id);

const paletteMap = {
  blush: { accent: '#c98091', bg: '#fff8f5', soft: '#f4e7eb' },
  sage: { accent: '#799879', bg: '#fbfcf8', soft: '#eaf1e9' },
  sky: { accent: '#7b9fbe', bg: '#f7fbff', soft: '#e7f0f7' },
  lavender: { accent: '#9a86b8', bg: '#faf8ff', soft: '#efeafb' },
  sunny: { accent: '#cf8a60', bg: '#fffaf4', soft: '#faeadf' },
  classic: { accent: '#394650', bg: '#fcfbfa', soft: '#edf1f3' }
};

const fontMap = {
  inter: 'Inter, sans-serif',
  playfair: '"Playfair Display", Georgia, serif',
  cormorant: '"Cormorant Garamond", Georgia, serif',
  dmserif: '"DM Serif Display", Georgia, serif',
  montserrat: 'Montserrat, sans-serif',
  greatvibes: '"Great Vibes", cursive'
};

const fontPresets = {
  modern: { headlineFont: 'inter', nameFont: 'playfair', bodyFont: 'inter' },
  elegant: { headlineFont: 'playfair', nameFont: 'cormorant', bodyFont: 'inter' },
  script: { headlineFont: 'inter', nameFont: 'greatvibes', bodyFont: 'inter' }
};

const eventDefaults = {
  birthday: {
    title: 'Birthday Party Invitation', honoree: 'Sophie', headline: "You're Invited", subtitle: 'Birthday Celebration', note: 'Cake, games, and sweet memories!'
  },
  kidsBirthday: {
    title: 'Kids Birthday Invitation', honoree: 'Oliver', headline: 'Come Party With Us', subtitle: 'A Fun Birthday Adventure', note: 'Games, treats, and lots of fun!'
  },
  babyShower: {
    title: 'Baby Shower Invitation', honoree: 'Baby Mia', headline: 'A Little One Is On The Way', subtitle: 'Baby Shower', note: 'Let’s shower the growing family with love.'
  },
  bridalShower: {
    title: 'Bridal Shower Invitation', honoree: 'Emma', headline: 'Please Join Us', subtitle: 'Bridal Shower', note: 'Tea, treats, and beautiful company.'
  },
  graduation: {
    title: 'Graduation Invitation', honoree: 'Amelia Carter', headline: 'Celebrate With Us', subtitle: 'Graduation Party', note: 'Honoring a special achievement.'
  },
  wedding: {
    title: 'Wedding Save the Date', honoree: 'Emma & Noah', headline: 'Save The Date', subtitle: 'We Are Getting Married', note: 'Formal invitation to follow.'
  },
  holiday: {
    title: 'Holiday Party Invitation', honoree: 'The Winter Gathering', headline: 'Join Our Holiday Party', subtitle: 'A Cozy Celebration', note: 'Good cheer, warm drinks, and festive company.'
  },
  general: {
    title: 'Invitation Card', honoree: 'A Special Celebration', headline: 'You Are Invited', subtitle: 'Special Event', note: 'We would love to celebrate with you.'
  }
};

const templateCatalog = {
  birthday: [
    { key: 'birthday-banner', label: 'Birthday · Top Banner', family: 'design-top-band', note: 'Simple top band with clean centered text', palette: 'sunny', font: 'script' },
    { key: 'birthday-border', label: 'Birthday · Thin Border', family: 'design-minimal-border', note: 'Light border and airy layout', palette: 'sunny', font: 'modern' },
    { key: 'birthday-side', label: 'Birthday · Side Stripe', family: 'design-side-stripe', note: 'Modern side stripe with left aligned text', palette: 'sunny', font: 'modern' },
    { key: 'birthday-plaque', label: 'Birthday · Center Plaque', family: 'design-plaque', note: 'Small center plaque with lots of white space', palette: 'blush', font: 'script' },
    { key: 'birthday-stripes', label: 'Birthday · Fine Stripes', family: 'design-fine-stripes', note: 'Soft stripe pattern with minimal framing', palette: 'blush', font: 'modern' },
    { key: 'birthday-corners', label: 'Birthday · Corner Lines', family: 'design-corner-lines', note: 'Tiny corner line details only', palette: 'sunny', font: 'modern' }
  ],
  kidsBirthday: [
    { key: 'kids-banner', label: 'Kids Birthday · Top Banner', family: 'design-top-band', note: 'Playful but still clean', palette: 'sunny', font: 'script' },
    { key: 'kids-side', label: 'Kids Birthday · Side Stripe', family: 'design-side-stripe', note: 'Soft side stripe with room for stickers', palette: 'sky', font: 'script' },
    { key: 'kids-plaque', label: 'Kids Birthday · Center Plaque', family: 'design-plaque', note: 'Simple plaque layout', palette: 'blush', font: 'script' },
    { key: 'kids-border', label: 'Kids Birthday · Thin Border', family: 'design-minimal-border', note: 'Simple clean frame', palette: 'sunny', font: 'modern' },
    { key: 'kids-corners', label: 'Kids Birthday · Corner Lines', family: 'design-corner-lines', note: 'Minimal corner detail style', palette: 'sky', font: 'modern' },
    { key: 'kids-stripes', label: 'Kids Birthday · Fine Stripes', family: 'design-fine-stripes', note: 'Soft striping and white space', palette: 'lavender', font: 'script' }
  ],
  babyShower: [
    { key: 'baby-rounded', label: 'Baby Shower · Rounded Border', family: 'design-minimal-border', note: 'Soft minimal frame', palette: 'sage', font: 'elegant' },
    { key: 'baby-arch', label: 'Baby Shower · Gentle Arch', family: 'design-arch-frame', note: 'Soft arch with gentle tone', palette: 'sage', font: 'elegant' },
    { key: 'baby-plaque', label: 'Baby Shower · Center Plaque', family: 'design-plaque', note: 'Calm centered plaque', palette: 'blush', font: 'elegant' },
    { key: 'baby-band', label: 'Baby Shower · Top Band', family: 'design-top-band', note: 'Soft header band and white space', palette: 'sage', font: 'elegant' },
    { key: 'baby-side', label: 'Baby Shower · Side Plaque', family: 'design-side-plaque', note: 'Gentle side bar and plaque', palette: 'sky', font: 'elegant' },
    { key: 'baby-stripes', label: 'Baby Shower · Fine Stripes', family: 'design-fine-stripes', note: 'Minimal soft stripes', palette: 'sky', font: 'modern' }
  ],
  bridalShower: [
    { key: 'bridal-border', label: 'Bridal Shower · Elegant Border', family: 'design-double-border', note: 'Delicate double line border', palette: 'blush', font: 'elegant' },
    { key: 'bridal-editorial', label: 'Bridal Shower · Editorial', family: 'design-editorial', note: 'Minimal editorial lines', palette: 'blush', font: 'elegant' },
    { key: 'bridal-arch', label: 'Bridal Shower · Arch Frame', family: 'design-arch-frame', note: 'Elegant arch frame', palette: 'sage', font: 'elegant' },
    { key: 'bridal-plaque', label: 'Bridal Shower · Center Plaque', family: 'design-plaque', note: 'Clean center box and soft typography', palette: 'blush', font: 'elegant' },
    { key: 'bridal-side', label: 'Bridal Shower · Side Stripe', family: 'design-side-stripe', note: 'Simple side stripe layout', palette: 'sage', font: 'elegant' },
    { key: 'bridal-corners', label: 'Bridal Shower · Corner Lines', family: 'design-corner-lines', note: 'Very subtle corner detail', palette: 'lavender', font: 'elegant' }
  ],
  graduation: [
    { key: 'grad-border', label: 'Graduation · Formal Border', family: 'design-double-border', note: 'Formal and structured', palette: 'classic', font: 'modern' },
    { key: 'grad-side', label: 'Graduation · Side Stripe', family: 'design-side-stripe', note: 'Simple announcement format', palette: 'classic', font: 'modern' },
    { key: 'grad-band', label: 'Graduation · Top Band', family: 'design-top-band', note: 'Bold header band', palette: 'classic', font: 'modern' },
    { key: 'grad-editorial', label: 'Graduation · Editorial', family: 'design-editorial', note: 'Refined minimal lines', palette: 'classic', font: 'modern' },
    { key: 'grad-corners', label: 'Graduation · Corner Lines', family: 'design-corner-lines', note: 'Simple corner mark style', palette: 'classic', font: 'modern' },
    { key: 'grad-split', label: 'Graduation · Split Band', family: 'design-split-band', note: 'Modern split band with structured text', palette: 'sky', font: 'modern' }
  ],
  wedding: [
    { key: 'wedding-classic', label: 'Save the Date · Classic Border', family: 'design-minimal-border', note: 'Classic thin border', palette: 'sage', font: 'elegant' },
    { key: 'wedding-double', label: 'Save the Date · Double Border', family: 'design-double-border', note: 'Refined double line frame', palette: 'sage', font: 'elegant' },
    { key: 'wedding-arch', label: 'Save the Date · Arch Frame', family: 'design-arch-frame', note: 'Elegant arch framing', palette: 'sage', font: 'elegant' },
    { key: 'wedding-editorial', label: 'Save the Date · Editorial', family: 'design-editorial', note: 'Editorial rules and airy spacing', palette: 'classic', font: 'elegant' },
    { key: 'wedding-plaque', label: 'Save the Date · Refined Plaque', family: 'design-plaque', note: 'Refined center plaque with minimal decoration', palette: 'blush', font: 'elegant' },
    { key: 'wedding-corners', label: 'Save the Date · Corner Lines', family: 'design-corner-lines', note: 'Tiny corner detail only', palette: 'sage', font: 'elegant' }
  ],
  holiday: [
    { key: 'holiday-border', label: 'Holiday · Thin Border', family: 'design-minimal-border', note: 'Minimal holiday card framework', palette: 'blush', font: 'modern' },
    { key: 'holiday-band', label: 'Holiday · Top Band', family: 'design-top-band', note: 'Simple festive band', palette: 'blush', font: 'elegant' },
    { key: 'holiday-side', label: 'Holiday · Side Stripe', family: 'design-side-stripe', note: 'Simple stripe and space for stickers', palette: 'sage', font: 'modern' },
    { key: 'holiday-plaque', label: 'Holiday · Center Plaque', family: 'design-plaque', note: 'Small center box with clean framing', palette: 'blush', font: 'elegant' },
    { key: 'holiday-corners', label: 'Holiday · Corner Lines', family: 'design-corner-lines', note: 'Tiny festive corner detail', palette: 'classic', font: 'modern' },
    { key: 'holiday-stripes', label: 'Holiday · Fine Stripes', family: 'design-fine-stripes', note: 'Soft stripe background', palette: 'sage', font: 'modern' }
  ],
  general: [
    { key: 'general-border', label: 'General · Thin Border', family: 'design-minimal-border', note: 'Simple all-purpose border', palette: 'lavender', font: 'modern' },
    { key: 'general-editorial', label: 'General · Editorial', family: 'design-editorial', note: 'Crisp editorial lines', palette: 'classic', font: 'modern' },
    { key: 'general-side', label: 'General · Side Stripe', family: 'design-side-stripe', note: 'Minimal side stripe format', palette: 'sky', font: 'modern' },
    { key: 'general-plaque', label: 'General · Center Plaque', family: 'design-plaque', note: 'Center plaque and airy text', palette: 'blush', font: 'elegant' },
    { key: 'general-arch', label: 'General · Arch Frame', family: 'design-arch-frame', note: 'Arch style for elegant uses', palette: 'sage', font: 'elegant' },
    { key: 'general-corners', label: 'General · Corner Lines', family: 'design-corner-lines', note: 'Minimal corner markers', palette: 'lavender', font: 'modern' }
  ]
};

const stickerCatalog = {
  flower: { label: 'Flower', categories: ['wedding', 'bridalShower', 'babyShower', 'general'], size: 15 },
  leaf: { label: 'Leaf', categories: ['wedding', 'bridalShower', 'babyShower', 'general'], size: 14 },
  ring: { label: 'Rings', categories: ['wedding', 'bridalShower'], size: 14 },
  heart: { label: 'Heart', categories: ['wedding', 'bridalShower', 'babyShower', 'general', 'holiday'], size: 12 },
  bow: { label: 'Bow', categories: ['babyShower', 'bridalShower', 'wedding', 'general'], size: 14 },
  teddy: { label: 'Teddy', categories: ['babyShower'], size: 16 },
  bottle: { label: 'Bottle', categories: ['babyShower'], size: 14 },
  star: { label: 'Star', categories: ['birthday', 'kidsBirthday', 'graduation', 'holiday', 'general'], size: 12 },
  cake: { label: 'Cake', categories: ['birthday', 'kidsBirthday'], size: 16 },
  balloons: { label: 'Balloons', categories: ['birthday', 'kidsBirthday'], size: 17 },
  gift: { label: 'Gift', categories: ['birthday', 'kidsBirthday', 'holiday'], size: 15 },
  cap: { label: 'Cap', categories: ['graduation'], size: 15 },
  diploma: { label: 'Diploma', categories: ['graduation'], size: 15 },
  snowflake: { label: 'Snowflake', categories: ['holiday'], size: 13 },
  candle: { label: 'Candle', categories: ['holiday', 'birthday'], size: 13 },
  sparkle: { label: 'Sparkle', categories: ['general', 'birthday', 'kidsBirthday', 'bridalShower', 'wedding', 'holiday', 'graduation'], size: 11 }
};

let stickers = [];
let stickerCounter = 0;
let selectedStickerId = null;

function escapeHtml(str = '') {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function hexToSoft(hex, alpha = 0.18) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getDesignsForType(type) {
  return templateCatalog[type] || templateCatalog.general;
}

function getDesignConfig(type, key) {
  return getDesignsForType(type).find((d) => d.key === key) || getDesignsForType(type)[0];
}

function updateDesignOptions(type, selectedKey = '') {
  const select = $('cardDesign');
  const designs = getDesignsForType(type);
  select.innerHTML = designs.map((d) => `<option value="${d.key}">${d.label}</option>`).join('');
  const finalKey = designs.some((d) => d.key === selectedKey) ? selectedKey : designs[0].key;
  select.value = finalKey;
  return finalKey;
}

function applyDesignPreset(type, designKey, preserveCustomFont = true) {
  const design = getDesignConfig(type, designKey);
  $('palette').value = design.palette;
  if (!(preserveCustomFont && $('fontStyle').value === 'custom')) {
    $('fontStyle').value = design.font;
    applyFontPresetToSelectors(design.font);
  }
  $('designNote').textContent = design.note;
}

function applyEventDefaults() {
  const type = $('eventType').value;
  const defaults = eventDefaults[type] || eventDefaults.general;
  $('previewTitle').textContent = defaults.title;
  $('honoree').value = defaults.honoree;
  $('headline').value = defaults.headline;
  $('subtitleText').value = defaults.subtitle;
  $('note').value = defaults.note;

  const chosen = updateDesignOptions(type);
  applyDesignPreset(type, chosen, false);
  renderStickerLibrary(type);
  stickers = [];
  selectedStickerId = null;
  syncStickerControls();
  renderInvitation();
}

function applyFontPresetToSelectors(presetName) {
  const preset = fontPresets[presetName];
  if (!preset) return;
  $('headlineFont').value = preset.headlineFont;
  $('nameFont').value = preset.nameFont;
  $('bodyFont').value = preset.bodyFont;
}

function getState() {
  const type = $('eventType').value;
  const designKey = $('cardDesign').value;
  const design = getDesignConfig(type, designKey);
  return {
    eventType: type,
    cardDesign: designKey,
    designFamily: design.family,
    palette: $('palette').value,
    fontStyle: $('fontStyle').value,
    headlineFont: $('headlineFont').value,
    nameFont: $('nameFont').value,
    bodyFont: $('bodyFont').value,
    cardSize: $('cardSize').value,
    orientation: $('orientation').value,
    printLayout: $('printLayout').value,
    honoree: $('honoree').value.trim(),
    headline: $('headline').value.trim(),
    subtitle: $('subtitleText').value.trim(),
    date: $('eventDate').value.trim(),
    time: $('eventTime').value.trim(),
    location: $('location').value.trim(),
    rsvp: $('rsvp').value.trim(),
    note: $('note').value.trim(),
    showBack: $('showBack').checked,
    backNote: $('backNote').value.trim(),
    useCustomColors: $('useCustomColors').checked,
    accentColor: $('accentColor').value,
    bgColor: $('bgColor').value
  };
}

function applyPaletteVariables(preview, state) {
  const pal = state.useCustomColors ? {
    accent: state.accentColor,
    bg: state.bgColor,
    soft: hexToSoft(state.accentColor, 0.16)
  } : (paletteMap[state.palette] || paletteMap.blush);

  preview.style.setProperty('--accent', pal.accent);
  preview.style.setProperty('--card-bg', pal.bg);
  preview.style.setProperty('--soft', pal.soft);
  preview.style.setProperty('--headline-font', fontMap[state.headlineFont] || fontMap.inter);
  preview.style.setProperty('--name-font', fontMap[state.nameFont] || fontMap.playfair);
  preview.style.setProperty('--body-font', fontMap[state.bodyFont] || fontMap.inter);
}

function renderStickers() {
  return stickers.map((sticker) => {
    const selected = sticker.id === selectedStickerId ? 'selected' : '';
    return `<button type="button" class="sticker ${selected}" data-sticker-id="${sticker.id}" style="--x:${sticker.x};--y:${sticker.y};--size:${sticker.size};--rotate:${sticker.rotate};" aria-label="Sticker ${escapeHtml(sticker.type)}">${getStickerSvg(sticker.type)}</button>`;
  }).join('');
}

function makeFrontCard(state) {
  return `<article class="invitation-card front-card ${state.designFamily} design-${state.cardDesign}">
    <div class="card-surface"></div>
    <div class="sticker-layer">${renderStickers()}</div>
    <div class="card-inner">
      <div class="content-box">
        <div class="invite-kicker">${escapeHtml(state.subtitle || 'You are invited')}</div>
        <h2 class="invite-headline">${escapeHtml(state.headline || "You're Invited")}</h2>
        <h1 class="invite-name">${escapeHtml(state.honoree || 'Guest of Honor')}</h1>
        <p class="invite-subtitle">${escapeHtml(state.note || '')}</p>
        <div class="detail-stack">
          <div class="detail-item">${escapeHtml(state.date || 'Date')} · ${escapeHtml(state.time || 'Time')}</div>
          <div class="detail-item">${escapeHtml(state.location || 'Location')}</div>
        </div>
        <p class="invite-rsvp">${escapeHtml(state.rsvp || 'RSVP')}</p>
      </div>
    </div>
  </article>`;
}

function makeBackCard(state) {
  return `<article class="invitation-card back-card design-minimal-border">
    <div class="card-surface"></div>
    <div class="card-inner">
      <div class="content-box">
        <div class="invite-kicker">Details</div>
        <h1 class="invite-name">${escapeHtml(state.honoree || 'Celebration')}</h1>
        <p class="invite-note">${escapeHtml(state.backNote || 'Thank you for celebrating with us!')}</p>
        <div class="detail-stack">
          <div class="detail-item">${escapeHtml(state.date || 'Date')}</div>
          <div class="detail-item">${escapeHtml(state.location || 'Location')}</div>
        </div>
      </div>
    </div>
  </article>`;
}

function makeSheet(cards) {
  return `<section class="print-sheet">${cards.join('')}</section>`;
}

function renderInvitation() {
  const state = getState();
  const preview = $('invitationPreview');
  preview.className = `invitation-preview font-${state.fontStyle} size-${state.cardSize} ${state.orientation} ${state.printLayout === 'twoUp' ? 'two-layout' : 'single-layout'}`;
  preview.removeAttribute('style');
  applyPaletteVariables(preview, state);

  const front = makeFrontCard(state);
  const cards = state.printLayout === 'twoUp' ? [front, front] : [front];
  const sheets = [makeSheet(cards)];
  if (state.showBack) {
    const backCard = makeBackCard(state);
    const backCards = state.printLayout === 'twoUp' ? [backCard, backCard] : [backCard];
    sheets.push(makeSheet(backCards));
  }
  preview.innerHTML = sheets.join('');
  attachStickerInteractions();
}

function renderStickerLibrary(type) {
  const library = $('stickerLibrary');
  const entries = Object.entries(stickerCatalog).filter(([, item]) => item.categories.includes(type));
  library.innerHTML = entries.map(([key, item]) => `
    <button type="button" class="sticker-chip" data-add-sticker="${key}">
      ${getStickerSvg(key)}
      <span>${item.label}</span>
    </button>
  `).join('');

  library.querySelectorAll('[data-add-sticker]').forEach((btn) => {
    btn.addEventListener('click', () => addSticker(btn.dataset.addSticker));
  });
}

function addSticker(type) {
  const def = stickerCatalog[type];
  if (!def) return;
  const id = `sticker-${++stickerCounter}`;
  const offset = (stickers.length % 4) * 8;
  stickers.push({ id, type, x: 22 + offset, y: 18 + offset, size: def.size, rotate: 0 });
  selectedStickerId = id;
  syncStickerControls();
  renderInvitation();
}

function syncStickerControls() {
  const sticker = stickers.find((item) => item.id === selectedStickerId);
  const size = $('stickerSize');
  const rotate = $('stickerRotate');
  const del = $('deleteStickerBtn');
  if (!sticker) {
    size.disabled = true;
    rotate.disabled = true;
    del.disabled = true;
    size.value = 14;
    rotate.value = 0;
    return;
  }
  size.disabled = false;
  rotate.disabled = false;
  del.disabled = false;
  size.value = sticker.size;
  rotate.value = sticker.rotate;
}

function updateSelectedSticker(prop, value) {
  const sticker = stickers.find((item) => item.id === selectedStickerId);
  if (!sticker) return;
  sticker[prop] = value;
  renderInvitation();
  syncStickerControls();
}

function attachStickerInteractions() {
  const stickerNodes = document.querySelectorAll('.sticker');
  stickerNodes.forEach((node) => {
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedStickerId = node.dataset.stickerId;
      syncStickerControls();
      renderInvitation();
    });

    node.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      const id = node.dataset.stickerId;
      selectedStickerId = id;
      syncStickerControls();
      const firstCard = node.closest('.front-card');
      if (!firstCard) return;
      const rect = firstCard.getBoundingClientRect();

      const onMove = (evt) => {
        const x = Math.max(6, Math.min(94, ((evt.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(6, Math.min(94, ((evt.clientY - rect.top) / rect.height) * 100));
        const sticker = stickers.find((item) => item.id === id);
        if (!sticker) return;
        sticker.x = Number(x.toFixed(2));
        sticker.y = Number(y.toFixed(2));
        document.querySelectorAll(`.sticker[data-sticker-id="${id}"]`).forEach((el) => {
          el.style.setProperty('--x', sticker.x);
          el.style.setProperty('--y', sticker.y);
          el.classList.add('selected');
        });
      };

      const onUp = () => {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        renderInvitation();
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    });
  });

  document.querySelectorAll('.front-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.sticker')) {
        selectedStickerId = null;
        syncStickerControls();
        renderInvitation();
      }
    });
  });
}

function useSampleText() {
  $('eventType').value = 'wedding';
  $('eventDate').value = 'Saturday, September 12';
  $('eventTime').value = '4:00 PM';
  $('location').value = 'Rosewood Garden House';
  $('rsvp').value = 'Formal invitation to follow';
  const chosen = updateDesignOptions('wedding', 'wedding-arch');
  const defaults = eventDefaults.wedding;
  $('previewTitle').textContent = defaults.title;
  $('honoree').value = defaults.honoree;
  $('headline').value = defaults.headline;
  $('subtitleText').value = defaults.subtitle;
  $('note').value = defaults.note;
  applyDesignPreset('wedding', chosen, false);
  renderStickerLibrary('wedding');
  stickers = [];
  selectedStickerId = null;
  syncStickerControls();
  renderInvitation();
}

function getStickerSvg(type) {
  const svgs = {
    flower: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.9"/><path d="M50 18c10 0 18 8 18 18-11 0-18-7-18-18Z" fill="currentColor" opacity="0.22"/><path d="M82 50c0 10-8 18-18 18 0-11 7-18 18-18Z" fill="currentColor" opacity="0.22"/><path d="M50 82c-10 0-18-8-18-18 11 0 18 7 18 18Z" fill="currentColor" opacity="0.22"/><path d="M18 50c0-10 8-18 18-18 0 11-7 18-18 18Z" fill="currentColor" opacity="0.22"/><path d="M28 28c9 0 16 7 16 16-9 0-16-7-16-16Z" fill="currentColor" opacity="0.16"/><path d="M72 28c0 9-7 16-16 16 0-9 7-16 16-16Z" fill="currentColor" opacity="0.16"/></svg>`,
    leaf: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M78 22C46 24 26 45 22 78c32-2 54-22 56-56Z" fill="currentColor" opacity="0.18"/><path d="M26 74C43 57 57 43 74 26"/><path d="M44 56c-3 7-4 12-4 18"/></svg>`,
    ring: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="36" cy="56" r="18"/><circle cx="62" cy="56" r="18"/><path d="M34 30 45 18l10 12"/><path d="M60 30 71 18l10 12"/></svg>`,
    heart: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M50 80 21 51c-9-9-9-23 0-32s23-9 32 0c9-9 23-9 32 0s9 23 0 32L50 80Z" fill="currentColor" opacity="0.2"/></svg>`,
    bow: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M50 48c-8-11-20-22-33-18 1 17 12 25 28 24" fill="currentColor" opacity="0.16"/><path d="M50 48c8-11 20-22 33-18-1 17-12 25-28 24" fill="currentColor" opacity="0.16"/><path d="M50 48c0 15-6 22-10 30"/><path d="M50 48c0 15 6 22 10 30"/><circle cx="50" cy="48" r="6" fill="currentColor"/></svg>`,
    teddy: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="33" cy="25" r="10"/><circle cx="67" cy="25" r="10"/><circle cx="50" cy="42" r="24" fill="currentColor" opacity="0.14"/><circle cx="50" cy="66" r="18" fill="currentColor" opacity="0.1"/><circle cx="42" cy="40" r="3" fill="currentColor"/><circle cx="58" cy="40" r="3" fill="currentColor"/><ellipse cx="50" cy="50" rx="7" ry="5"/><path d="M46 54c2 2 6 2 8 0"/></svg>`,
    bottle: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M42 15h16v10l6 8v38c0 8-6 14-14 14h0c-8 0-14-6-14-14V33l6-8V15Z" fill="currentColor" opacity="0.12"/><path d="M40 42h20"/><path d="M38 58h24"/></svg>`,
    star: `<svg viewBox="0 0 100 100" fill="currentColor"><path opacity="0.22" d="M50 12 59 38l27 1-21 16 7 27-22-15-22 15 7-27-21-16 27-1 9-26Z"/></svg>`,
    cake: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M28 42h44v34H28z" fill="currentColor" opacity="0.14"/><path d="M24 76h52"/><path d="M28 42c6 8 16 8 22 0 6 8 16 8 22 0"/><path d="M38 26v16M50 22v20M62 26v16"/><path d="M38 20c2 2 2 5 0 7-2-2-2-5 0-7ZM50 16c2 2 2 5 0 7-2-2-2-5 0-7ZM62 20c2 2 2 5 0 7-2-2-2-5 0-7Z" fill="currentColor" opacity="0.22"/></svg>`,
    balloons: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="34" cy="28" rx="14" ry="18" fill="currentColor" opacity="0.14"/><ellipse cx="62" cy="34" rx="14" ry="18" fill="currentColor" opacity="0.22"/><path d="M34 46c3 8 4 16 5 28"/><path d="M62 52c-3 8-4 16-5 28"/><path d="M46 74 55 74"/></svg>`,
    gift: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 38h56v42H22z" fill="currentColor" opacity="0.12"/><path d="M20 38h60v12H20z"/><path d="M50 38v42"/><path d="M50 18c8 0 12 6 10 12-8 0-12-4-10-12ZM50 18c-8 0-12 6-10 12 8 0 12-4 10-12Z" fill="currentColor" opacity="0.18"/></svg>`,
    cap: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 40 50 24l34 16-34 16-34-16Z" fill="currentColor" opacity="0.12"/><path d="M30 48v12c8 6 32 6 40 0V48"/><path d="M84 40v20"/><circle cx="84" cy="64" r="3" fill="currentColor"/></svg>`,
    diploma: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M26 34h38c10 0 10 28 0 28H26z" fill="currentColor" opacity="0.12"/><path d="M64 48h12"/><path d="M76 40v16"/><path d="M76 40c8 0 8 16 0 16"/><path d="M64 48c0 8 12 18 18 22"/></svg>`,
    snowflake: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M50 18v64M18 50h64M28 28l44 44M72 28 28 72"/><path d="M50 18l-6 6M50 18l6 6M82 50l-6-6M82 50l-6 6M50 82l-6-6M50 82l6-6M18 50l6-6M18 50l6 6"/></svg>`,
    candle: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M40 32h20v42H40z" fill="currentColor" opacity="0.12"/><path d="M50 18c4 4 4 9 0 12-4-3-4-8 0-12Z" fill="currentColor" opacity="0.22"/><path d="M45 42h10M45 54h10M45 66h10"/></svg>`,
    sparkle: `<svg viewBox="0 0 100 100" fill="currentColor"><path opacity="0.22" d="M50 18 57 43l25 7-25 7-7 25-7-25-25-7 25-7 7-25Z"/></svg>`
  };
  return svgs[type] || svgs.sparkle;
}

function initStickerControls() {
  $('stickerSize').addEventListener('input', (e) => updateSelectedSticker('size', Number(e.target.value)));
  $('stickerRotate').addEventListener('input', (e) => updateSelectedSticker('rotate', Number(e.target.value)));
  $('deleteStickerBtn').addEventListener('click', () => {
    if (!selectedStickerId) return;
    stickers = stickers.filter((item) => item.id !== selectedStickerId);
    selectedStickerId = null;
    syncStickerControls();
    renderInvitation();
  });
  $('clearStickersBtn').addEventListener('click', () => {
    stickers = [];
    selectedStickerId = null;
    syncStickerControls();
    renderInvitation();
  });
}

function init() {
  updateDesignOptions($('eventType').value);
  applyFontPresetToSelectors($('fontStyle').value);
  renderStickerLibrary($('eventType').value);
  syncStickerControls();

  const inputs = [
    'honoree', 'headline', 'subtitleText', 'eventDate', 'eventTime', 'location', 'rsvp', 'note', 'backNote',
    'cardSize', 'orientation', 'printLayout', 'palette', 'fontStyle', 'headlineFont', 'nameFont', 'bodyFont',
    'accentColor', 'bgColor', 'useCustomColors', 'showBack'
  ];

  inputs.forEach((id) => $(id).addEventListener('input', renderInvitation));
  inputs.forEach((id) => $(id).addEventListener('change', renderInvitation));

  $('eventType').addEventListener('change', applyEventDefaults);
  $('cardDesign').addEventListener('change', () => {
    applyDesignPreset($('eventType').value, $('cardDesign').value);
    renderInvitation();
  });
  $('fontStyle').addEventListener('change', () => {
    if ($('fontStyle').value !== 'custom') applyFontPresetToSelectors($('fontStyle').value);
    renderInvitation();
  });

  $('sampleBtn').addEventListener('click', useSampleText);
  $('refreshBtn').addEventListener('click', renderInvitation);
  $('printBtn').addEventListener('click', () => window.print());

  initStickerControls();
  applyEventDefaults();
}

document.addEventListener('DOMContentLoaded', init);
