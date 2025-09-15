// Props interface for the FlipClock component
export interface FlipClockProps {
  /**
   * The width of the clock container
   */
  width?: string;
  /**
   * The height of the clock container
   */
  height?: string;
  /**
   * The padding of the clock container
   */
  padding?: string;
  /**
   * The border radius of the clock cards
   */
  borderRadius?: string;
  /**
   * The opacity of the clock
   */
  opacity?: number;
  /**
   * The width of the colon separator
   */
  colonWidth?: string;
  /**
   * The height of the colon separator
   */
  colonHeight?: string;
  /**
   * The font size of the colon separator
   */
  colonFontSize?: string;
  /**
   * The size of the colon dot
   */
  colonDotSize?: string;
  /**
   * The width of the unit
   */
  unitWidth?: string;
  /**
   * The height of the unit
   */
  unitHeight?: string;
  /**
   * The border radius of the unit
   */
  unitBorderRadius?: string;
  /**
   * The margin of the unit
   */
  unitMargin?: string;
  /**
   * The font size of the digit
   */
  digitFontSize?: string;
  /**
   * The font family of the clock
   */
  fontFamily?: string;
  /**
   * The background color of the clock
   */
  backgroundColor?: string;
  /**
   * The background color of the clock cards
   */
  cardBackgroundColor?: string;
  /**
   * The color of the digits
   */
  digitColor?: string;
  /**
   * The color of the colon separator
   */
  colonColor?: string;
  /**
   * The color of the border
   */
  borderColor?: string;
  /**
   * The color of the shadow
   */
  shadowColor?: string;
  /**
   * Whether to show AM/PM suffix
   */
  showAmPm?: boolean;
}
