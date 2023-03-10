import React from 'react';
import {
  CopyBlock,
  a11yDark,
  a11yLight,
  anOldHope,
  androidstudio,
  arta,
  atomOneDark,
  atomOneLight,
  codepen,
  dracula,
  far,
  github,
  googlecode,
  hopscotch,
  hybrid,
  irBlack,
  monoBlue,
  monokaiSublime,
  monokai,
  nord,
  // noctisViola, // Noctis Viola does not work. I tried multiple spellings just in case.
  obsidian,
  ocean,
  paraisoDark,
  paraisoLight,
  pojoaque,
  purebasic,
  railscast,
  rainbow,
  shadesOfPurple,
  solarizedDark,
  solarizedLight,
  sunburst,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  tomorrowNight,
  tomorrow,
  vs2015,
  xt256,
  zenburn } from 'react-code-blocks';


export default function OneBlock({block}) {

  const textSnippet = `// Displaying the ${block.themeName} theme
import { CopyBlock, ${block.themeNow} } from 'react-code-blocks';

const MyCodeComponent = () => (
  <CopyBlock
    text="HELLO FROM LITTLE CTHULHU!"
    theme={${block.themeNow}}
    language="js"
  />
)`;

  const matchVariable = Number(block.id);

  const renderTheme = (val) => (
    {
      1: a11yDark,
      2: a11yLight,
      3: anOldHope,
      4: androidstudio,
      5: arta,
      6: atomOneDark,
      7: atomOneLight,
      8: codepen,
      9: dracula,
      10: far,
      11: github,
      12: googlecode,
      13: hopscotch,
      14: hybrid,
      15: irBlack,
      16: monoBlue,
      17: monokaiSublime,
      18: monokai,
      19: nord,
      20: obsidian,
      21: ocean,
      22: paraisoDark,
      23: paraisoLight,
      24: pojoaque,
      25: purebasic,
      26: railscast,
      27: rainbow,
      28: shadesOfPurple,
      29: solarizedDark,
      30: solarizedLight,
      31: sunburst,
      32: tomorrowNightBlue,
      33: tomorrowNightBright,
      34: tomorrowNightEighties,
      35: tomorrowNight,
      36: tomorrow,
      37: vs2015,
      38: xt256,
      39: zenburn,
    }[val]
  );
  // To get this to work I had to change it to a function, and it was important
  // that the variable for the theme be as is with nothing like backticks or
  // quotes around it. The versions with the quotes in spans and such worked
  // without a problem, but the themes would either just go to the default or be
  // something else entirely.
  const currentTheme = renderTheme(matchVariable);

  return (
    <div className="code-block">
      <hr />
      <span>{block.id}. {block.themeName} Theme</span>
      <span>{"  "}</span>
      <hr />
      <CopyBlock
        key={block.id}
        text={textSnippet}
        language="js"
        showLineNumbers
        codeBlock
        theme={currentTheme}
      />
    </div>
  );
}
