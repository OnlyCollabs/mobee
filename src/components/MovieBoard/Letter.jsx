export const Letter = (props) => {
  const vowels = "AEIOU";

  const containsSpecialChar = (char) => {
    const specialChars = /\W|_/g;
    return specialChars.test(char);
  };

  return (
    <div className="mr-6">
      <div className="flex">
        {props.letter.map((l, index) => (
          <div
            key={index}
            style={{ minWidth: "4rem", minHeight: "4rem" }}
            className={`${
              containsSpecialChar(l)
                ? "p-2"
                : "p-4 border-2 border-solid border-black"
            } mx-1 text-2xl font-bold box-border text-center`}
          >
            {vowels.includes(l) || containsSpecialChar(l) ? l : ""}
          </div>
        ))}
      </div>
    </div>
  );
};
