import { ReactElement } from "react";

interface Props {
  texts: string;
  keywords: string;
}

const Hightlihgts = ({ texts, keywords }: Props): ReactElement => {
  const lightlightKeyword = (
    <>
      <mark>{keywords}</mark>
      &nbsp;
    </>
  );

  const textsArray: (string|ReactElement)[] = texts.split(' ').map(text => {
    if (text === keywords) {
      return lightlightKeyword;
      }
      return text
    });


  return <span>{textsArray}</span>;
};

export default Hightlihgts;
