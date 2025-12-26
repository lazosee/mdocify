
export type { IconType } from "../icons/index.ts";

export const IconAttributes = {
    name: {
        type: String,
        required: true,
    },
    'class': {
        type: String,
        required: false,
        default: ""
    },
    slot: {
        type: String,
        required: false,
        default: "icon"
    },
}
