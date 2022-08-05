import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useState, useEffect } from "react";
import Dog from "./Dog";
import Footer from "./Footer";
import Selecao from "./Selecao";
import Texto from "./Texto";

type SomeComponentProps = RouteComponentProps;

const Home: FC<SomeComponentProps> = ({ history }) => {
  const [nameOfBreeds, setNameOfBreeds] = useState<string[]>([]);

  const [imagesOfABreed, setImagesOfABreed] = useState<string[]>([]);

  const [breedName, setBreedName] = useState<string>("");

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  useEffect(() => {
    const start = async () => {
      try {
        const response = await fetch("https://dogbreed-api.q9.com.br/list");
        const data = await response.json();
        console.log(data.message);
        setNameOfBreeds(data.message);
      } catch (error) {
        const err = error as Error;
        console.log(err.message);
      }
    };

    start();
  }, []);

  const loadByBreed = async (breed: string) => {
    if (breed === "chihuahua" || breed !== "chihuahua") {
      try {
        const response = await fetch(
          `https://dogbreed-api.q9.com.br/list/${breed}`
        );
        const data = await response.json();
        setImagesOfABreed(data.message);
      } catch (error) {
        const err = error as Error;
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <main className="App">
        <header className="Header">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Desafio Dog Breed</h1>
              </div>
              <div className="col-12 text-right">
                <button type="submit" className="logout" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="section">
          <div className="container">
            <Texto />
            <Selecao
              nameOfBreeds={nameOfBreeds}
              setBreedName={setBreedName}
              loadByBreed={loadByBreed}
            />
            <Dog breedName={breedName} imagesOfABreed={imagesOfABreed} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
