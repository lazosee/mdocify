import { CircleAlert, CircleCheck, Lightbulb, TriangleAlert } from "@lucide/astro/icons/index";

export const iconsList = {
    "lightbulb": Lightbulb,
    "circle-check": CircleCheck,
    "circle-alert": CircleAlert,
    "triangle-alert": TriangleAlert
} as const;

export type IconType = keyof typeof iconsList;
