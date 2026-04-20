const COMPANY_HENSACHI_MAP = (() => {
  const m = {};
  if (typeof COMPANIES !== 'undefined') {
    COMPANIES.forEach(g => g.companies.forEach(c => { m[c] = g.hensachi; }));
  }
  return m;
})();

const COMPANY_DOMAIN_HINTS = {
  "トヨタ自動車": "toyota.co.jp", "ソニー": "sony.co.jp", "任天堂": "nintendo.co.jp",
  "三菱商事": "mitsubishicorp.com", "三井物産": "mitsui.com", "伊藤忠商事": "itochu.co.jp",
  "住友商事": "sumitomocorp.com", "丸紅": "marubeni.com", "双日": "sojitz.com",
  "三菱UFJ銀行(OP)": "mufg.jp", "三菱UFJ銀行(GCIB)": "mufg.jp",
  "三井住友銀行(OP)↑": "smbc.co.jp", "三井住友銀行(Global)": "smbc.co.jp",
  "みずほFG(OP)": "mizuho-fg.co.jp", "みずほFG(GCF)": "mizuho-fg.co.jp",
  "りそな銀行(OP)": "resonabank.co.jp", "りそな銀行(AC･アセマネ)": "resonabank.co.jp",
  "野村證券(OP)": "nomura.co.jp", "野村證券(IB･GM)": "nomura.co.jp",
  "大和証券(OP)": "daiwa.jp", "大和証券(エキスパート)": "daiwa.jp",
  "日本銀行": "boj.or.jp", "日本政策投資銀行": "dbj.jp", "国際協力銀行": "jbic.go.jp",
  "ゴールドマンサックス": "goldmansachs.com", "JPモルガン･チェース": "jpmorgan.com",
  "マッキンゼー&カンパニー": "mckinsey.com", "ボストン･コンサルティング": "bcg.com",
  "A.T.カーニー": "kearney.com", "アクセンチュア": "accenture.com", "アクセンチュア(戦略)": "accenture.com",
  "デロイトトーマツ": "deloitte.com", "PwCコンサルティング": "pwc.com", "PwCストラテジー&": "pwc.com",
  "KPMGコンサルティング": "kpmg.com", "アーサーDリトル": "adlittle.com",
  "電通": "dentsu.co.jp", "博報堂DY": "hakuhodody-holdings.co.jp", "ADK": "adk.jp",
  "日本電信電話": "ntt.co.jp", "NTTドコモ": "docomo.ne.jp", "NTTデータ": "nttdata.com",
  "NTT東日本": "ntt-east.co.jp", "NTT西日本": "ntt-west.co.jp",
  "KDDI": "kddi.com", "ソフトバンク": "softbank.jp",
  "パナソニック": "panasonic.com", "日立製作所": "hitachi.co.jp", "三菱電機": "mitsubishielectric.co.jp",
  "キーエンス": "keyence.co.jp", "ファナック": "fanuc.co.jp", "コマツ": "komatsu.jp",
  "デンソー": "denso.com", "ブリヂストン": "bridgestone.co.jp", "キヤノン": "canon.jp",
  "リコー": "ricoh.co.jp", "富士通": "fujitsu.com", "NEC↑": "nec.com",
  "東京エレクトロン": "tel.com", "東京ガス": "tokyo-gas.co.jp", "大阪ガス": "osakagas.co.jp",
  "東京電力": "tepco.co.jp", "関西電力": "kepco.co.jp", "中部電力": "chuden.co.jp",
  "JR東海": "jr-central.co.jp", "JR東日本": "jreast.co.jp", "JR西日本": "westjr.co.jp",
  "JR九州": "jrkyushu.co.jp", "JR北海道": "jrhokkaido.co.jp", "JR四国": "jr-shikoku.co.jp",
  "JAL(総合職)": "jal.co.jp", "ANA(総合職)": "ana.co.jp",
  "リクルート": "recruit.co.jp", "サントリー": "suntory.co.jp", "アサヒ": "asahibeer.co.jp",
  "キリン": "kirinholdings.com", "味の素": "ajinomoto.co.jp",
  "花王": "kao.com", "資生堂": "shiseido.com", "コーセー": "kose.co.jp",
  "ユニ･チャーム": "unicharm.co.jp", "ライオン↓": "lion.co.jp",
  "バンダイナムコ": "bandainamcoent.co.jp", "スクウェア･エニックス": "hd.square-enix.com",
  "カプコン": "capcom.co.jp", "コナミ": "konami.com", "セガサミー": "segasammy.co.jp",
  "ファーストリテイリング(Global)": "fastretailing.com", "ニトリ": "nitori.co.jp",
  "楽天": "rakuten.co.jp", "メルカリ": "mercari.com", "サイバーエージェント": "cyberagent.co.jp",
  "LINEヤフー": "lycorp.co.jp", "DeNA": "dena.com", "MIXI": "mixi.co.jp",
  "Amazonジャパン(総合職)": "amazon.co.jp", "AWSジャパン": "aws.amazon.com",
  "日本マイクロソフト": "microsoft.com", "Appleジャパン": "apple.com",
  "日本オラクル": "oracle.com", "SAPジャパン": "sap.com", "Salesforceジャパン": "salesforce.com",
  "日本IBM": "ibm.com", "日本HP": "hp.com", "Cisco日本": "cisco.com", "Intelジャパン": "intel.com",
  "Netflix日本↑": "netflix.com", "ブルームバーグ": "bloomberg.com",
  "P&Gジャパン": "pg.com", "ユニリーバジャパン": "unilever.com", "ネスレ日本": "nestle.com",
  "日本コカ･コーラ": "coca-cola.com", "日本ロレアル": "loreal.com",
  "三井不動産": "mitsuifudosan.co.jp", "三菱地所": "mec.co.jp", "住友不動産": "sumitomo-rd.co.jp",
  "東急不動産": "tokyu-land.co.jp", "野村不動産": "nomura-re.co.jp", "森ビル": "mori.co.jp",
  "三越伊勢丹": "imhds.co.jp", "高島屋": "takashimaya.co.jp"
};

