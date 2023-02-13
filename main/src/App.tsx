import InvoicesList from "./components/pages/invoices/InvoicesList";

const App = () => {

  const ROUTES = {
    users: "/users",
    baseUrl: "",
  };

  return (
    <div
    //TODO
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        height: "40vh",
        gap: "10px",
        marginLeft: "150px",
        padding: '0 200px'
      }}
    >
      <InvoicesList />
    </div>
  );
};

export default App;
