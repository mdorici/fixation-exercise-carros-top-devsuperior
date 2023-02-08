import './styles.css';
import HeaderClient from "../../components/HeaderClient";
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </section>
      </main>
    </>
  );
}
