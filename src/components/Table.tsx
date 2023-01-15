function Table() {
  return (
    <div className="table">
      <table>
        <tr>
          <th>Serial Number</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Hobbies</th>
          <th>Update/Delete</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
