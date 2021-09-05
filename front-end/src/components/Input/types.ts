interface Props {
    name: string;
    label?: string;
}

export type InputProps = JSX.IntrinsicElements['input'] & Props;

