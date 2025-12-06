import cx from 'clsx';
import styles from './button.module.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(styles.button, styles[variant], styles[size])}
      {...props}
    >
      {label || children}
    </button>
  );
};
