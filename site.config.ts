import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ee564f56996a4935a9be1a61efd0831a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '6fac091b-bfb1-4410-8ab0-3f4a4d32eff3',

  // basic site info (required)
  name: 'Intention',
  domain: 'intention.so',
  author: 'Jonathan Leung',

  // open graph metadata (optional)
  description: 'Intention is your AI companion that makes it easy to be intentional & effective.',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '💌 Project Updates',
      pageId: '342aa007cd1a4138a24fa8e44d76cb69'
    },
    {
      title: '👋 Say Hi!',
      pageId: '6e409983936943f19a8f98a0156e9729'
    }
  ],
  isSearchEnabled: false,
})
