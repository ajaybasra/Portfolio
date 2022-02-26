import "./about.css";
import movie from "../../images/spiritedaway.jpeg";
import me2 from "../../images/me2.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me2}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          “Don’t be afraid to fail. Be afraid to not try.”
        </p>
        <p className="a-desc">
          Apart from learning new things, I love keeping fit at the gym or shooting hoops with mates. When it comes to relaxing I enjoy binge watching anime or hitting the local cinema. I've also been reading books on investing and in particular have been wanting to become more knowledgeable about index funds 💵 .
        </p>
        <div className="a-movie">
          <img src={movie} alt="" className="a-movie-img" />
          <div className="a-movie-texts">
            <h4 className="a-movie-title">Spirited Away (2001)</h4>
            <p className="a-movie-desc">
              Spirited Away is one of my favourite movies of all time, and in my opinion, everyone should watch it at least once (it's that good!).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;