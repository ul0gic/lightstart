export namespace BREAKPOINTS {
    let xs: number;
    let sm: number;
    let md: number;
    let lg: number;
    let xl: number;
    let xxl: number;
}
export function mediaQuery(breakpoint: string): string;
export function breakpointWidth(breakpoint: string): number;
export function matchesBreakpoint(breakpoint: string): boolean;
export function getResponsiveValue(element: HTMLElement & Record<string, unknown>, baseProp: string, breakpoints?: Array<string>): unknown;
export function generateResponsiveCSS(element: HTMLElement & Record<string, unknown>, baseProp: string, cssVar: string): string;
