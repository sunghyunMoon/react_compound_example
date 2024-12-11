import { useSelectContext } from './Select';

const Option = ({ value, children }) => {
    const { selectOption } = useSelectContext();
    return (
        <li
            style={{
                padding: '6px 12px',
                cursor: 'pointer',
            }}
            onClick={() => selectOption(value)}
        >
            {children}
        </li>
    );
};

export default Option;
