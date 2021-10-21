import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  console.log(searchResults);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${dateRange} | ${noOfGuest} Guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-5">
          <p className="text-xs">
            300+ stays • {dateRange} • for {noOfGuest} guests
          </p>
          <h1 className="mb-6 mt-2 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="hidden text-gray-800 whitespace-nowrap space-x-3 lg:inline-flex pb-4">
            <p className="filter-button">Cancellation Flexibility</p>
            <p className="filter-button">Type of Place</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and Beds</p>
            <p className="filter-button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                description={item.description}
                title={item.title}
                location={item.location}
                price={item.price}
                star={item.star}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
