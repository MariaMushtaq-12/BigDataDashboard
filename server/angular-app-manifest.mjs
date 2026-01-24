
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1681, hash: 'e0e1e19f2775ba12f4f3dbd94566f30d80ab0bc7fbe90752cdca535972c0b248', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '84254399a571fc9d3fbcb183dd11e9337f1b6403d24bb6f863868d8f8827d809', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28606, hash: '7c1e40cdcd941730590f9af5350eed4e3909d809cf2e847cc599e0cb4d4979f1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'main-FT665BDZ.css': {size: 5349, hash: 'z2pKK9D+/Ao', text: () => import('./assets-chunks/main-FT665BDZ_css.mjs').then(m => m.default)},
    'main.server.css': {size: 5349, hash: 'z2pKK9D+/Ao', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-EP5ZONXV.css': {size: 3513, hash: 'qs78Mh+CaXQ', text: () => import('./assets-chunks/styles-EP5ZONXV_css.mjs').then(m => m.default)}
  },
};
