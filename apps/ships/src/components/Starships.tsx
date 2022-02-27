import { Component } from "react";
import TableHead from "./TableHead";
import Details from "./Details";
import Loading from "./Loading";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface iStarshipsProps {}
export interface iStarshipsState {
  isLoading: boolean;
  starshipsArray: Starship[];
}
export interface Starship {
  name: "string";
  crew: "string";
  passengers: "numbers";
  cargo_capacity: "numbers";
  cost_in_credits: "numbers";
  length: "numbers";
}

class Starships extends Component<iStarshipsProps, iStarshipsState> {
  constructor(props: iStarshipsProps) {
    super(props);
    this.state = {
      isLoading: false,
      starshipsArray: [],
    };
  }

  private getStarships = () => {
    const starships = fetch("https://swapi.dev/api/starships/");
    return starships;
  };

  override async componentDidMount(): Promise<void> {
    this.setState({ isLoading: true });
    const fetchedStarships = await this.getStarships()
      .then((data) => data.json())
      .catch((error) => {
        console.error("Error:", error);
      });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        starshipsArray: fetchedStarships.results,
      });
    }, 2000);
  }

  override render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div>
        <h1 className="d-flex justify-content-center text-warning">
          Starships
        </h1>
        <table className="table table-striped table-hover">
          <TableHead />
          <tbody>
            {this.state.starshipsArray.map((starship, i) => {
              return (
                <tr key={i + "starship"}>
                  <td key={i + "name"}>{starship.name}</td>
                  <td key={i + "passengers"}>{starship.passengers}</td>
                  <td key={i + "crew"}>{starship.crew}</td>
                  <td key={i + "details"}>
                    <Details starship={starship} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Starships;
