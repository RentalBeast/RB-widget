import React, {useState} from "react";
import axios from "axios";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});
const listingStats = async(filters) => {
    var url = 'https://rbdev.be.rentalbeast.com/v1/listing_stats.json';
    const authorizedParams = {
        headers: {
            'Content-Type': 'application/json'
        },
        params: filters
    };
    return axios.get(url, authorizedParams).then(res => {
        return res.data.data;
    }).catch(e => console.error(e));
};

export function RBSearchWidget(props: IRBSearchWidget) {
    const {settings, newTab} = props;
    const [listings, setListings] = useState();
    const [commissions, setCommissions] = useState();
    const [showStats, setShowStats] = useState(false);

    const renderRedirect = () => {
        const url = "https://www.rentalbeast.com/";
        newTab ? window.open(url, "_blank") : location.replace(url)
    };

    const getShowStats = async () => {
        const response = await listingStats(settings);
        let listings = response.total_count;
        const commissions = response.total_commission;
        setListings(listings);
        setCommissions(commissions);
        setShowStats(true);

    };

    return (
        <div className="container main-settings">
            <form>
                <button onClick={(e) => {
                    e.preventDefault();
                    getShowStats();
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

interface IRBSearchWidget {
    settings: {
        readonly state?: string;
        readonly city?: string;
        readonly zipCode?: number;
        readonly streetAddress?: string;
        readonly unitNumber?: number;
        readonly minRent?: number;
        readonly maxRent?: number;
        readonly minBedrooms?: number;
        readonly minBathroom?: number;
    };
    readonly newTab: boolean;

}