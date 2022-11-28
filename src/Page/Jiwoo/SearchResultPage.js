import React from 'react';
import UpperLayer from '../../components/Jiwoo/UpperLayer';
import SearchResult from '../../components/Jiwoo/SearchResult';

function SearchResultPage () {
    return(
        <div className="Page">
            <UpperLayer />
            <div className="Background">
                <SearchResult />
            </div>
        </div>
    );

}

export default SearchResultPage;