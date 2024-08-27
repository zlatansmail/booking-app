export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.img ||
              "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
            }
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    }
  },
  {
    field: "email",
    headerName: "Email",
    width: 230
  },

  {
    field: "country",
    headerName: "Country",
    width: 100
  },
  {
    field: "city",
    headerName: "City",
    width: 100
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100
  }
];

export const hotelColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70
  },
  {
    field: "name",
    headerName: "Name",
    width: 250
  },
  {
    field: "type",
    headerName: "Type",
    width: 100
  },
  {
    field: "title",
    headerName: "Title",
    width: 300
  },
  {
    field: "city",
    headerName: "City",
    width: 100
  }
];

export const roomColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70
  },
  {
    field: "title",
    headerName: "Title",
    width: 100
  },
  {
    field: "description",
    headerName: "Description",
    width: 230
  },
  {
    field: "price",
    headerName: "Price",
    width: 100
  },
  {
    field: "maxPersons",
    headerName: "Max Persons",
    width: 100
  }
];
