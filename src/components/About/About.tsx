import { useState } from "react";
import './About.css';

type Joke = {
    value: string;
  };

const About = () => { 
    const [joke, setJoke] = useState<string | null>(null);

    const fetchJoke = async () => {
        try {
          const response = await fetch('https://api.chucknorris.io/jokes/random');
          const data: Joke = await response.json();
          const updatedJoke = data.value.replace(/Chuck Norris/gi, 'JaseJon');
          const updatedJoke1 = updatedJoke.replace(/Chuck/gi, 'JaseJon');
          setJoke(updatedJoke1);
        } catch (error) {
          console.error('Error fetching joke:', error);
          setJoke('Failed to fetch joke.');
        }
      };
    
  return (
    <div className="about">
      <h1>About</h1>
      <p>
      The common man's mind cannot handle more than 3 facts about JaseJon at a time due to his powerful awesomeness. Please proceed with caution.

      </p>
      <button onClick={fetchJoke}>Get JaseJon Fact</button>
      {joke && <div className="jjfact"><h1>Fact:</h1><br/><p>{joke}</p> </div>}
      <br/>
    </div>
  );
}

export default About;