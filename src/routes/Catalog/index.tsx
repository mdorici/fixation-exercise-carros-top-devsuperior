import './styles.css';
import HeaderClient from "../../components/HeaderClient";
import SearchBar from '../../components/SearchBar';

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main className="ct-catalog-main">
        <section id="ct-catalog-section" className="ct-container">

            <div className="ct-search-bar-container">
                <SearchBar/>
            </div>

            <div className="ct-catalog-cards-container">
                <div>teste</div>
            </div>

        </section>
      </main>
    </>
  );
}
