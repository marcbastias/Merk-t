/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" // Escanea tus templates Angular y componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#9333EA',
        accent: '#F59E0B'
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      },
    }
  },
  plugins: []
};
