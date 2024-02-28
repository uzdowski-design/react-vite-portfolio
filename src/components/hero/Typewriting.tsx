import { TypeAnimation } from 'react-type-animation';

const prepareTypewritingWords = (sentences: string[], delay: number) => {
  const sequence = [];
  for (const sentence of sentences) {
    sequence.push(sentence);
    sequence.push(delay);
  }
  return sequence;
};

const sentences = ['Developer', 'Designer', 'Tech Lover'];

const Typewriting = () => {
  const sequence = prepareTypewritingWords(sentences, 3000);
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
      repeat={Infinity}
    />
  );
};

export default Typewriting;
