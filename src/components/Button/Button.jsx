/* eslint-disable react/prop-types */
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-base ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-primary',
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        default: 'px-[52px] py-[17px]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = ({ children, className, variant, size, type }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      style={{
        background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
      }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
