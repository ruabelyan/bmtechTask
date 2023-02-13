import {
  createStyles,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Theme
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import Header from "../../header/Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(10),
        width: 200,
        display: "flex",
      },
    },
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(1),
        padding:'0 200px'
      },
    },
    table: {
      minWidth: 650,
    },
    tableRow: {
      backgroundColor: "white",
      padding:'20px'
    },
  })
);

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const InvoicesList: React.FC = () => {
  const classes = useStyles();

  const [invoiceData, setInvoiceData] = useState<IUser[]>([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
    },
    {
      id: 3,
      firstName: "Jim",
      lastName: "Smith",
      email: "jim.smith@example.com",
    },
  ]);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) return;

    if (editing) {
      setInvoiceData(
        invoiceData.map((invoice) =>
          invoice.id === id
            ? {
                id,
                firstName,
                lastName,
                email,
              }
            : invoice
        )
      );
      setEditing(false);
      setId(null);
    } else {
      setInvoiceData([
        ...invoiceData,
        {
          id: Date.now(),
          firstName,
          lastName,
          email,
        },
      ]);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleEdit = (id: number) => {
    const invoice = invoiceData.find((invoice) => invoice.id === id);
    if (invoice) {
      setEditing(true);
      setId(id);
      setFirstName(invoice.firstName);
      setLastName(invoice.lastName);
      setEmail(invoice.email);
    }
  };

  const handleDelete = (id: number) => {
    setInvoiceData(invoiceData.filter((invoice) => invoice.id !== id));
  };

  return (
    <div className={classes.root}>
      {/* <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          {editing ? "Update" : "Add"}
        </Button>
      </form> */}
      {/* <Header></Header> */}
      <Header />

      <Table className={classes.table} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {invoiceData.map((invoice, index) => (
            <TableRow className={classes.tableRow} key={index}>
              <TableCell>{invoice.firstName}</TableCell>
              <TableCell>{invoice.lastName}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(invoice.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(invoice.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoicesList;
