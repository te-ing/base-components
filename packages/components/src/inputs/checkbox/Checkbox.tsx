import cx from 'clsx';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'type' | 'size'
> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  label,
  size = 'md',
  disabled = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className={cx(styles.checkboxWrapper, styles[size], { [styles.disabled]: disabled })}>
      <input
        type="checkbox"
        className={styles.checkbox}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
