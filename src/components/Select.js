import { createContext, useContext, useState } from 'react';
import Trigger from './Trigger';
import Menu from './Menu';
import Option from './Option';

const SelectContext = createContext();

export function useSelectContext() {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error(
            'Select compound components must be used within a Select'
        );
    }
    return context;
}

const Select = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false); // 메뉴 열림/닫힘 상태
    const [selectedValue, setSelectedValue] = useState(null); // 선택된 옵션 값

    const toggle = () => setIsOpen((prev) => !prev); // 메뉴 열림/닫힘 토글 함수
    const selectOption = (value) => {
        setSelectedValue(value); // 새로운 값 선택
        setIsOpen(false); // 선택 후 메뉴 닫기
    };

    const value = { isOpen, selectedValue, toggle, selectOption };

    return (
        <SelectContext.Provider value={value}>
            <div
                className="select-container"
                style={{
                    position: 'fixed', // 화면에 고정
                    top: '50%', // 세로 기준 중앙
                    left: '50%', // 가로 기준 중앙
                    transform: 'translate(-50%, -50%)', // 중앙에서 정렬 보정
                    display: 'inline-block',
                }}
            >
                {children}
            </div>
        </SelectContext.Provider>
    );
};

export default Select;

Select.Trigger = Trigger;
Select.Menu = Menu;
Select.Option = Option;
