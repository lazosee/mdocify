import { component, defineMarkdocConfig } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';
import { mdocify } from './dist/index.js';

export default defineMarkdocConfig({
  extends: [
    mdocify({
    }),
    shiki({
      theme: "everforest-light"
    })
  ],
  tags: {
    div: {
      render: component('./src/dev-components', 'Div'),
      attributes: {
        value: {
          type: Object,
          required: true
        }
      }
    }
  }
});