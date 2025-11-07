export interface LayoutConfig {
  header: boolean;
  footer: boolean;
  sidebar: boolean;
  navbar: boolean;
  bottomNavbar: boolean;
}

const DEFAULT_LAYOUT_CONFIG: LayoutConfig = {
  header: false,
  footer: false,
  sidebar: false,
  navbar: false,
  bottomNavbar: false,
};

export function createLayoutConfig(partial?: Partial<LayoutConfig>): LayoutConfig {
  return { ...DEFAULT_LAYOUT_CONFIG, ...partial };
}