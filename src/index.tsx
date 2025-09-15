// Main entry point for the react-flip-clock-lib package
export { default as FlipClock } from './FlipClock';
export type { FlipClockProps } from './types';
export { defaultProps } from './constants';

// Re-export all hooks for advanced usage
export { useFlipClockTime, useShuffleState, useCheckMobile } from './hooks';

// Re-export components for customization
export { FlipUnitContainer, AnimatedCard, StaticCard } from './components';
