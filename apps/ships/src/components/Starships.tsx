import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import Details from "./Details";
import Loading from "./Loading";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface iStarshipsProps {}
export interface Starship {
  name: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  cost_in_credits: string;
  length: string;
}

const Starships = (props: iStarshipsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [starshipsArray, setStarshipsArray] = useState<Starship[]>([]);

  useEffect(() => {
    const fetchedStarships = getStarships();

    setIsLoading(true);
    fetchedStarships.then((starships) => {
      setTimeout(() => {
        setIsLoading(false);
        setStarshipsArray(starships.results);
      }, 2000);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="d-flex justify-content-center text-warning">Starships</h1>
      <table className="table table-striped table-hover">
        <TableHead />
        <tbody>
          {starshipsArray.map((starship, i) => {
            return (
              <tr key={i + "starship"}>
                <td>{starship.name}</td>
                <td>{starship.passengers}</td>
                <td>{starship.crew}</td>
                <td>
                  <Details starship={starship} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const getStarships = async (): Promise<any> => {
  const starships = await fetch("https://swapi.dev/api/starships/");
  const response = await starships.json();
  
  return response;
};

export default Starships;
