interface Filter {
    key: string;
    label: string;
}

interface Props {
    filters: Filter[];
    activeFilter: string;
    onFilterChange: (key: string) => void;
}

const FilterBar = ({ filters, activeFilter, onFilterChange }: Props) => {
    return (
        <div className="flex gap-3 mb-12 flex-wrap items-center">
            {filters.map((f) => (
                <button
                    key={f.key}
                    onClick={() => onFilterChange(f.key)}
                    className={`flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200 ${activeFilter === f.key
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "bg-primary/10 text-slate-700 hover:bg-primary/20"
                        }`}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
