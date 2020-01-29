import React, {useState} from "react";
import axios from "axios";
import styles from "./rb_search_widget.module.scss";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

export function RBSearchWidget(props: IRBSearchWidget) {
    const {settings, newTab} = props;
    const [listings, setListings] = useState();
    const [commissions, setCommissions] = useState();
    const [showStats, setShowStats] = useState(false);
    const [loading, setLoading] = useState();

    const listingStats = async(filters: IRBSearchWidget["settings"]) => {
        var url = 'https://rbdev.be.rentalbeast.com/v1/listing_stats.json';
        const authorizedParams = {
            headers: {
                'Content-Type': 'application/json'
            },
            params: filters
        };
        return axios.get(url, authorizedParams).then(res => {
            setLoading(false);
            return res.data.data;
        }).catch(e => console.error(e));
    };

    const getShowStats = async () => {
        setLoading(true);
        const response = await listingStats(settings);
        let listings = response.total_count;
        const commissions = response.total_commission;
        setListings(listings);
        setCommissions(commissions);
        setShowStats(true);
    };

    return (
        <div className={styles.mainSettings}>
            <button onClick={(e) => {
                e.preventDefault();
                getShowStats();
            }}>Search
            </button>
            {
                loading ? 'Loading Data...' :
                    showStats &&
                    <form method="post" action="https://rbdev.rentalbeast.com/mred_sso/bp_search">
                        <fieldset>
                            <input type="hidden" name="state" value={settings.state}/>
                            <input type="hidden" name="city" value={settings.city}/>
                            <input type="hidden" name="zip_codes" value={settings.zip_codes}/>
                            <input type="hidden" name="gen_neighborhood" value={settings.gen_neighborhood}/>
                            <input type="hidden" name="unitNumber" value={settings.unitNumber}/>
                            <input type="hidden" name="min_price" value={settings.min_price}/>
                            <input type="hidden" name="max_price" value={settings.max_price}/>
                            <input type="hidden" name="min_bedrooms" value={settings.min_bedrooms}/>
                            <input type="hidden" name="min_bathrooms" value={settings.min_bathrooms}/>
                            <input type="hidden" name="statuses" value="Active"/>
                            <div className={styles.gridContainer} type="submit">
                                <div className={styles.rbLogo}>
                                    <img src="https://cdn.rentalbeast.com/default/rb-logo.png" />
                                </div>
                                <div>
                                    <span className={styles.boldText}>{listings} </span>
                                     Listings<br/>
                                </div>
                                <div>
                                    <span className={styles.boldText}>{formatter.format((commissions.toFixed()))} </span>
                                     Commissions<br/>
                                </div>
                                <div>
                                    <input type="submit" value="SEARCH RENTAL BEAST >" className={styles.searchButton}/>
                                </div>
                            </div>
                        </fieldset>
                    </form>
            }
        </div>
    )
}

interface IRBSearchWidget {
    settings: {
        readonly state?: string;
        readonly city?: string;
        readonly zip_codes?: number;
        readonly gen_neighborhood?: string;
        readonly unitNumber?: number;
        readonly min_price?: number;
        readonly max_price?: number;
        readonly min_bedrooms?: number;
        readonly min_bathrooms?: number;
    };
    readonly newTab: boolean;
}