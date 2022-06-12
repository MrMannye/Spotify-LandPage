import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../utils/datatablesource";
import { useState } from "react";
import Link from 'next/link'
import { useEffect } from "react";
import Axios from 'axios'

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    Axios.get("https://backend-nest-bdd.herokuapp.com/users")
    .then(response => {
      console.log(response.data);
      setUsers(response.data)
    })
  },[])


  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link href={`/users/${params.row._id}`}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={""}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">

      <DataGrid
        className="datagrid"
        rows={users}
        getRowId={(users) => users._id}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
