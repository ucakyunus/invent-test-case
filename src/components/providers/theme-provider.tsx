import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import theme from "@/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <AppRouterCacheProvider>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </AppRouterCacheProvider>
  );
}
