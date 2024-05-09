
export default {
    content: ["./**/*.tsx"],
    darkMode: "class",
    theme: {
      container: { center: true },
      extend: {
        fontSize: {
          // OLD THEME
          "hero-large": ["40px", "48px"],
          "hero-medium": ["32px", "40px"],
          "hero-small": ["28px", "32px"],
          "display": ["24px", "28px"],
          "heading": ["20px", "24px"],
          "subheading": ["13px", "16px"],
          "body-strong": ["15px", "20px"],
          "body-regular": ["15px", "20px"],
          "caption-strong": ["13px", "20px"],
          "caption-regular": ["13px", "20px"],
  
          "xs": ".75rem", // 75% of the base font size
          "sm": ".875rem", // 87.5% of the base font size
          "base": "1rem", // 100% of the base font size
          "lg": "1.125rem", // 112.5% of the base font size
          "xl": "1.25rem", // 125% of the base font size
          "2xl": "1.5rem", // 150% of the base font size
          "3xl": "1.875rem", // 187.5% of the base font size
          "4xl": "2.25rem", // 225% of the base font size
          "5xl": "3rem", // 300% of the base font size
          "6xl": "4rem", // 400% of the base font size
        },
        boxShadow: {
          // TODO: Stop using this shadow
          "dark": "1px 1px 2px rgba(0, 0, 0, 0.2)",
  
          /** New design system foundations */
          "s-low-light":
            "0px 4px 8px rgba(0, 0, 0, 0.03), 0px 2px 4px rgba(0, 0, 0, 0.2)",
          "s-medium-light":
            "0px 4px 4px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.07)",
          "s-high-light":
            "0px 4px 8px rgba(0, 0, 0, 0.15), 0px 8px 32px rgba(0, 0, 0, 0.1)",
          "s-low-dark":
            "0px 4px 8px rgba(0, 0, 0, 0.53), 0px 2px 4px rgba(0, 0, 0, 0.7)",
          "s-medium-dark":
            "0px 4px 4px rgba(0, 0, 0, 0.72), 0px 8px 16px rgba(0, 0, 0, 0.67)",
          "s-high-dark":
            "0px 4px 8px rgba(0, 0, 0, 0.85), 0px 8px 32px rgba(0, 0, 0, 0.8)",
        },
        fontFamily: {
          sans: ["Albert Sans", "sans-serif"],
          serif: ["serif"],
        },
      },
    },
  };
  