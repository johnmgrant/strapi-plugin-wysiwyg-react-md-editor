import pluginPkg from '../../package.json';
import {PLUGIN_ID} from './utils/pluginId';

import 'katex/dist/katex.min.css';
import '@uiw/react-markdown-preview/markdown.css';
import '../../styles/component-styles.css';

import {Initializer} from './components/Initializer';
import ReactMdEditor from './components/ReactMdEditor';

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    app.addFields({type: 'wysiwyg', Component: ReactMdEditor});

    app.customFields.register({
      name,
      type: 'richtext',
      pluginId: PLUGIN_ID,
      intlLabel: {
        id: `${PLUGIN_ID}.label`,
        defaultMessage: PLUGIN_ID,
      },
      intlDescription: {
        id: `${PLUGIN_ID}.description`,
        defaultMessage: 'The markdown text editor for every use case',
      },
      components: {
        Input: async () => await import('./components/CustomField'),
      },
    });

    const plugin = {
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);
  },

  bootstrap(app: any) {},

  async registerTrads({locales}: any) {
    const importedTrads = await Promise.all(
      locales.map((locale: any) => {
        return import(`./translations/${locale}.json`)
          .then(({default: data}) => {
            return {
              data: data,
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
