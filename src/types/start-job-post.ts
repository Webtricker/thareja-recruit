export interface ProjectTypeCardPropsType {
    title: string;
    description: string;
    selected?: boolean;
    cardImageUrl: string;
    onClick?:  (title: string) => void;
}
