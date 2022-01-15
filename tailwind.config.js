module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundImage: {
        'homeBackgroundDesktop': "url('/src/images/home/background-home-desktop.jpg')",
        'homeBackgroundTablet': "url('/src/images/home/background-home-tablet.jpg')",
        'homeBackgroundMobile': "url('/src/images/home/background-home-mobile.jpg')",
      }
     },
   },
   variants: {},
   plugins: [],
 }