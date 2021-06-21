export interface TextFieldConstraints {
    required?: boolean;
    email?: boolean;
    identical?: {
        to: string;
        msg: string;
    };
}

export interface TextFieldType {
    form?: string;
    name: string;
    value: string;
    errorTxt?: string;
    helperTxt?: string;
    label: string;
    constraints?: TextFieldConstraints;
    isFocus: boolean;
}
