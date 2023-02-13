import Plus from "@material-ui/icons/AddCircleOutlineSharp";
import Button from "../button/Button";

const Header = () => {
  //TODO
  return (
    <div
      style={{
        height: "300px",
        width: "100%",
        backgroundColor: "#141625",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Invoices</h1>
        <h6 style={{ marginTop: "5px", color: "#9C9FB1" }}>
          There are 7 total invoices
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          alignItems: "center",
        }}
      >
        <h3>Filter by status</h3>
        <Button label="New Invoice" icon={<Plus />} />
      </div>
    </div>
  );
};

export default Header;
