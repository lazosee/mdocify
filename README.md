# Mdocify

![NPM Version](https://img.shields.io/npm/v/%40mdocify%2Fmdocify)
![NPM Downloads](https://img.shields.io/npm/d18m/%40mdocify%2Fmdocify)

A markdoc custom tags library for use with [@astrojs/markdoc](https://docs.astro.build/en/guides/integrations-guide/markdoc/) package for custom markdoc components.
It allows you to author content with enhanced Markdown features, custom tags, and seamless component integration, specifically optimized for Astro's content collections and SSR capabilities.

## 🚀 Key Features

- Component Injection: Use your Astro/React/Vue components directly inside .mdoc files.

- Type-Safe Content: Fully compatible with Astro Content Collections.

- SSR Ready: Designed to work with both static and server-rendered Astro sites.

- Custom Schemas: Easily define custom tags and attributes to extend Markdown functionality.

## 📦 Installation

Install the package via your favorite package manager:

```bash
# Using npm
npm install @mdocify/mdocify

# Using pnpm
pnpm add @mdocify/mdocify

# Using bun
bun add @mdocify/mdocify
```

## 🛠 Usage

1. Register the markdoc config extension.

   Add mdocify to your `markdoc.config.mjs` file:

   ```javascript
   import { defineMarkdocConfig } from '@astrojs/markdoc/config';
   import { mdocify } from '@mdocify/mdocify';

   export default defineMarkdocConfig({
       extends: [
           mdocify(),
           // ...other markdoc config extensions
       ],
       // ...other markdoc config options
   })
   ```

2. Configure Content Collections.

   Define your collections in src/content/config.ts using the .mdoc extension:

   ```typescript
    import { defineCollection, z } from 'astro:content';

    const docs = defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            // ...other schema fields
        }),
        // ...other collection options
    });

    export const collections = { docs };
   ```

3. Create Markdoc Content.

   Create a file at src/content/docs/hello-world.mdoc:

   ```markdown
   ---
   title: Hello World
   ---

   # Welcome to Mdocify

   This is a Markdoc file being rendered in Astro!

   {% callout type="tip" title="Crazy Awesome!" %}
   You can even use custom tags!
   {% /callout %}
   ```

## 🔌 Configuration

You can pass options to the integration to customize the Markdoc transformer:

```javascript
import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import { mdocify } from '@mdocify/mdocify';

export default defineMarkdocConfig({
    extends: [
        mdocify({
            // Override default callout colors and icons
            callout: {
                tip: {
                    color: 'green',
                    icon: 'lightbulb'
                },
                // ...
            }
            // ...other options
        }),
    ],
})
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See LICENSE for more information.

Built with ❤️ by [Lazaro Osee](https://www.lazaroosee.xyz)
