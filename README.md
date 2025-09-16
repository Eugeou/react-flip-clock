# React Flip Clock Library

A beautiful and customizable React flip clock component with TypeScript support. This library provides a modern, animated flip clock that displays hours, minutes, and seconds with smooth flip animations. [Install here](https://www.npmjs.com/package/react-flip-clock-lib)

<img width="1503" height="533" alt="image" src="https://github.com/user-attachments/assets/36650104-cc45-47cb-add1-1a86f0f965f8" />

## Features

- **Highly Customizable**: Customize colors, sizes, fonts, and more
- **12/24 Hour Format**: Optional AM/PM display with automatic hour conversion and matching flip card styling
- **Responsive**: Automatically hides seconds on mobile devices
- **TypeScript Support**: Full TypeScript definitions included
- **Smooth Animations**: Beautiful flip animations with CSS transitions
- **Zero Dependencies**: No external dependencies required
- **Tree Shakeable**: Only import what you need

## Installation

```bash
npm install react-flip-clock-lib
```

or

```bash
yarn add react-flip-clock-lib
```

## Basic Usage

```tsx
import React from 'react';
import { FlipClock } from "react-flip-clock-lib";
import "react-flip-clock-lib/dist/index.css";

function App() {
  return (
    <div>
      <FlipClock />
    </div>
  );
}

export default App;
```

## Advanced Usage

### Custom Styling

```tsx
import React from 'react';
import { FlipClock } from "react-flip-clock-lib";
import "react-flip-clock-lib/dist/index.css";

function CustomClock() {
  return (
    <FlipClock
      width="300px"
      height="80px"
      padding="12px"
      borderRadius="16px"
      unitWidth="60px"
      unitHeight="66px"
      digitFontSize="1.5em"
      colonFontSize="1.8em"
      colonDotSize="6px"
      unitMargin="6px"
    />
  );
}
```

### Theme Customization

```tsx
import React from 'react';
import { FlipClock } from "react-flip-clock-lib";
import "react-flip-clock-lib/dist/index.css";

function ThemedClock() {
  return (
    <FlipClock
      width="250px"
      height="70px"
      backgroundColor="#e3f2fd"
      cardBackgroundColor="#1976d2"
      digitColor="#ffffff"
      colonColor="#1976d2"
      borderColor="#1565c0"
      shadowColor="rgba(25, 118, 210, 0.3)"
      unitWidth="50px"
      unitHeight="55px"
      digitFontSize="1.3em"
    />
  );
}
```

### AM/PM Display (12-Hour Format)

```tsx
import React from 'react';
import { FlipClock } from "react-flip-clock-lib";
import "react-flip-clock-lib/dist/index.css";

function ClockWithAmPm() {
  return (
    <FlipClock
      width="350px"
      height="80px"
      backgroundColor="#1a1a2e"
      cardBackgroundColor="#16213e"
      digitColor="#0f3460"
      colonColor="#e94560"
      borderColor="#0f3460"
      shadowColor="rgba(233, 69, 96, 0.3)"
      unitWidth="60px"
      unitHeight="65px"
      digitFontSize="1.5em"
      showAmPm={true}  // Enable AM/PM display
    />
  );
}
```

**Note:** When `showAmPm` is enabled:
- Hours automatically convert from 24-hour to 12-hour format
- AM/PM suffix appears as a smaller flip card with matching styling
- AM/PM suffix is 40% the size of time cards and positioned inline
- Hours 0-11 display as 12-11 AM
- Hours 12-23 display as 12-11 PM

### Using Hooks for Custom Logic

```tsx
import React from 'react';
import { useFlipClockTime, useShuffleState } from 'react-flip-clock-lib';

function CustomClockLogic() {
  const { hours, minutes, seconds } = useFlipClockTime();
  const { hoursShuffle, minutesShuffle, secondsShuffle } = useShuffleState(hours, minutes, seconds);
  
  return (
    <div>
      <p>Current time: {hours}:{minutes}:{seconds}</p>
      {/* Your custom clock implementation */}
    </div>
  );
}
```

## API Reference

### FlipClock Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `"200px"` | Overall clock width |
| `height` | `string` | `"60px"` | Overall clock height |
| `padding` | `string` | `"10px"` | Clock container padding |
| `borderRadius` | `string` | `"8px"` | Clock container border radius |
| `opacity` | `number` | `0.9` | Clock opacity (0-1) |
| `colonWidth` | `string` | `"20px"` | Colon separator width |
| `colonHeight` | `string` | `"40px"` | Colon separator height |
| `colonFontSize` | `string` | `"24px"` | Colon font size |
| `colonDotSize` | `string` | `"6px"` | Colon dot size |
| `unitWidth` | `string` | `"40px"` | Individual unit width |
| `unitHeight` | `string` | `"50px"` | Individual unit height |
| `unitBorderRadius` | `string` | `"12px"` | Unit border radius |
| `unitMargin` | `string` | `"5px"` | Margin between units |
| `digitFontSize` | `string` | `"32px"` | Digit font size |
| `fontFamily` | `string` | `"monospace"` | Font family |
| `backgroundColor` | `string` | `"white"` | Clock background color |
| `cardBackgroundColor` | `string` | `"#1a1a1a"` | Card background color |
| `digitColor` | `string` | `"white"` | Digit text color |
| `colonColor` | `string` | `"#333"` | Colon color |
| `borderColor` | `string` | `"#333"` | Border color |
| `shadowColor` | `string` | `"rgba(0, 0, 0, 0.3)"` | Shadow color |
| `showAmPm` | `boolean` | `false` | Show AM/PM suffix (12-hour format) |

### Hooks

#### `useFlipClockTime()`
Returns the current time in hours, minutes, and seconds.

```tsx
const { hours, minutes, seconds } = useFlipClockTime();
```

#### `useShuffleState(hours, minutes, seconds)`
Returns shuffle states for animation triggers.

```tsx
const { hoursShuffle, minutesShuffle, secondsShuffle } = useShuffleState(hours, minutes, seconds);
```

#### `useCheckMobile()`
Returns whether the device is mobile.

```tsx
const { isMobile } = useCheckMobile();
```

### Components

#### `FlipUnitContainer`
Individual flip unit container component.

```tsx
import { FlipUnitContainer } from 'react-flip-clock-lib';

<FlipUnitContainer unit="hours" digit={hours} shuffle={hoursShuffle} />
```

#### `AnimatedCard`
Animated card component for flip effect.

```tsx
import { AnimatedCard } from 'react-flip-clock-lib';

<AnimatedCard digit={digit} shuffle={shuffle} />
```

#### `StaticCard`
Static card component for display.

```tsx
import { StaticCard } from 'react-flip-clock-lib';

<StaticCard digit={digit} />
```

## Examples

### Default Clock
```tsx
<FlipClock />
```

### Large Clock
```tsx
<FlipClock
  width="400px"
  height="120px"
  padding="16px"
  borderRadius="20px"
  unitWidth="80px"
  unitHeight="88px"
  digitFontSize="2em"
  colonFontSize="2.4em"
  colonDotSize="8px"
/>
```

### Small Clock
```tsx
<FlipClock
  width="150px"
  height="45px"
  padding="6px"
  borderRadius="8px"
  unitWidth="30px"
  unitHeight="33px"
  digitFontSize="0.8em"
  colonFontSize="1em"
  colonDotSize="3px"
/>
```

### Dark Theme
```tsx
<FlipClock
  width="250px"
  height="70px"
  backgroundColor="#424242"
  cardBackgroundColor="#000000"
  digitColor="#00ff00"
  colonColor="#00ff00"
  borderColor="#333333"
  shadowColor="rgba(0, 255, 0, 0.3)"
  unitWidth="50px"
  unitHeight="55px"
  digitFontSize="1.3em"
/>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by [Eugeou](https://github.com/Eugeou)

## Changelog

### 1.2.2 & 1.2.3 (Latest)
- 🎨 **IMPROVED**: AM/PM suffix now uses matching flip card styling
- 📏 **IMPROVED**: AM/PM suffix is 40% the size of time cards for better proportion
- 🎯 **IMPROVED**: AM/PM suffix positioned inline with time cards
- 🧹 **CLEANUP**: Simplified AM/PM implementation and removed complex positioning
- 🐛 **FIX**: Better CSS integration and styling consistency

### 1.1.0 & 1.1.1 & 1.1.2
- ✨ **NEW**: Added AM/PM display support with `showAmPm` prop
- ✨ **NEW**: 12-hour format with automatic hour conversion
- 🎨 **NEW**: Beautiful AM/PM suffix styling
- 📚 **NEW**: Updated documentation with AM/PM examples
- 🐛 **FIX**: Improved CSS import handling

### 1.0.0
- Initial release
- Full TypeScript support
- Customizable styling
- Mobile responsive
- Smooth animations
