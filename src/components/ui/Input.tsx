import { FC, InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>((
  { label, error, helper, className = '', ...props },
  ref
) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-white text-sm font-medium">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full px-4 py-2 rounded-lg bg-[#363636] text-white 
          border border-[#4A6B8A] focus:ring-2 focus:ring-[#FF9100]/20 
          focus:outline-none transition-all duration-300 
          ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      {helper && !error && (
        <p className="text-[#B0B0B0] text-sm">{helper}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';