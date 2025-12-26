import { CalloutAttributes } from "$lib/types/callout.js";
import { component, type AstroMarkdocConfig } from "@astrojs/markdoc/config";
import { IconAttributes } from "./types/icon.ts";

export interface MdocifyConfig {
}

export const defaultConfig = {
} satisfies MdocifyConfig


export default function mdocify(config?: MdocifyConfig) {
    const c = {
        ...defaultConfig,
        ...config,
    };

    return ({
        tags: {
            callout: {
                render: component('$lib/components', 'Callout'),
                attributes: CalloutAttributes
            },
            icon: {
                render: component('$lib/components', 'Icon'),
                attributes: IconAttributes
            }
        }
    } satisfies AstroMarkdocConfig)
}