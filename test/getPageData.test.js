'use strict';

const getPageData = require('../src/getPageData');

test('Empty values', () => {
  const result = {};
  expect(getPageData()).toStrictEqual(result);
  expect(getPageData('', '')).toStrictEqual(result);
  expect(getPageData(null, null)).toStrictEqual(result);
});

test('Empty values, except url', () => {
  const result = {
    'domain': 'www.example.com',
    'url': 'https://www.example.com/some_link',
  };
  expect(getPageData('', 'https://www.example.com/some_link')).toStrictEqual(result);
});

test('Open Graph', () => {
  const data = `<meta property="og:image" content="https://opengraph.githubassets.com/808fba54ffaaf0f81e58f3acd753c3b19d18a01da0c789c1a4c9db9165ac2947/aloskutov/eleventy-plugin-external-links" />
<meta property="og:image:alt" content="Add to external links &amp;quot;rel=&amp;#39;noreferrer nofollow noopener external&amp;#39; target=&amp;#39;_blank&amp;#39;&amp;quot; - aloskutov/eleventy-plugin-external-links: Add to external links &amp;quot;rel=&amp;#39;norefe..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="600" />
<meta property="og:site_name" content="GitHub" />
<meta property="og:type" content="object" />
<meta property="og:title" content="aloskutov/eleventy-plugin-external-links: Add to external links &quot;rel=&#39;noreferrer nofollow noopener external&#39; target=&#39;_blank&#39;&quot;" />
<meta property="og:url" content="https://github.com/aloskutov/eleventy-plugin-external-links" />
<meta property="og:description" content="Add to external links &amp;quot;rel=&amp;#39;noreferrer nofollow noopener external&amp;#39; target=&amp;#39;_blank&amp;#39;&amp;quot; - aloskutov/eleventy-plugin-external-links: Add to external links &amp;quot;rel=&amp;#39;norefe..." />`;

  const result = {
    'description': 'Add to external links &quot;rel=&#39;noreferrer nofollow noopener external&#39; target=&#39;_blank&#39;&quot; - aloskutov/eleventy-plugin-external-links: Add to external links &quot;rel=&#39;norefe...',
    'domain': 'github.com',
    'image': 'https://opengraph.githubassets.com/808fba54ffaaf0f81e58f3acd753c3b19d18a01da0c789c1a4c9db9165ac2947/aloskutov/eleventy-plugin-external-links',
    'title': `aloskutov/eleventy-plugin-external-links: Add to external links "rel='noreferrer nofollow noopener external' target='_blank'"`,
    'url': 'https://github.com/aloskutov/eleventy-plugin-external-links',
  };
  expect(getPageData(data)).toStrictEqual(result);
});

test('Open Graph: Twitter', () => {
  const data = `<meta name="twitter:image:src" content="https://opengraph.githubassets.com/808fba54ffaaf0f81e58f3acd753c3b19d18a01da0c789c1a4c9db9165ac2947/aloskutov/eleventy-plugin-external-links" />
<meta name="twitter:site" content="@github" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="aloskutov/eleventy-plugin-external-links: Add to external links &quot;rel=&#39;noreferrer nofollow noopener external&#39; target=&#39;_blank&#39;&quot;" />
<meta name="twitter:description" content="Add to external links &amp;amp;quot;rel=&amp;amp;#39;noreferrer nofollow noopener external&amp;amp;#39; target=&amp;amp;#39;_blank&amp;amp;#39;&amp;amp;quot; - aloskutov/eleventy-plugin-external-links: Add to external lin..." />
<meta property="og:site_name" content="GitHub" />
<meta property="og:type" content="object" />
<meta property="og:url" content="https://github.com/aloskutov/eleventy-plugin-external-links" />`;

  const result = {
    'description': `Add to external links &amp;quot;rel=&amp;#39;noreferrer nofollow noopener external&amp;#39; target=&amp;#39;_blank&amp;#39;&amp;quot; - aloskutov/eleventy-plugin-external-links: Add to external lin...`,
    'domain': 'github.com',
    'image': 'https://opengraph.githubassets.com/808fba54ffaaf0f81e58f3acd753c3b19d18a01da0c789c1a4c9db9165ac2947/aloskutov/eleventy-plugin-external-links',
    'title': `aloskutov/eleventy-plugin-external-links: Add to external links "rel='noreferrer nofollow noopener external' target='_blank'"`,
    'url': 'https://github.com/aloskutov/eleventy-plugin-external-links',
  };
  expect(getPageData(data)).toStrictEqual(result);
});

test('Page Data', () => {
  const data = ` <title>aloskutov/eleventy-plugin-external-links: Add to external links &quot;rel=&#39;noreferrer nofollow noopener external&#39; target=&#39;_blank&#39;&quot;</title>
  <meta name="description" content="Add to external links &quot;rel=&#39;noreferrer nofollow noopener external&#39; target=&#39;_blank&#39;&quot; - aloskutov/eleventy-plugin-external-links: Add to external links &quot;rel=&#39;noreferrer nofollow noopener external&#39; target=&#39;_blank&#39;&quot;">
  <link rel="canonical" href="https://github.com/aloskutov/eleventy-plugin-external-links" data-pjax-transient>
  <link rel="img_src" href="https://www.example.com/some-image.jpg">`;

  const result = {
    'description': `Add to external links "rel='noreferrer nofollow noopener external' target='_blank'" - aloskutov/eleventy-plugin-external-links: Add to external links "rel='noreferrer nofollow noopener external' target='_blank'"`,
    'domain': 'github.com',
    'image': 'https://www.example.com/some-image.jpg',
    'title': `aloskutov/eleventy-plugin-external-links: Add to external links "rel='noreferrer nofollow noopener external' target='_blank'"`,
    'url': 'https://github.com/aloskutov/eleventy-plugin-external-links',
  };
  expect(getPageData(data)).toStrictEqual(result);
});
