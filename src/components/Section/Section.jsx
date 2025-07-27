import { useState } from "react";
import { useTotal } from "../../hooks/use-total";

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

const Section = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = useTotal(good, neutral, bad);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <FeedbackOptions
        good={() => setGood((prevState) => prevState + 1)}
        neutral={() => setNeutral((prevState) => prevState + 1)}
        bad={() => setBad((prevState) => prevState + 1)}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={
          isNaN(countPositiveFeedbackPercentage())
            ? 0
            : countPositiveFeedbackPercentage()
        }
      />
    </>
  );
};

export default Section;
