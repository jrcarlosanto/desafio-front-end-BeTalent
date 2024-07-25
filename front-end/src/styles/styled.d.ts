import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      backgroundHeader: string,
      primaryText: string,
      secondaryText: string,
      primary: string,
      secondary: string,
      placeholder: string,
    }
  }
}
