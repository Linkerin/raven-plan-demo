import { useState, useEffect } from 'react';
import styles from '../../../styles/components/sidebars/LeftBar/Quote.module.css';

function Quote() {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [quote, setQuote] = useState({
    quote: 'Quote of the day',
    author: ''
  });

  const copyIcon = (
    <svg
      className={styles.copyIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#6951ae"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="8" y="8" width="12" height="12" rx="2"></rect>
      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
    </svg>
  );

  const toggleHovered = e => {
    switch (e.type) {
      case 'mouseenter':
        setHovered(true);
        break;
      case 'mouseleave':
        setHovered(false);
        break;
      default:
        console.log('Other event type');
    }
  };

  useEffect(() => {
    setQuote({
      quote:
        "Many of life's failures are experienced by people who did not realize how close they were to success when they gave up.",
      author: 'Thomas Edison'
    });
  }, []);

  // Copy quote  to clipboard
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote.quote}" ${quote.author}`);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error(`Error while coping the quote to the clipboard: ${err}`);
    }
  };

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
    >
      <div className={styles.quoteContainer}>
        <p>
          {`${quote.quote}`} {hovered ? copyIcon : null}{' '}
          <span className={styles.copied}>
            {hovered && copied ? 'Copied!' : null}
          </span>
        </p>
      </div>
      <p className={styles.author}>{quote.author}</p>
    </div>
  );
}

export default Quote;
