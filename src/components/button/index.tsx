import { type Component, type JSX } from 'solid-js';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'active:scale-95 text-nowrap inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-800',
        ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
      },
      size: {
        default: 'w-auto h-10 py-2 px-4',
        sm: 'h-9 px-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      class={buttonVariants({
        variant: props.variant,
        size: props.size,
        class: props.class,
      })}
      disabled={props.isLoading}
    >
      {props.isLoading ? (
        <div class="i-mingcute-loading-fill mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {props.children}
    </button>
  );
};

export default Button;
