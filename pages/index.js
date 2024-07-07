import { useState } from 'react';
import Head from 'next/head';
import namesData from './name.json';

export default function Home() {
  const [availableNames, setAvailableNames] = useState([...namesData.names]);
  const [usedNames, setUsedNames] = useState([]);
  const [randomName, setRandomName] = useState('');

  const getRandomName = () => {
    if (availableNames.length === 0) {
      // Reset used names if all names have been used
      setAvailableNames([...namesData.names]);
      setUsedNames([]);
    }

    const randomIndex = Math.floor(Math.random() * availableNames.length);
    const newName = availableNames[randomIndex];

    // Update state to reflect the used name and remove it from available names
    setUsedNames([...usedNames, newName]);
    setAvailableNames(availableNames.filter(name => name !== newName));

    setRandomName(newName);
  };

  return (
    <div className="container">
      <Head>
        <title>คำใบ้จากพี่ปีสอง ที่จริงใจ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">คำใบ้จากพี่ปีสอง ที่จริงใจ</h1>

        <p className="description">
          กดเลยจ้า รับคำใบ้ฟินฟิน จากพี่เทค:
        </p>

        <div className="generator">
          <button onClick={getRandomName}>เอาหลาว เอาหลาว</button>
          {randomName && <p className="random-name">{randomName}</p>}
        </div>
      </main>

      <footer>
        <p>Names sourced from <a href="https://example.com">example.com</a></p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
        }

        .generator {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        button {
          font-size: 1.5rem;
          cursor: pointer;
          padding: 1rem 2rem;
          border: none;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0053b3;
        }

        .random-name {
          margin-top: 1rem;
          font-size: 6rem;
        }

        footer {
          width: 100%;
          height: 80px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer p {
          margin: 0;
          font-size: 0.9rem;
          color: #888;
        }

        footer a {
          color: #0070f3;
          text-decoration: none;
        }

        footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
