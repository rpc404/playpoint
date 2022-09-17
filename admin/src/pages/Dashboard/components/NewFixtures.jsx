import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import DateTimePicker from 'react-datetime-picker';

export default function NewFixtures({
    setIsHome,
    setAction,
    getFixtures
}) {
    /**
     * @dev for new fixture validation
     */
    const [newFixtureItem, setNewFixtureItem] = React.useState({
        marketplaceSlug: "",
        MatchNumber: "",
        RoundNumber: "",
        DateUtc: "",
        Location: "",
        HomeTeam: "",
        AwayTeam: "",
        Group: "",
        HomeTeamScore: "",
        AwayTeamScore: ""
    });

    const [marketplaceItems, setMarketplaceItems] = React.useState([]);
    const getMarketplaces = () => {
        axios
            .get("http://localhost:4000/api/marketplace/get-marketplaces")
            .then((res) => {
                setMarketplaceItems(res?.data?.data);
            })
            .catch((err) => console.error(err));
    };

    React.useEffect(() => {
        getMarketplaces();
    }, []);


    const handleResetInputs = () => {
        setNewFixtureItem({
            marketplaceSlug: "",
            MatchNumber: "",
            RoundNumber: "",
            DateUtc: "",
            Location: "",
            HomeTeam: "",
            AwayTeam: "",
            Group: "",
            HomeTeamScore: "",
            AwayTeamScore: ""
        });
    };

    const handleNewFixture = async (e) => {
        e.preventDefault();

        axios
            .post(
                import.meta.env.VITE_SERVER_URI + "api/fixture/new-fixture",
                newFixtureItem
            )
            .then((res) => {
                if (res.status === 200) {
                    setIsHome(true);
                    setAction("");
                    getFixtures();
                }
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="newfixtures__container">
            <form onSubmit={handleNewFixture}>
                <h3>New Fixture</h3>
                <select
                    className="input"
                    onChange={(e) => setNewFixtureItem({ ...newFixtureItem, marketplaceSlug: e.target.value })}
                    value={newFixtureItem.marketplaceSlug}>
                    {marketplaceItems && marketplaceItems.map((item, key) =>
                        <option value={item.marketplaceSlug} key={key}>{item.marketplaceName}</option>)}
                </select>
                <input type="number"
                    className="input"
                    value={newFixtureItem.MatchNumber}
                    placeholder="Match Number"
                    onChange={(e) => setNewFixtureItem({ ...newFixtureItem, MatchNumber: e.target.value })} />

                <input
                    type="text"
                    placeholder="Location"
                    className="input"
                    value={newFixtureItem.Location}
                    onChange={
                        (e) => setNewFixtureItem({ ...newFixtureItem, Location: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Home Team"
                    className="input"
                    value={newFixtureItem.HomeTeam}
                    onChange={
                        (e) => setNewFixtureItem({ ...newFixtureItem, HomeTeam: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Away Team"
                    className="input"
                    value={newFixtureItem.AwayTeam}
                    onChange={
                        (e) => setNewFixtureItem({ ...newFixtureItem, AwayTeam: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Group"
                    className="input"
                    value={newFixtureItem.Group}
                    onChange={
                        (e) => setNewFixtureItem({ ...newFixtureItem, Group: e.target.value })
                    }
                />
                <input type="number"
                    className="input"
                    value={newFixtureItem.HomeTeamScore}
                    placeholder="Home Team Score"
                    onChange={
                        (e) => setNewFixtureItem({ ...newFixtureItem, HomeTeamScore: e.target.value })
                    } />

                <input type="number"
                    className="input"
                    value={newFixtureItem.AwayTeamScore}
                    placeholder="Away Team Score"
                    onChange={
                        (e) => setNewFixtureItem({ ...newFixtureItem, AwayTeamScore: e.target.value })
                    } />

                <DateTimePicker
                    placeholder="Date"
                    className={"input"}
                    onChange={(value) => setNewFixtureItem({ ...newFixtureItem, DateUtc: value })}
                    value={newFixtureItem.DateUtc} />
                <div className="buttons">
                    <Button type="submit">Submit</Button>
                    <Button onClick={() => handleResetInputs()}>Reset</Button>
                </div>
            </form>
        </div>
    );
}
