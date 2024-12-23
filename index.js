const Koa = require('koa');
const app = new Koa();

// Ana sayfa route'u
app.use(async (ctx) => {
    if (ctx.path === '/') {
        ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
    } else if (ctx.path === '/hakkimda') {
        ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
    } else if (ctx.path === '/iletisim') {
        ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
    } else {
        ctx.body = '<h1>404 Sayfa Bulunamadı</h1>';
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu port ${port}'de başlatıldı`);
});
