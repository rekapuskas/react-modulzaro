import { useEffect, useState } from "react";
import Question from "./Question";
import { useSearchParams } from "react-router-dom";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("_page") || 1);
  const perPage = 1;

  function shuffleArray(array, numQuestions) {
    if (array.length <= numQuestions) {
      return array;
    } else {
      return array
        .map((question) => ({
          ...question,
          options: question.options.sort(() => Math.random() - 0.5),
        }))
        .sort(() => Math.random() - 0.5)
        .slice(0, numQuestions);
    }
  }

  function getPaginatedQuestions(array, page, perPage) {
    const startIndex = (page - 1) * perPage;
    return array.slice(startIndex, startIndex + perPage);
  }

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => {
        const shuffledQuestions = shuffleArray(data, 10);
        const paginatedQuestions = getPaginatedQuestions(
          shuffledQuestions,
          page,
          perPage
        );
        setQuestions(paginatedQuestions);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, [page, perPage]);

  return (
    <div>
      {questions?.map((question, index) => {
        return <Question page = {page} key={index} currentQuestion={question} id={index} />;
      })}
    </div>
  );
}
