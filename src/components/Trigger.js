import { useSelectContext } from './Select';

const Trigger = () => {
    const { isOpen, toggle, selectedValue } = useSelectContext();
    return (
        <button
            onClick={toggle}
            style={{ cursor: 'pointer', padding: '6px 12px' }}
        >
            {selectedValue ?? 'Select an option'}{' '}
            {/* 선택된 값이 없으면 안내 문구 */}
            <span>{isOpen ? '▲' : '▼'}</span>{' '}
            {/* 메뉴 상태에 따라 화살표 방향 표시 */}
        </button>
    );
};

export default Trigger;
