export type ButtonState = "fetching" | "active";

export interface ButtonType {
    name: string;
    state: ButtonState;
    label: string;
    form?: string;
}