function guessDomain(name) {
  const cleaned = name.replace(/[↑↓]/g, '').trim();
  if (COMPANY_DOMAIN_HINTS[cleaned]) return COMPANY_DOMAIN_HINTS[cleaned];
  const base = cleaned.split(/[(（]/)[0].trim();
  return COMPANY_DOMAIN_HINTS[base] || null;
}

const COMPANY_DIRECT_URLS = {
  "バンダイナムコ":            { recruit: "https://www.bandainamcoent.co.jp/recruit/",            ir: "https://www.bandainamcoent.co.jp/ir/library/" },
  "任天堂":                    { recruit: "https://www.nintendo.co.jp/jobs/",                    ir: "https://www.nintendo.co.jp/ir/library/index.html" },
  "ソニー":                    { recruit: "https://www.sony.com/ja/SonyInfo/Jobs/",              ir: "https://www.sony.com/ja/SonyInfo/IR/library/" },
  "トヨタ自動車":              { recruit: "https://www.toyota-recruit.com/",                    ir: "https://global.toyota/jp/ir/library/" },
  "三菱商事":                  { recruit: "https://www.mitsubishicorp.com/jp/ja/careers/",       ir: "https://www.mitsubishicorp.com/jp/ja/ir/library/" },
  "三井物産":                  { recruit: "https://recruit.mitsui.com/",                         ir: "https://www.mitsui.com/jp/ja/ir/library/" },
  "伊藤忠商事":                { recruit: "https://career.itochu.co.jp/student/",                ir: "https://www.itochu.co.jp/ja/ir/doc/" },
  "住友商事":                  { recruit: "https://www.sumitomocorp.com/ja/jp/career/new-graduate", ir: "https://www.sumitomocorp.com/ja/jp/ir/library" },
  "丸紅":                      { recruit: "https://career.marubeni.com/",                        ir: "https://www.marubeni.com/jp/ir/library/" },
  "双日":                      { recruit: "https://www.sojitz.com/jp/recruit/",                  ir: "https://www.sojitz.com/jp/ir/library/" },
  "電通":                      { recruit: "https://www.dentsu.co.jp/recruit/",                   ir: "https://www.group.dentsu.com/jp/ir/library/" },
  "博報堂DY":                  { recruit: "https://www.hakuhodody-holdings.co.jp/recruit/",      ir: "https://www.hakuhodody-holdings.co.jp/ir/library/" },
  "リクルート":                { recruit: "https://recruit-holdings.com/ja/careers/",            ir: "https://recruit-holdings.com/ja/ir/library/" },
  "NTTデータ":                 { recruit: "https://nttdata-recruit.com/",                        ir: "https://www.nttdata.com/global/ja/investors/library/" },
  "ソフトバンク":              { recruit: "https://www.softbank.jp/recruit/",                    ir: "https://www.softbank.jp/corp/ir/financials/" },
  "KDDI":                      { recruit: "https://newgrads.kddi.com/",                          ir: "https://www.kddi.com/corporate/ir/library/" },
  "野村證券(OP)":              { recruit: "https://www.nomura.co.jp/recruit/",                   ir: "https://www.nomuraholdings.com/jp/investor/library/" },
  "大和証券(OP)":              { recruit: "https://www.daiwa-grp.jp/recruit/",                   ir: "https://www.daiwa-grp.jp/ir/library/" },
  "三菱UFJ銀行(OP)":           { recruit: "https://www.saiyo.bk.mufg.jp/",                       ir: "https://www.mufg.jp/ir/library/" },
  "三井住友銀行(OP)↑":         { recruit: "https://www.smbc-freshers.com/",                      ir: "https://www.smfg.co.jp/investor/library/" },
  "みずほFG(OP)":              { recruit: "https://www.mizuho-fg.co.jp/recruitment/",            ir: "https://www.mizuho-fg.co.jp/investors/financial/library/" },
  "楽天":                      { recruit: "https://corp.rakuten.co.jp/careers/",                 ir: "https://corp.rakuten.co.jp/investors/documents/" },
  "サイバーエージェント":      { recruit: "https://www.cyberagent.co.jp/careers/",               ir: "https://www.cyberagent.co.jp/ir/library/" },
  "キーエンス":                { recruit: "https://www.keyence.co.jp/ss/recruit/",               ir: "https://www.keyence.co.jp/ss/ir/library/" },
  "日立製作所":                { recruit: "https://www.hitachi.co.jp/recruit/",                  ir: "https://www.hitachi.co.jp/IR-j/library/" },
  "三菱電機":                  { recruit: "https://www.mitsubishielectric.co.jp/recruit/",       ir: "https://www.mitsubishielectric.co.jp/ir/library/" },
  "パナソニック":              { recruit: "https://recruit.jpn.panasonic.com/",                  ir: "https://holdings.panasonic/jp/corporate/investors/library.html" },
  "富士通":                    { recruit: "https://www.fujitsu.com/jp/careers/newgraduate/",     ir: "https://www.fujitsu.com/jp/ir/library/" },
  "サントリー":                { recruit: "https://www.suntory.co.jp/recruit/",                  ir: "https://www.suntory.co.jp/company/financial/" },
  "アサヒ":                    { recruit: "https://www.asahigroup-holdings.com/recruit/",        ir: "https://www.asahigroup-holdings.com/ir/library/" },
  "キリン":                    { recruit: "https://www.kirinholdings.com/jp/careers/",           ir: "https://www.kirinholdings.com/jp/investors/library/" },
  "味の素":                    { recruit: "https://recruit.ajinomoto.co.jp/",                    ir: "https://www.ajinomoto.co.jp/company/jp/ir/library/" },
  "花王":                      { recruit: "https://www.kao.com/jp/careers/",                     ir: "https://www.kao.com/jp/investor-relations/library/" },
  "資生堂":                    { recruit: "https://corp.shiseido.com/jp/careers/",               ir: "https://corp.shiseido.com/jp/ir/library/" },
  "任天堂":                    { recruit: "https://www.nintendo.co.jp/jobs/",                    ir: "https://www.nintendo.co.jp/ir/library/index.html" },
  "三井不動産":                { recruit: "https://www.mitsuifudosan.co.jp/corporate/recruit/",  ir: "https://www.mitsuifudosan.co.jp/corporate/ir/library/" },
  "三菱地所":                  { recruit: "https://www.mec.co.jp/j/recruit/",                    ir: "https://www.mec.co.jp/j/investor/library/" },
  "住友不動産":                { recruit: "https://www.sumitomo-rd.co.jp/company/recruit",       ir: "https://www.sumitomo-rd.co.jp/ir/library/" },
  "JR東海":                    { recruit: "https://recruit.jr-central.co.jp/",                   ir: "https://company.jr-central.co.jp/ir/library/" },
  "JR東日本":                  { recruit: "https://www.jreast.co.jp/recruit/",                   ir: "https://www.jreast.co.jp/investor/library/" },
  "ファーストリテイリング(Global)": { recruit: "https://www.fastretailing.com/jp/careers/",         ir: "https://www.fastretailing.com/jp/ir/library/" },
  "ニトリ":                    { recruit: "https://recruit.nitori.co.jp/",                       ir: "https://www.nitorihd.co.jp/ir/library/" }
};

function getDirectUrl(rawName, type) {
  const cleaned = rawName.replace(/[↑↓]/g, '').trim();
  const base = cleaned.split(/[(（]/)[0].trim();
  const entry = COMPANY_DIRECT_URLS[cleaned] || COMPANY_DIRECT_URLS[base];
  if (entry && entry[type]) return entry[type];
  return null;
}

function ensureCompanyModal() {
  if (document.getElementById('company-modal')) return;
  const style = document.createElement('style');
  style.textContent = `
    .cm-overlay { position: fixed; inset: 0; background: rgba(40,30,60,0.6); z-index: 100; display: none; align-items: flex-start; justify-content: center; padding: 20px; overflow-y: auto; }
    .cm-overlay.show { display: flex; }
    .cm-modal { background: #fff; max-width: 680px; width: 100%; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.4); margin: 20px auto; animation: cmIn 0.2s ease-out; }
    @keyframes cmIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
    .cm-header { padding: 24px 28px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; position: relative; }
    .cm-close { position: absolute; top: 14px; right: 16px; background: rgba(255,255,255,0.2); color: #fff; border: none; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 20px; line-height: 1; }
    .cm-close:hover { background: rgba(255,255,255,0.35); }
    .cm-logo-row { display: flex; align-items: center; gap: 14px; margin-bottom: 8px; }
    .cm-logo { width: 48px; height: 48px; border-radius: 8px; background: #fff; padding: 6px; object-fit: contain; }
    .cm-logo-placeholder { width: 48px; height: 48px; border-radius: 8px; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; }
    .cm-name { font-size: 22px; font-weight: 700; }
    .cm-tags { display: flex; gap: 8px; margin-top: 4px; flex-wrap: wrap; }
    .cm-tag { background: rgba(255,255,255,0.2); padding: 3px 10px; border-radius: 10px; font-size: 12px; }
    .cm-body { padding: 20px 28px 28px; }
    .cm-section { margin-bottom: 22px; }
    .cm-section h3 { font-size: 14px; color: #4a4a7a; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 2px solid #eef1ff; font-weight: 700; }
    .cm-grid { display: grid; grid-template-columns: 110px 1fr; gap: 8px 14px; font-size: 13px; }
    .cm-grid .k { color: #888; font-weight: 600; }
    .cm-grid .v { color: #333; }
    .cm-grid .v .sub { color: #aaa; font-size: 11px; }
    .cm-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; }
    .cm-link { display: flex; align-items: center; gap: 8px; padding: 10px 12px; background: #f6f8ff; border: 1px solid #d0d6ff; border-radius: 8px; text-decoration: none; color: #4a4a7a; font-size: 13px; font-weight: 500; transition: all 0.15s; }
    .cm-link:hover { background: #eef1ff; border-color: #667eea; transform: translateY(-1px); }
    .cm-link .icon { font-size: 14px; }
    .cm-note { padding: 12px 14px; background: #fff8e1; border-left: 4px solid #ffb300; border-radius: 6px; font-size: 12px; color: #5d4037; line-height: 1.6; }
    .cm-section-note { font-size: 11px; color: #aaa; margin-top: 6px; }
    @media (max-width: 600px) {
      .cm-modal { margin: 0; }
      .cm-header, .cm-body { padding-left: 18px; padding-right: 18px; }
      .cm-grid { grid-template-columns: 90px 1fr; }
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.id = 'company-modal';
  overlay.className = 'cm-overlay';
  overlay.innerHTML = `
    <div class="cm-modal" role="dialog">
      <div class="cm-header">
        <button class="cm-close" aria-label="閉じる">×</button>
        <div class="cm-logo-row">
          <div id="cm-logo-wrap"></div>
          <div>
            <div class="cm-name" id="cm-name"></div>
            <div class="cm-tags" id="cm-tags"></div>
          </div>
        </div>
      </div>
      <div class="cm-body">
        <div class="cm-section">
          <h3>基本情報</h3>
          <div class="cm-grid" id="cm-basic">
            <div class="k">就活偏差値</div><div class="v" id="cm-h">-</div>
            <div class="k">階層</div><div class="v" id="cm-tier">-</div>
            <div class="k">本社</div><div class="v"><span class="sub">マイナビ / 公式サイトで確認</span></div>
            <div class="k">業種</div><div class="v"><span class="sub">マイナビ / 公式サイトで確認</span></div>
            <div class="k">設立</div><div class="v"><span class="sub">マイナビ / 公式サイトで確認</span></div>
            <div class="k">資本金</div><div class="v"><span class="sub">有価証券報告書で確認</span></div>
            <div class="k">売上高</div><div class="v"><span class="sub">統合報告書 / IRで確認</span></div>
            <div class="k">従業員</div><div class="v"><span class="sub">有価証券報告書で確認</span></div>
          </div>
          <div class="cm-section-note">※ 数値は年度で変動します。最新値は下記公式ソースから取得してください。</div>
        </div>

        <div class="cm-section">
          <h3>公式情報ソース</h3>
          <div class="cm-links" id="cm-official-links"></div>
        </div>

        <div class="cm-section">
          <h3>採用・働き方</h3>
          <div class="cm-links" id="cm-recruit-links"></div>
        </div>

        <div class="cm-section">
          <h3>理念・沿革・事業内容</h3>
          <div class="cm-links" id="cm-about-links"></div>
        </div>

        <div class="cm-note">
          本画面は就活偏差値と外部公式ソースへの導線を集約したものです。
          基本情報・理念・沿革・働き方データ・採用実績の最新値は、
          各社の <strong>マイナビ企業ページ / 統合報告書 / 有価証券報告書 / 公式採用サイト</strong> をご確認ください。
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('cm-close')) {
      overlay.classList.remove('show');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('show');
  });
}

