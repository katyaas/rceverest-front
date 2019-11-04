const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://rceverest.ru',
  cacheTime: 600000 // 600 sec - cache purge period
});

const urls = [
  '/about',
  '/alcohol',
  '/alcohol_woman',
  '/codependency',
  '/contacts',
  '/drug_problems',
  '/ecstasy',
  '/gambling',
  '/heroin',
  '/how_works',
  '/methamphetamine',
  '/our_home',
  '/qualification',
  '/rehabilitation',
  '/salt',
  '/spice',
  '/steps12',
];

const setup = ({ server }) => {

  server.get('/sitemap.xml', (req, res) => {
    try {
      urls.forEach(url => {
        sitemap.add({
          url,
          changefreq: 'daily',
          priority: 1
        });
      });
      const xml = sitemap.toXML();
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    } catch(ex) {
      res.status(500).send(ex.toString()).end();
    }
  });
};

module.exports = setup;