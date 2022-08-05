import React from "react";

type SelecaoProps = {
  nameOfBreeds: string[];
  setBreedName: React.Dispatch<React.SetStateAction<string>>;
  loadByBreed: (breed: string) => void;
};

const Selecao = ({ nameOfBreeds, setBreedName, loadByBreed }: SelecaoProps) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="my-2">
          <select
            className="form-control select-tag"
            onChange={(e) => {
              loadByBreed(e.target.value);
              setBreedName(e.target.value);
            }}
          >
            {Object.keys(nameOfBreeds).map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Selecao;
