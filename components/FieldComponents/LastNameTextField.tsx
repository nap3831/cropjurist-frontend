const LastNameTextField = ({
    input,
    label,
    type,
    styleTextError,
    meta: { touched, error },
  }: any) => {
    return (
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          name="lastname"
          className="form-control"
          required=""
        />
        <p className={styleTextError}>{touched && error && <span>{error}</span>}</p>
      </div>
    );
  };
  
  export default LastNameTextField;
  