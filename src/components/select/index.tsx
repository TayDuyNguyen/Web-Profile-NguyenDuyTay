import ReactSelect, { 
    type SingleValue, 
    type StylesConfig,
    type OptionProps,
    components as selectComponents 
} from "react-select";

interface OptionType {
    label: string;
    value: string;
    image?: string;
}

interface SelectProps {
    options: OptionType[];
    value?: OptionType;
    icon?: React.ReactNode;
    placeholder?: string;
    isClearable?: boolean;
    isSearchable?: boolean;
    onChange?: (value: string) => void;
    className?: string;
}

// Custom styles để tránh xung đột với Tailwind
const customStyles: StylesConfig<OptionType, false> = {
    control: (base) => ({
        ...base,
        paddingLeft: '2.5rem', // chừa chỗ cho icon
        minHeight: '44px', // chiều cao của select
        borderRadius: '0.5rem', // bo tròn của select
        borderColor: '#e5e7eb', // màu viền
        '&:hover': { borderColor: '#d1d5db' },
    }),
    option: (base, state) => ({
        ...base,
        display: 'flex',// hiển thị flex
        alignItems: 'center',// căn giữa
        gap: '0.5rem',// khoảng cách giữa các phần tử
        padding: '0.5rem',// padding
        backgroundColor: state.isSelected ? '#3b82f6' : state.isFocused ? '#f3f4f6' : 'white',
        color: state.isSelected ? 'white' : 'inherit',
        cursor: 'pointer',
    }),
};

// Custom Option component đúng pattern
const CustomOption = (props: OptionProps<OptionType, false>) => {
    const { data, isSelected } = props;
    return (
        <selectComponents.Option {...props}>
            <div className="flex items-center gap-2">
                {data.image && (
                    <img
                        src={data.image}
                        alt={data.label}
                        className="w-6 h-6 rounded-full object-cover"
                    />
                )}
                <span className={isSelected ? 'font-medium' : ''}>{data.label}</span>
            </div>
        </selectComponents.Option>
    );
};

const Select = ({
    options,
    value,
    icon,   
    placeholder,
    isClearable = false,
    isSearchable = false,
    onChange,
    className = '',
}: SelectProps) => {
    return (
        <div className={`relative ${className}`}>
            {icon && (
                <span className="absolute left-3 top-1/2 mt-1 -translate-y-1/2 z-10 pointer-events-none text-gray-500">
                    {icon}
                </span>
            )}

            <ReactSelect<OptionType, false>
                options={options}
                value={value}
                defaultValue={options[0]}
                placeholder={placeholder}
                isClearable={isClearable}
                isSearchable={isSearchable}
                styles={customStyles}
                components={{ Option: CustomOption }}
                onChange={(option: SingleValue<OptionType>) => {
                    onChange?.(option?.value ?? '');
                }}
            />
        </div>
    );
};

export default Select;