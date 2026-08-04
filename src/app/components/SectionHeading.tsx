interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

export function SectionHeading({
  title,
  subtitle,
  variant = 'dark',
}: SectionHeadingProps) {
  const titleClass =
    variant === 'light' ? 'text-white' : 'text-gray-900';
  const subtitleClass =
    variant === 'light' ? 'text-petroleum-100' : 'text-gray-600';

  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl lg:text-5xl mb-4 ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
