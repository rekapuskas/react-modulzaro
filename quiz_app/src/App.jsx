import 'bootstrap/dist/css/bootstrap.min.css'
import Questions from "./Questions";
import Pagination from "./Pagination";
export default function App() {
  return (
    <div className="d-flex text-align-center bg-info">
      <h1>My quiz app</h1>
      <Questions/>
      <Pagination/>
    </div>
  );
}
