import "./Form.css";

function Form() {
  return (
    <>
      <main>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name"></input>

          <label>Mobile no:</label>
          <input type="number" placeholder="Enter your mobile number"></input>

          <label>Date:</label>
          <input type="date"></input>

          <label className="service">Services:</label>
          <div className="services">
            <input type="checkbox"></input>
            <p>Basic</p>
            <input type="checkbox"></input>
            <p>Standard</p>
            <input type="checkbox"></input>
            <p>Premium</p>
          </div>
          <button>Submit</button>
        </form>
        <div>
          <h1>Book an appointment!</h1>
          <p>Call on +91-7837708123 for further queries</p>
        </div>
      </main>
    </>
  );
}

export default Form;
