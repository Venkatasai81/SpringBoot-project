function Table(){
    return(
        <div>
            <table class="table table-dark table-sm">
            <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Profession</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Venkata Sai</td>
      <td>22</td>
      <td>Student</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mahesh</td>
      <td>24</td>
      <td>Bussiness Man</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Naga Raju</td>
      <td>32</td>
      <td>Politician</td>
    </tr>
  </tbody>

        </table>
        </div>
    );
}
export default Table;