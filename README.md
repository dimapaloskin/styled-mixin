# styled-mixin [![Build Status](https://travis-ci.org/dimapaloskin/styled-mixin.svg?branch=master)](https://travis-ci.org/dimapaloskin/styled-mixin)

Super simple wrapper for creating styled-components mixins.
Perhaps more human-readable syntax for overwrite rules

## Install

```bash
npm i --save styled-mixin
```

## Usage

### Basic

```js

import styled from 'styled-component';
import createMixin from 'styled-mixin';

const tomatoColorMixin = createMixin`
  color: tomato;
`;

const Header = styled.h1`
  color: black;
  font-size: 20px;
`;

const Button = styled.button`
  color: black;
  border: none;
`;

const TomatoHeader = tomatoColorMixin(Header);
const TomatoButton = tomatoColorMixin(Button);
```

### Animations

```js
import styled, { keyframes } from 'styled-component';
import createMixin from 'styled-mixin';

const Header = styled.h1`
  color: black;
`;

const rotate360Keyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotate = createMixin`
   animation: ${rotate360Keyframes} 2s linear infinite;
`;

const Uiiiii = rotate(Header);

```

### With props

```js

import styled from 'styled-component';
import createMixin from 'styled-mixin';

const blackOrTomatoMixin = createMixin`
  color: ${ props => props.tomato ? 'tomato' : 'black' };
`;

const Button = blackOrTomatoMixin(styled.button`
  border: none;
`);
```

```html
<Button tomato>Tomato!!!</Button>
```

### It's nestable

```js
import styled from 'styled-component';
import createMixin from 'styled-mixin';

const Header = styled.h1`
  color: black;
`;

const tomatoColorMixin = createMixin`
  color: tomato;
`;

const fontSizeMixin = createMixin`
  font-size: 20px;
`;

const TomatoHeader = tomatoColorMixin(fontSizeMixin(Header));
```

#### Author
[Dmitry Pavlovsky](http://palosk.in)
