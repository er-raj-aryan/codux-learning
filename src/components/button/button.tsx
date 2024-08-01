import classNames from 'classnames';
import styles from './button.module.scss';
import { Children } from 'react';

export interface ButtonProps {
    className?: string;
    handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({ className, handleClick, children }: ButtonProps) => {
    return (
        <div className={styles.root} onClick={handleClick}>
            {children}
        </div>
    );
};
