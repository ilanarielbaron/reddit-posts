// import original module declarations
import "styled-components";

// extend!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      textSecondary: string;
    };
  }
}
