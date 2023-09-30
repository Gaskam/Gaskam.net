import Header from "../components/Header.tsx";
import Card from "../components/Card.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div class="logo-acceuil">
          <img
            src="/images/pastelGradient.svg"
            alt="the background of the gaskam logo"
          />
          {/* <span>Gaskam</span> */}
        </div>
        <div className="citations">
          <span className="content">
            “Le débogage est deux fois plus difficile que la programmation. Si
            vous écrivez le code aussi intelligemment que possible, vous êtes,
            par définition, trop stupide pour déboguer.”
          </span>
          <span className="author">Brian W. Kernighan</span>
        </div>
        <div className="downArrow">
          <div className="downArrowHoverEffect">
            <img
              src="/images/downArrow.svg"
              alt="the background of the gaskam logo"
            />
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="featured">
        <img
          src="/images/pataland-hight.jpg"
          alt="the PataLand presentation poster"
        />
        <div class="over-image">
          <h2>PataLand</h2>
          <p>
            Rejoignez-nous sur notre serveur BeamMP! De nombreux plugins y sont
            installés et vous pourrez tester de nouveaux mode de jeu
            exclusifs...
          </p>
          <div class="play-pataland" id="play-pataland">
            <h3>Jouer !</h3>
          </div>
        </div>
      </div>
      <Card title="DevTimer" content="Cette librairie TypeScript est d’une simpilcité... Vous allez adorer !" linkHref="/hello.txt" linkText="Tester une démo"></Card>
    </>
  );
}
