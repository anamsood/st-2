import "./Table.css";

function Table() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Hurry up!</h1>
          <h5>and choose your best suited package</h5>
        </div>

        <table className="main-table">
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
          <tr>
            <th>Price</th>
            <td>500</td>
            <td>1000</td>
            <td>2000</td>
          </tr>
          <tr>
            <th>Service</th>
            <td>Hairwash</td>
            <td>Hairwash,haircut</td>
            <td>Hairwash,cut and nail trim </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Table;
