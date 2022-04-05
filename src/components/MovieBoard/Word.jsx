import { Letter } from "./Letter";
export const Word = (props) => {
  return (
    <div className="mr-6">
      <div className="flex mb-2">
        {props.letter.map((l, index) => (
          <Letter letter={l} key={index} keyPressed={props.keyPressed} />
        ))}
      </div>
    </div>
  );
};
