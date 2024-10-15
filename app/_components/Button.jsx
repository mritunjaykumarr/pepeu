
function Button({className,onClick,value,children}) {
    return (
        <button  className={`btn ${className} py-[6px] px-4 lg:py-3 lg:px-6`} onClick={onClick} data-key={value}>
            {children}
        </button>
    )
}

export default Button
