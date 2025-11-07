import { LayoutConfig, createLayoutConfig } from '@models/layout.model';

export class Layout {
  static DEFAULT_LAYOUT: LayoutConfig = createLayoutConfig({ header: true, footer: true });
  static DASHBOARD_LAYOUT: LayoutConfig = createLayoutConfig({ header: true, sidebar: true });
  static AUTH_LAYOUT: LayoutConfig = createLayoutConfig(); 
}