import React from "react";
import { setIsAdd } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import ClientTable from "./ClientTable";

const Clients = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [clientList, setClientList] = React.useState(null);
  const [itemEdit, setItemEdit] = React.useState(null);

  return (
    <>
      <main className="main">
        <div className="main__wrapper d--grid">
          <Navigation />
          <div className="main__body">
            <Header />
            <ClientTable client={{ clientList, setClientList }} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Clients;
