import { component, type AstroMarkdocConfig } from "@astrojs/markdoc/config";

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
                render: component("@mdocify/components", 'Callout'),
                attributes: {
                    title: {
                        type: String,
                        required: true
                    },
                    type: {
                        type: String,
                        matches: ["tip", "warning", "danger", "success"],
                        required: false,
                        default: "tip"
                    }
                }
            },
            icon: {
                render: component("@mdocify/components", 'Icon'),
                attributes: {
                    name: {
                        type: String,
                        required: true,
                    },
                    slot: {
                        type: String,
                        required: false,
                    },

                }
            }
        }
    } satisfies AstroMarkdocConfig)
}
