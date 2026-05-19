import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

export const Theme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          0: "#ffffff",
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#8183f4",
          500: "#6366f1",
          600: "#5458d6",
          700: "#4549b3",
          800: "#363885",
          900: "#2e2f6f",
        },
        grayscale: {
          0: "#ffffff",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#353535",
        },
      },
    },
  },
});
