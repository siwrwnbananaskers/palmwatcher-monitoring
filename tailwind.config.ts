
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Custom colors for our palm oil monitoring app
                palm: {
                    50: '#f0f9e6',
                    100: '#dff2cc',
                    200: '#bfe599',
                    300: '#9ed866',
                    400: '#7ecc33',
                    500: '#5ebd00',
                    600: '#4b9700',
                    700: '#387100',
                    800: '#254b00',
                    900: '#122500',
                },
                soil: {
                    50: '#f9f5e9',
                    100: '#f3ebd3',
                    200: '#e8d7a7',
                    300: '#dcc37b',
                    400: '#d0af4f',
                    500: '#c49a23',
                    600: '#a06f20',
                    700: '#7c511c',
                    800: '#573618',
                    900: '#331c14',
                },
                sky: {
                    50: '#effaff',
                    100: '#def0ff',
                    200: '#b6e5ff',
                    300: '#75d3ff',
                    400: '#2cbdff',
                    500: '#00a3ff',
                    600: '#0083db',
                    700: '#0068b0',
                    800: '#005791',
                    900: '#003b66',
                },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    from: {
                        opacity: '0'
                    },
                    to: {
                        opacity: '1'
                    }
                },
                'fade-up': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'scale-in': {
                    from: {
                        opacity: '0',
                        transform: 'scale(0.95)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'scale(1)'
                    }
                },
                'blur-in': {
                    from: {
                        opacity: '0',
                        filter: 'blur(10px)'
                    },
                    to: {
                        opacity: '1',
                        filter: 'blur(0)'
                    }
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-up': 'fade-up 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'blur-in': 'blur-in 0.5s ease-out',
			},
            fontFamily: {
                'sf': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
                'elevated': '0 10px 30px rgba(0, 0, 0, 0.08)',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-palm': 'linear-gradient(to right, #5ebd00, #4b9700)',
                'gradient-soil': 'linear-gradient(to right, #a06f20, #7c511c)',
            },
            backdropBlur: {
                'xs': '2px',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
