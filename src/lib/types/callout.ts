
export type CalloutType = "tip" | "warning" | "danger" | "success";

export const CalloutAttributes = {
    type: {
        type: String,
        matches: [
            "tip",
            "warning",
            "danger",
            "success"
        ] satisfies CalloutType[],
        required: false,
        default: "tip",
    },
    title: {
        type: String,
        required: true,
    },
}