function tierLabel(h) {
  if (h >= 78) return '最上位 (外資金融・商社トップ級)';
  if (h >= 75) return '東京一工･大勝レベル';
  if (h >= 70) return '東京一工･勝ちレベル';
  if (h >= 66) return '地帝早慶･大勝レベル';
  if (h >= 61) return 'MARCH･大勝レベル';
  if (h >= 56) return 'MARCH･勝ちレベル';
  if (h >= 50) return '日東駒専･勝ちレベル';
  return '一般層';
}

function showCompanyDetail(rawName) {
  ensureCompanyModal();
  const name = rawName.replace(/[↑↓]/g, '').trim();
  const hensachi = COMPANY_HENSACHI_MAP[rawName] ?? '-';
  const baseName = name.split(/[(（]/)[0].trim();
  const q = encodeURIComponent(baseName);
  const qFull = encodeURIComponent(name);

  document.getElementById('cm-name').textContent = name;

  const tagsEl = document.getElementById('cm-tags');
  tagsEl.innerHTML = '';
  if (hensachi !== '-') {
    const t1 = document.createElement('span'); t1.className = 'cm-tag'; t1.textContent = '偏差値 ' + hensachi;
    tagsEl.appendChild(t1);
    const t2 = document.createElement('span'); t2.className = 'cm-tag'; t2.textContent = tierLabel(hensachi);
    tagsEl.appendChild(t2);
  }

  document.getElementById('cm-h').textContent = hensachi;
  document.getElementById('cm-tier').textContent = hensachi !== '-' ? tierLabel(hensachi) : '-';

  const logoWrap = document.getElementById('cm-logo-wrap');
  logoWrap.innerHTML = '';
  const domain = guessDomain(rawName);
  if (domain) {
    const img = document.createElement('img');
    img.className = 'cm-logo';
    img.src = 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=128';
    img.alt = name;
    img.onerror = () => { img.replaceWith(createLogoPlaceholder(baseName)); };
    logoWrap.appendChild(img);
  } else {
    logoWrap.appendChild(createLogoPlaceholder(baseName));
  }

  const recruitDirect = getDirectUrl(rawName, 'recruit');
  const irDirect = getDirectUrl(rawName, 'ir');

  const official = [
    {
      label: recruitDirect ? '採用情報（公式）' : '公式サイト',
      icon: '🌐',
      url: recruitDirect || (domain ? 'https://' + domain + '/' : 'https://www.google.com/search?q=' + q + '+新卒採用+公式')
    },
    {
      label: irDirect ? '統合報告書（公式）' : '統合報告書',
      icon: '📘',
      url: irDirect || 'https://www.google.com/search?q=' + q + '+統合報告書'
    },
    { label: '有価証券報告書', icon: '📊', url: 'https://www.google.com/search?q=' + q + '+有価証券報告書' },
    { label: 'ニュース検索', icon: '📰', url: 'https://www.google.com/search?q=' + q + '&tbm=nws' }
  ];
  const recruit = [
    { label: 'マイナビ就活', icon: '🎓', url: 'https://www.google.com/search?q=' + q + '+site:job.mynavi.jp' },
    { label: 'リクナビ', icon: '📝', url: 'https://www.google.com/search?q=' + q + '+site:job.rikunabi.com' },
    { label: 'OpenWork', icon: '⭐', url: 'https://www.google.com/search?q=' + q + '+site:openwork.jp' },
    { label: '採用ホームページ', icon: '💼', url: recruitDirect || 'https://www.google.com/search?q=' + q + '+新卒採用' }
  ];
  const about = [
    { label: 'Wikipedia', icon: '📖', url: 'https://ja.wikipedia.org/wiki/Special:Search?search=' + q },
    { label: '沿革・歴史', icon: '📅', url: 'https://www.google.com/search?q=' + q + '+沿革' },
    { label: '事業内容', icon: '🏢', url: 'https://www.google.com/search?q=' + q + '+事業内容' },
    { label: '企業理念', icon: '✨', url: 'https://www.google.com/search?q=' + q + '+企業理念+パーパス' }
  ];

  renderLinks('cm-official-links', official);
  renderLinks('cm-recruit-links', recruit);
  renderLinks('cm-about-links', about);

  document.getElementById('company-modal').classList.add('show');
}

function createLogoPlaceholder(name) {
  const ph = document.createElement('div');
  ph.className = 'cm-logo-placeholder';
  ph.textContent = (name[0] || '?');
  return ph;
}

function renderLinks(containerId, links) {
  const el = document.getElementById(containerId);
  el.innerHTML = links.map(l =>
    '<a class="cm-link" href="' + l.url + '" target="_blank" rel="noopener"><span class="icon">' + l.icon + '</span><span>' + l.label + '</span></a>'
  ).join('');
}

window.showCompanyDetail = showCompanyDetail;
