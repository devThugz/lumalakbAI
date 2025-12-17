import React from 'react';
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}
const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-12 h-12 sm:w-16 sm:h-16'
  };
  const textSizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl'
  };
  return <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="relative flex-shrink-0">
        <img src="/Picture1.png" alt="LumalakbAI Logo" className={`${sizeClasses[size]} rounded-full shadow-lg shadow-teal-500/50`} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 blur-md animate-pulse"></div>
      </div>
      <span className={`hidden md:block font-bold ${textSizeClasses[size]} ${variant === 'white' ? 'text-white' : 'bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'}`}>
        LumalakbAI
      </span>
    </div>;
};
export default Logo;