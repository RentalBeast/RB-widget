import React, {useState} from "react";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

export function RBSearchWidget(props) {
    const {state, city, zipcode, newTab} = props;
    const [listings, setListings] = useState();
    const [commissions, setCommissions] = useState();
    const [showStats, setShowStats] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const renderRedirect = () => {
        const url = "https://www.rentalbeast.com/";
        newTab ? window.open(url, "_blank") : location.replace(url)
    };

    const getShowStats = async (values: any) => {
        const listings = 25;
        const commissions = 1000;
        setListings(listings);
        setCommissions(commissions);
    };

    return (
        <div className="container main-settings">
            <form>
                <button onClick={(e) => {
                    e.preventDefault();
                    getShowStats(props);
                    setShowStats(true);
                }}>Save Changes
                </button>
            </form>
            <div>
                {
                    showStats &&
                    <button onClick={renderRedirect}>
                        {listings} Listings<br/>
                        {formatter.format(commissions)} Commissions<br/>
                        Search Rental Beast >
                    </button>
                }
            </div>
        </div>
    )
}