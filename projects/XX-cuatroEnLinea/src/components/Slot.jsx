export const Slot = ( { children, isSelected, updateBoard, columnIndex } ) => {
    const className = `slot ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
        updateBoard(columnIndex)
    }
    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}