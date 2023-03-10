import React from 'react';
import Container from 'react-bootstrap/Container';
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
  // noctisViola,
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

import OneBlock from './OneBlock';


export default const Blocks = () => {

  const blocks = [
    {
      id: 1,
      themeName: 'A11y Dark',
      themeNow: 'a11yDark'
    },
    {
      id: 2,
      themeName: 'A11y Light',
      themeNow: 'a11yLight'
    },
    {
      id: 3,
      themeName: 'An Old Hope',
      themeNow: 'anOldHope'
    },
    {
      id: 4,
      themeName: 'Androidstudio',
      themeNow: 'androidstudio'
    },
    {
      id: 5,
      themeName: 'Arta',
      themeNow: 'arta'
    },
    {
      id: 6,
      themeName: 'Atom One Dark',
      themeNow: 'atomOneDark'
    },
    {
      id: 7,
      themeName: 'Atom One Light',
      themeNow: 'atomOneLight'
    },
    {
      id: 8,
      themeName: 'Codepen',
      themeNow: 'codepen'
    },
    {
      id: 9,
      themeName: 'Dracula',
      themeNow: 'dracula'
    },
    {
      id: 10,
      themeName: 'Far',
      themeNow: 'far'
    },
    {
      id: 11,
      themeName: 'Github',
      themeNow: 'github'
    },
    {
      id: 12,
      themeName: 'Googlecode',
      themeNow: 'googlecode'
    },
    {
      id: 13,
      themeName: 'Hopscotch',
      themeNow: 'hopscotch'
    },
    {
      id: 14,
      themeName: 'Hybrid',
      themeNow: 'hybrid'
    },
    {
      id: 15,
      themeName: 'Ir Black',
      themeNow: 'irBlack'
    },
    {
      id: 16,
      themeName: 'Mono Blue',
      themeNow: 'monoBlue'
    },
    {
      id: 17,
      themeName: 'Monokai Sublime',
      themeNow: 'monokaiSublime'
    },
    {
      id: 18,
      themeName: 'Monokai',
      themeNow: 'monokai'
    },
    {
      id: 19,
      themeName: 'Nord',
      themeNow: 'nord'
    },
    {
      id: 20,
      themeName: 'Obsidian',
      themeNow: 'obsidian'
    },
    {
      id: 21,
      themeName: 'Ocean',
      themeNow: 'ocean'
    },
    {
      id: 22,
      themeName: 'Paraiso Dark',
      themeNow: 'paraisoDark'
    },
    {
      id: 23,
      themeName: 'Paraiso Light',
      themeNow: 'paraisoLight'
    },
    {
      id: 24,
      themeName: 'Pojoaque',
      themeNow: 'pojoaque'
    },
    {
      id: 25,
      themeName: 'Purebasic',
      themeNow: 'purebasic'
    },
    {
      id: 26,
      themeName: 'Railscast',
      themeNow: 'railscast'
    },
    {
      id: 27,
      themeName: 'Rainbow',
      themeNow: 'rainbow'
    },
    {
      id: 28,
      themeName: 'Shades of Purple',
      themeNow: 'shadesOfPurple'
    },
    {
      id: 29,
      themeName: 'Solarized Dark',
      themeNow: 'solarizedDark'
    },
    {
      id: 30,
      themeName: 'Solarized Light',
      themeNow: 'solarizedLight'
    },
    {
      id: 31,
      themeName: 'Sunburst',
      themeNow: 'sunburst'
    },
    {
      id: 32,
      themeName: 'Tomorrow Night Blue',
      themeNow: 'tomorrowNightBlue'
    },
    {
      id: 33,
      themeName: 'Tomorrow Night Bright',
      themeNow: 'tomorrowNightBright'
    },
    {
      id: 34,
      themeName: 'Tomorrow Night Eighties',
      themeNow: 'tomorrowNightEighties'
    },
    {
      id: 35,
      themeName: 'Tomorrow Night',
      themeNow: 'tomorrowNight'
    },
    {
      id: 36,
      themeName: 'Tomorrow',
      themeNow: 'tomorrow'
    },
    {
      id: 37,
      themeName: 'Vs2015',
      themeNow: 'vs2015'
    },
    {
      id: 38,
      themeName: 'Xt256',
      themeNow: 'xt256'
    },
    {
      id: 39,
      themeName: 'Zenburn',
      themeNow: 'zenburn'
    },
  ]

  return (
    <>
    {
      <>
        <Container>
          {blocks.map((block, id) => (
              <OneBlock key={id} block={block} />
          ))}
        </Container>
      </>
    }
    </>
  );
};
