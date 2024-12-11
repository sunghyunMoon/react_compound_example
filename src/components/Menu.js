import { useSelectContext } from './Select';

const Menu = ({ children }) => {
    const { isOpen } = useSelectContext();
    return isOpen ? (
        <ul
            style={{
                listStyle: 'none',
                margin: 0,
                padding: '6px 0',
                border: '1px solid #ccc',
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'white',
            }}
        >
            {children}
        </ul>
    ) : null; // isOpen이 true일 때만 목록 표시
};

export default Menu;
