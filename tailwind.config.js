const colors = require("tailwindcss/colors");
const { fontFamily, spacing } = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,,tsx}",
        "./src/components/**/*.{js,ts,jsx,,tsx}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Inter", ...fontFamily.sans],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            orange: colors.orange,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.purple,
            pink: colors.pink,
        },
        zIndex: {
            "0": 0,
            "auto": "auto",
            "dropdown": 1000,
            "sticky": 1100,
            "banner": 1200,
            "overlay": 1300,
            "modal": 1400,
            "popover": 1500,
            "skipLink": 1600,
            "toast": 1700,
            "tooltip": 1800,
        },
        extend: {
            boxShadow: {
                "bottom-inset-dark": "inset 0 -1px 0 #333",
                "bottom-inset-light": "inset 0 -1px 0 #eaeaea",
            },
            opacity: {
                "4": ".04",
                "8": ".08"
            },
            width: {
                "4.5": "1.125rem",
            },
            height: {
                "4.5": "1.125rem",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.700')
                            },
                            code: { color: theme('colors.blue.400') }
                        },
                        'h2,h3,h4': {
                            'scroll-margin-top': spacing[32]
                        },
                        code: { color: theme('colors.pink.500') },
                        'blockquote p:first-of-type::before': false,
                        'blockquote p:last-of-type::after': false
                    }
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.blue.400'),
                            '&:hover': {
                                color: theme('colors.blue.600')
                            },
                            code: { color: theme('colors.blue.400') }
                        },
                        blockquote: {
                            borderLeftColor: theme('colors.gray.700'),
                            color: theme('colors.gray.300')
                        },
                        'h2,h3,h4': {
                            color: theme('colors.gray.100'),
                            'scroll-margin-top': spacing[32]
                        },
                        hr: { borderColor: theme('colors.gray.700') },
                        ol: {
                            li: {
                                '&:before': { color: theme('colors.gray.500') }
                            }
                        },
                        ul: {
                            li: {
                                '&:before': { backgroundColor: theme('colors.gray.500') }
                            }
                        },
                        strong: { color: theme('colors.gray.300') },
                        thead: {
                            color: theme('colors.gray.100')
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700')
                            }
                        }
                    }
                }
            })
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
    ],
}
