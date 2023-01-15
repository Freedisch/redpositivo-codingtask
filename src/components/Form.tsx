function Form() {
  return (
    <div className="form">
      <form action="#">
        <label>First name:</label>
        <br />
        <input type="text" />
        <br />
        <label>Phone Number</label>
        <br />
        <input type="number" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" />
        <br />
        <label>Hobbies</label>
        <br />
        <input type="description" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
