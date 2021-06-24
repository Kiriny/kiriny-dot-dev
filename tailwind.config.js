module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                orange: {
                    'theme': '#fca311',
                },
                gray: {
                    'theme': '#e5e5e5',
                },
            },
            screens: {
                'print': {'raw': 'print'},
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
