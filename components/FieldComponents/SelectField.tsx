const SelectField = ({ input, label, style, children, styleTextError,  meta: { touched, error } }: any) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <select className={style} {...input}
                >
                    {children}
                </select>
                <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
            </div>
        </div>
    )
}

export default SelectField;