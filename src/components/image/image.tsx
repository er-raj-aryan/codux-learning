import classNames from 'classnames';
import styles from './image.module.scss';

export interface ImageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Image = ({ className }: ImageProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
