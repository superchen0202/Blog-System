//引入剛剛新增的字型 plugin
const plugin = require("tailwindcss/plugin");
// const colors = require("tailwindcss/colors");

module.exports = {

  //使用JIT模式
  // mode: 'jit',
  jit: true,

  darkMode: 'class',
  
  //tailwind style class effective scope
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}"],
  
  //customization configuration
  theme: {

    /* 好像設定了就只能吃這些設定的樣子 */
    /* 
    colors: {
          blue: "#1fb6ff",
          pink: "#ff49db",
          orange: "#ff7849",
          green: "#13ce66",
          grayDark: "#273444",
          gray: "#8492a6",
          grayLight: "#d3dce6",
    },
    // */

    //字型
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    screens:{
      // 'tablet': '640px',
      //sm => tablet
      // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      //md => laptop
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      //lg => desktop
      // => @media (min-width: 1280px) { ... }
    },

    //延伸區塊
    extend: {

      height: {
        md: "240px",
      },
      
      width: {
        md: "160px",
      },

      // extends 加入樣式
      /*
      typography: {
        
        DEFAULT: {
          
          css: {
            color: '#333',
            
            a: {
              color: '#3182ce',

              '&:hover': {
                color: '#2c5282',
              },
              
            },
          },

        },
      },
      // */

      // 包裝成函式
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            // ...
          },
        },
      }),

      //間距
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      //邊框弧度
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },

  variants: {

    extend: {
      //hover is added for customize
      borderStyle: ["responsive", "hover"],

      //邊框線條
      borderColor: ['focus-visible'],

      //透明度
      opacity: ['disabled'],
    }
  },

  plugins: [

    //排版套件
    require('@tailwindcss/typography'),

    //Form 表單套件
    require("@tailwindcss/forms")({
      //strategy: 'base',   // only generate global styles
      strategy: 'class',  // only generate classes
    }),
    /*
    若要使用自訂義套件，使用addBase 這個方法
    所有有使用 addBase 產生的樣式，都會被加到 base 的樣式中
    1. 在 plugins 的陣列中加上套件的方法，plugin()，此名稱可自訂。
    2. 裡面使用一個函式，並給予一個物件，兩個屬性addBase,theme。
    3. 函式裡面需用 addBase() 這個方法，並且塞入物件，此物件就是修改的文字屬性內容。
    */
  
    // Add your custom styles here
    // https://tailwindcss.com/docs/plugins#official-plugins
    
    ///*
    plugin(({ addBase, theme, addUtilities, addComponents, e, prefix, config }) => {
      
      //使用套件新增字型
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });

    }),
    //*/`

  ],
  
}