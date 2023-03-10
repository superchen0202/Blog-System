# Webpack, Babel config setting for React Project：

[Setup react with webpack and babel](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9#aa06)

# Github：push remote with SSH key

[Git 踩坑紀錄（二）git clone with SSH keys 或 HTTPS 設定步驟](https://tsengbatty.medium.com/git-%E8%B8%A9%E5%9D%91%E7%B4%80%E9%8C%84-%E4%BA%8C-git-clone-with-ssh-keys-%E6%88%96-https-%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F-bdb721bd7cf2)

# CSS Module：

1.  [CSS class names with an hyphen(-) don't work in CSS Modules #11155](https://github.com/facebook/create-react-app/issues/11155)<br/>
2.  [For local class names camelCase naming is recommended, but not enforced.](https://github.com/css-modules/css-modules#naming)<br/>
3.  [Cannot find module './style.module.scss' or its corresponding type declarations](https://lwebapp.com/en/post/cannot-find-module-scss)

# Tailwind CSS：

- Step for tailwind css integration with react project and webpack

1. Install Dependencies:
   - 3 basic：`npm install tailwindcss autoprefixer postcss`
   - webpack loader：`npm install postcss-loader`, and its rules for webpack.
   - built-in plugin：
     - typography 排版：`npm install @tailwindcss/typography`
     - [表單](https://github.com/tailwindlabs/tailwindcss-forms)：`npm install @tailwindcss/forms`
2. Add tailwind config：
   - `npx tailwindcss init` vs `npx tailwindcss init --full`
     - 完整預設配置：官方建議只在需要客製化的地方，使用覆蓋取代預設樣式，避免引入太多沒用到的樣式，CSS 變太肥
   - content: ["./src/**/*.{html,js,jsx}"],
3. Add `app.scss`：add `@tailwind base;` `@tailwind components;` `@tailwind utilities;` in `app.scss` to apply tailwind css.
4. `import "./css/app.scss";`：for the file(`index.jsx`) need to apply tailwind css.

---

- [自訂樣式套件起手式](https://tailwindcss.com/docs/plugins#official-plugins)：自定義套件是寫在 tailwind.config.js 這支檔案中，並且要指定引入哪一個自定義套件，在 plugins 的陣列中使用函式來設定，函式用一個物件給與數個函式名稱，常用的分別為：
  - `addUtilities()`：註冊新的功能樣式
  - `addComponents()`：註冊新的元件樣式
  - `addBase()`：註冊新的基本樣式
  - `addVariant()`：註冊自定義變體
  - `theme()`：找尋使用者在主題已配置的值
  - `variants()`：找尋使用者在變體中已配置的值

* tailwindcss 編譯指令：`npx tailwindcss -i ./src/css/app.scss -o ./dist/tailwind.css --watch`
* [fix: support several `@font-face` rules in tailwind config](https://github.com/tw-in-js/twind/pull/129)

# Typescript：

- 基本指令：
  - 安裝：`npm install typescript`
  - 版號查看：`tsc -v`
  - 編譯指令：`tsc File.ts`
  - 配置 TS config 檔：`tsc --init`
    - "rootDir": "./src"配置好後， npx tsc 指令會預設到 src 編譯 index.ts
    - "outDir": "./dist",配置好後，npx tsc 編譯完成後的指令會輸出到 dist 底下變成 js 檔
    - "inlineSourceMap": true：可以讓編譯後的 JS，對應到編譯前的 TS 檔的內容
  - 檔案異動自動編譯：`tsc --watch`

---

- 在 React 專案整合 TS(會花比較多時間在定型別)：

  - tsconfig.json：

    ```
    /* JavaScript Support */
    "allowJs": true,
    ```

    - .jsx ⇒ .tsx
    - .js ⇒ .ts

  - function：
    ```
    const App: React.FC <PropsType>= (props) ⇒ {
        return (
            <div className="root">
                ...
            </div>
        )
    }
    ```
  - 另一種寫法(較推薦 ES6)：
    ```
    function App( {name}: TitleProps ){
        return (
            <div className="root">
                ...
            </div>
        )
    }
    ```
  - `type`實務上會比`interface`更常用到(Maybe)
  - hooks：
    - useState
      ```
      const [ title, setTitle ] = React.useState<string | number>(5566);
      ```
