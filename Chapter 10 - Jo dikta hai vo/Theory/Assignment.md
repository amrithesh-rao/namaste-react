# 1. Explore all the ways of writing css.
- inline, internal and external css
- can use sass, scss, styled-component, material-ui, bootstrap, chakra-ui, ant-design, tailwind are also popular
# 2. How do we configure tailwind?
- install tailwind first. npx tailwind init will create config file. should add which type of content should be used in config. add css file and import tailwind files there. use tailwind in app and build the app. make sure postcss also installed which will convert tailwind css style to normal css while building using parcel. 
# 3. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
- content: The content key helps Tailwind CSS identify which files to process and extract utility classes from.
- theme: The theme key allows you to customize default styles and extend or override the default configuration provided by Tailwind CSS
- extend: The extend key is often used to add new styles or extend existing ones
- plugin: The plugins key lets you incorporate third-party plugins or create your own custom plugins. Plugins can add new features, styles, or utilities to Tailwind CSS
# 4. Why do we have .postcssrc file?
- The  .postcssrc  file, often named postcss.config.js, is a configuration file for PostCSS.
- PostCSS is a tool for transforming styles with JavaScript plugins, and it is commonly used in conjunction with build tools like webpack or parcel for processing and optimizing CSS
- its act as if its babel for tailwind. it converts advanced css to regular css