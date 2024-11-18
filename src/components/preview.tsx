'use client';

export function Preview({ children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className="bg-ts p-8">
      <div
        className="bg-background rounded-lg px-4 py-3"
        style={{
          boxShadow:
            'rgba(50, 50, 93, 0.3) 0px 13px 27px -5px, rgba(0, 0, 0, 0.45) 0px 8px 16px -8px',
        }}
      >
        {children ?? <Placeholder />}
      </div>
    </div>
  );
}

function Placeholder() {
  return (
    <pre
      className="shiki dark-plus twoslash lsp min-h-full"
      style={{ backgroundColor: '#1E1E1E', color: '#D4D4D4' }}
      tabIndex={0}
    >
      <code>
        <span className="line">
          <span style={{ color: '#6A9955' }}>{'// some comment'}</span>
        </span>
      </code>
    </pre>
  );
}
