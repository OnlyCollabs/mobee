import { useState, useEffect } from "react";

export const Letter = (props) => {
  const [isEvaluated, setIsEvaluated] = useState(false);

  const vowels = "AEIOU";

  const containsSpecialChar = (char) => {
    const specialChars = /\W|_/g;
    return specialChars.test(char);
  };

  useEffect(() => {
    if (containsSpecialChar(props.letter) || vowels.includes(props.letter)) {
      setIsEvaluated(true);
    }
  }, [props.letter]);

  useEffect(() => {
    if (props.letter === props.keyPressed) {
      setIsEvaluated(true);
    }
  }, [props.letter, props.keyPressed]);
  return (
    <div
      char={props.letter.charCodeAt(0)}
      style={{ minWidth: "4rem", minHeight: "4rem" }}
      className={`${
        containsSpecialChar(props.letter)
          ? "p-2"
          : "p-4 border-2 border-solid border-black"
      } mx-1 text-2xl font-bold box-border text-center`}
    >
      {isEvaluated ? props.letter : ""}
    </div>
  );
};
