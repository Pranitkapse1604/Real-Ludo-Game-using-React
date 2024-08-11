/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
         'tablet': '380px' ,
         'mdsize': '600px',
         'lgsize':'900px',
         'llgsize':'1000px'
,     },
    extend: {
      animation:{
        'scaler':'showingtext 1s linear infinite',
        
      },
      keyframes:{
        showingtext:{
         '0%':{
              transform:'scale(1)',
             
          },
          '50%':{
                 transform:'scale(1.5)',
                
          },
          '100%':{
               transform:'scale(1)',  
          }
      },
     
      
      },
    },
  },
  plugins: [],
}

