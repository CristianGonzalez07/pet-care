module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sigmar: ['Sigmar One', 'cursive']
      },
      textColor: {
        'primary': '#8332AC',
        'primary-dark':"#481C5E",
        'primary-light':"#A352CB"
      },
      backgroundColor:{
        'primary': '#8332AC',
        'primary-dark':"#240E2F",
      },
      backgroundImage:{
        'texture': "url('https://duruthemes.com/demo/html/vetforpet/images/icons/bg.jpg')",
      },
      borderColor:{
        'primary': '#8332AC'
      }
    },
  },
  plugins: [],
}