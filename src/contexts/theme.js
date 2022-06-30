// import { createContext, useState } from "react";

// const themes = {
//     dark:{
//       background: 'black',
//       color: 'white'
//     },
//     light:{
//       background: 'white',
//       color: 'black'
//     },
//   };

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(false);
//   const theme = isDark ? themes.dark : theme.light;
//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

// return (
//   <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>
//     {children}
//     </ThemeContext.Provider>
//   );
// };