import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import Footer from "../../components/footer/Footer";

const List = () => {
  const { city } = useContext(SearchContext);

  const { data, loading, error, reFetch } = useFetch(`/hotels?city=${city}`);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <div className="listResult">
          {loading ? (
            "loading"
          ) : (
            <>
              {data.map((item) => (
                <SearchItem item={item} key={item._id} />
              ))}
            </>
          )}
        </div>
        <Footer/>
      </div>
    
    </div>
  );
};

export default List;
