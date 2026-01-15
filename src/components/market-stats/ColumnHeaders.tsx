interface Column {
  label: string;
  align?: 'left' | 'right';
}

interface ColumnHeadersProps {
  columns: Column[];
}

export function ColumnHeaders({ columns }: ColumnHeadersProps) {
  return (
    <thead>
      <tr className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-default)]">
        {columns.map((col, i) => (
          <th 
            key={i} 
            className={`py-2 px-2 font-medium ${col.align === 'right' ? 'text-right' : 'text-left'}`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

