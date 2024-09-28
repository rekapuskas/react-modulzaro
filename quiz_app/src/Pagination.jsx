import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("_page") || 1);

  const handleNext = () => {
    searchParams.set("_page", page + 1);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <button disabled = {page === 10}onClick={handleNext}>Next question</button>
      {page === 10 ? <Link to = 'results'><button>Result</button></Link>  : ''}
    </div>
  );
}
