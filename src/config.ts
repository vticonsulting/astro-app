export const SITE = {
  title: 'Docs',
  description: 'Docs description.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
};

export const SIDEBAR = {
  en: [
    { text: 'Guide', header: true },
    { text: 'Inbox', link: 'en/inbox' },
    // { text: 'Introduction', header: true },
    { text: 'Getting Started', link: 'en/introduction' },
    { text: 'Guide', link: 'en/guide' },
    { text: 'Features', link: 'en/features' },

    { text: 'Reference', header: true },
    { text: 'App Services', link: 'en/app-services' },
    { text: 'Apps', link: 'en/apps' },
    { text: 'Azure Functions API', link: 'en/azure-functions-api' },
    { text: 'Azure Service Bus', link: 'en/azure-service-bus' },
    { text: 'Cheatsheets', link: 'en/cheatsheets' },
    { text: 'Components', link: 'en/components' },
    { text: 'Design System', link: 'en/design-system' },
    { text: 'Entities', link: 'en/entities' },
    { text: 'Enums', link: 'en/enums' },
    { text: 'Exemplar Core API', link: 'en/exemplar-core-api' },
    { text: 'Impersonate', link: 'en/impersonate' },
    { text: 'Integrations', link: 'en/integrations' },
    { text: 'Layouts', link: 'en/layouts' },
    { text: 'Modules', link: 'en/modules' },
    { text: 'Pages', link: 'en/pages' },
    { text: 'PIF Details', link: 'en/pif-details' },
    { text: 'PIF Refresh', link: 'en/pif-refresh' },
    { text: 'Project Statuses', link: 'en/project-statuses' },
    { text: 'Property Inspection Form', link: 'en/property-inspection-form' },
    { text: 'Redis Cache', link: 'en/redis-cache' },
    { text: 'Service Types', link: 'en/service-types' },
    { text: 'Teams', link: 'en/teams' },
    { text: 'Tech Stacks', link: 'en/tech-stacks' },
    { text: 'User Types', link: 'en/user-types' },
    { text: 'Utilities', link: 'en/utilities' },
    { text: 'Vendors', link: 'en/vendors' },
    { text: 'Web APIs', link: 'en/web-apis' },
  ],
};
